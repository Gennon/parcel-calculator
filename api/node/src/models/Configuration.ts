import { Document, Model, model } from "mongoose";
import ConfigurationSchema from "./schemas/ConfigurationSchema";

export interface IConfiguration extends Document {
  baseCost: number;
  costPerKg: number;
  costPerParcel: number;
}

const Configuration: Model<IConfiguration> = model<IConfiguration>("Configuration", ConfigurationSchema);
export default Configuration;