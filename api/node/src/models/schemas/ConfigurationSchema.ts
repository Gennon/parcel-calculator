import { Schema } from "mongoose";

export default new Schema({
  baseCost: {
    type: Number,
    required: true
  },
  costPerKg: {
    type: Number,
    required: true
  },
  costPerParcel: {
    type: Number,
    required: true
  },
}, {
  toJSON: {
    transform: (doc, ret) => {
      delete ret._id;
      delete ret.__v;
    }
  }
});