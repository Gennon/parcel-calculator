import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongo: MongoMemoryServer = null;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri, {});
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (const collection of collections) {
    await collection.deleteMany({});
  }

  await mongoose.connection.db.collection('configurations').insertOne({
    baseCost: 10,
    costPerKg: 5,
    costPerParcel: 50,
  });
});

afterAll(async () => {
  if(mongo){
    await mongo.stop();
  }
  await mongoose.connection.close();
});
