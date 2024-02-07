"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLeadBoard = exports.getLeadBoardById = exports.getLeadBoards = exports.createLeadBoard = void 0;
const leadBoard_1 = __importDefault(require("../models/leadBoard"));
const createLeadBoard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const record = yield leadBoard_1.default.create(req.body);
        res.status(201).json(record);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createLeadBoard = createLeadBoard;
const getLeadBoards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const records = yield leadBoard_1.default.find()
            .sort({ wins: -1 })
            .limit(10);
        res.status(200).json(records);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getLeadBoards = getLeadBoards;
const getLeadBoardById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const record = yield leadBoard_1.default.findById(req.params.id);
        if (record) {
            res.status(200).json(record);
        }
        else {
            res.status(404).json({ message: "LeadBoard not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getLeadBoardById = getLeadBoardById;
const updateLeadBoard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const record = yield leadBoard_1.default.findByIdAndUpdate({ _id: req.params.id }, { $inc: { wins: req.body.status ? 1 : 0, played: 1 } }, { new: true });
        if (record) {
            res.status(200).json(record);
        }
        else {
            res.status(404).json({ message: "LeadBoard not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateLeadBoard = updateLeadBoard;
