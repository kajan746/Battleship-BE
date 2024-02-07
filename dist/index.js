"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const leadBoardRoutes_1 = __importDefault(require("./routes/leadBoardRoutes"));
const cors = require("cors");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.use("/api", leadBoardRoutes_1.default);
const PORT = process.env.PORT || 3001;
mongoose_1.default
    .connect("mongodb://localhost:27017/battleship", {})
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => console.log(error.message));
