import dotenv from "dotenv";
import path from "path";

dotenv.config({
	path: path.resolve(__dirname, "../../../.env"),
});

export const { PORT, DATABASE_URL, METRICS_PORT } = process.env;
