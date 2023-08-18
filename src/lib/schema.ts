import mongoose, { Schema } from "mongoose";

export interface SubjectTypes {
  title: string;
  description: string;
  semester: number;
}

const subjectSchema = new Schema<SubjectTypes>({
  title: String,
  description: String,
  semester: String,
});

export const subject =
  mongoose.models.Subject || mongoose.model("Subject", subjectSchema);
