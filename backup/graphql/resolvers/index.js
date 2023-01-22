const usersResolvers = require('./user');


module.exports = {
  Mutation: {
    ...usersResolvers.Mutation,
  }
};