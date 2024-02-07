"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const leadBoard_1 = require("../controllers/leadBoard");
const router = express_1.default.Router();
router.post("/register", leadBoard_1.createLeadBoard);
router.get("/leadboard-records", leadBoard_1.getLeadBoards);
router.get("/leadboard-records/:id", leadBoard_1.getLeadBoardById);
router.put("/leadboard-records/:id", leadBoard_1.updateLeadBoard);
exports.default = router;
