import { config } from "dotenv";
config();
import connectDB from "./database/connect";
import "./modules/express";

connectDB();
