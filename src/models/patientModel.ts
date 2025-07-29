import mongoose, { Schema, Document } from "mongoose";

export interface IPatient extends Document {
  firstName: string;
  lastName: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  phone: string;
  address: string;
  createdAt: Date;
}

const patientSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true, 
  }
);

const Patient = mongoose.model<IPatient>("Patient", patientSchema);
export default Patient;
