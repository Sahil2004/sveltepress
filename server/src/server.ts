import express from "express";
import { drizzle } from 'drizzle-orm/node-postgres';
import { PORT, DATABASE_URL } from "@/config";
import { initRestMetrics } from "@/utils";

const app = express();
const db = drizzle(DATABASE_URL);

app.use(initRestMetrics)

app.get("/", (req, res) => {
	res.send("Hello World");
})

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
