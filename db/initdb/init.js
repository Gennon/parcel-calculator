db = new Mongo().getDB("parcel-calculator");

db.createCollection("configurations");

db.configurations.insert({
  baseCost: 10,
  costPerKg: 5,
  costPerParcel: 50
});
