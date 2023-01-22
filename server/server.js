const express = require ('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth')

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
// const routes = require("./controllers");
const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    const publicPath = path.join(__dirname, '../client/build');
    app.use(express.static(publicPath));
    app.use('*', express.static(publicPath));
  }

  const root = require('path').join(__dirname, '../client', 'build')
  app.use(express.static(root));
  app.get("*", (req, res) => {
      res.sendFile('index.html', { root });
  })

// Creating a new instance of an Apollo server 
const startApolloServer = async (typeDefs, resolvers) => { 
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

// Calling the async Apollo function to start the server
startApolloServer(typeDefs, resolvers);

// basic apolloserver set up (SHT)