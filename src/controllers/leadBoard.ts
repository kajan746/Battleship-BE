import { Request, Response } from "express";
import LeadBoard, { LeadBoardModel } from "../models/leadBoard";

export const createLeadBoard = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log(req.body);
    const record: LeadBoardModel = await LeadBoard.create(req.body);
    res.status(201).json(record);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getLeadBoards = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const records: LeadBoardModel[] = await LeadBoard.find()
      .sort({ wins: -1 })
      .limit(10);
    res.status(200).json(records);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getLeadBoardById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const record: LeadBoardModel | null = await LeadBoard.findById(
      req.params.id
    );
    if (record) {
      res.status(200).json(record);
    } else {
      res.status(404).json({ message: "LeadBoard not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateLeadBoard = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const record: LeadBoardModel | null = await LeadBoard.findByIdAndUpdate(
      { _id: req.params.id },
      { $inc: { wins: req.body.status ? 1 : 0, played: 1 } },
      { new: true }
    );
    if (record) {
      res.status(200).json(record);
    } else {
      res.status(404).json({ message: "LeadBoard not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
