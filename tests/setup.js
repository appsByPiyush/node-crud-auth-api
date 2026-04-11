require('dotenv').config()
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const connectDB = require('../config/db');

let mongo;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();

  await connectDB(uri); // ✅ FIX HERE
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongo.stop();
});

afterEach(async () => {
  const collections = mongoose.connection.collections;

  for (let key in collections) {
    await collections[key].deleteMany();
  }
});