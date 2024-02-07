"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const leadBoardSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    status: { type: Boolean },
    played: { type: Number, default: 0 },
    wins: { type: Number, default: 0 },
});
const LeadBoard = mongoose_1.default.model("LeadBoard", leadBoardSchema);
exports.default = LeadBoard;
