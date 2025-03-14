import express from "express";
import { drizzle } from 'drizzle-orm/node-postgres';
import { PORT, DATABASE_URL } from "@/config";


const app = express();
const db = drizzle(DATABASE_URL);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
