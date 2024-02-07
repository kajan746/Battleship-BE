import express from "express";
import {
  createLeadBoard,
  getLeadBoards,
  getLeadBoardById,
  updateLeadBoard,
} from "../controllers/leadBoard";

const router = express.Router();

router.post("/register", createLeadBoard);
router.get("/leadboard-records", getLeadBoards);
router.get("/leadboard-records/:id", getLeadBoardById);
router.put("/leadboard-records/:id", updateLeadBoard);

export default router;
