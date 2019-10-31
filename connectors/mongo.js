const mongoose = require('mongoose');

const dbUser = 'security';
const dbPassword = 'security';
const dbName = 'test';

const mongoUri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0-y36d0.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongoUri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoDB connection error:'));
db.once('open', () => {
  console.log(`mongoDB connection success: ${mongoUri}`);
});
