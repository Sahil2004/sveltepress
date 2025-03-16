import express from "express";
import { drizzle } from 'drizzle-orm/node-postgres';
import { PORT, DATABASE_URL, METRICS_PORT } from "@/config";
import { initMetricsServer, initRestMetrics } from "@/utils";

const app = express();
const db = drizzle(DATABASE_URL);

app.use(initRestMetrics)

app.get("/", (req, res) => {
	res.send("Hello World");
})

app.listen(PORT, async () => {
	initMetricsServer(METRICS_PORT);
	console.log(`Server is running on http://localhost:${PORT}`);
});
