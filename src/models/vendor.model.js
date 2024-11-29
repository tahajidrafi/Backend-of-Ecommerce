import mongoose, { Schema } from "mongoose";

const vendorSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
    },
    storeName: {
      type: String,
      required: true,
    },
    storeDescription: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    storeAddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vendor", vendorSchema);
