import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
  },
  { collection: "Persons" }
);
export default mongoose.model("Persons", schema);
