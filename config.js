import dotenv from "dotenv";
dotenv.config();

export const API_URI = process.env.API_URI || "http://localhost:3001";
