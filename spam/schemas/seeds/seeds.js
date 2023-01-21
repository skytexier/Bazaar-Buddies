const db = require('../../../server/config/connection');
const { Tech } = require('../../../server/models');

const techData = require('./techData.json');

db.once('open', async () => {
  await Tech.deleteMany({});

  const technologies = await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
//JL added from MERN 