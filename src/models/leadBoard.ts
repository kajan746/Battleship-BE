import mongoose, { Document } from "mongoose";

export interface LeadBoardModel extends Document {
  id: Number;
  name: String;
  played: Number;
  wins: Number;
}

const leadBoardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: Boolean },
  played: { type: Number, default: 0 },
  wins: { type: Number, default: 0 },
});
const LeadBoard = mongoose.model<LeadBoardModel>("LeadBoard", leadBoardSchema);

export default LeadBoard;
