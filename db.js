const dotenv = require('dotenv');
dotenv.config();
const { MongoClient } = require('mongodb');


MongoClient.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  module.exports = client.db();
  const app = require('./app');
  app.listen(process.env.PORT, () => console.log('listening'));
});
