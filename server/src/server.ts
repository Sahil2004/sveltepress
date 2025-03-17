import express from "express";
import { drizzle } from 'drizzle-orm/node-postgres';
import { PORT, DATABASE_URL, METRICS_PORT } from "@/config";
import { initMetricsServer, initRestMetrics } from "@/utils";
import { router } from "@/routers";

const app = express();
const db = drizzle(DATABASE_URL);

app.use(initRestMetrics)

app.use("/api", router)

app.listen(PORT, async () => {
	initMetricsServer(METRICS_PORT);
	console.log(`Server is running on http://localhost:${PORT}`);
	console.log(`Docs are running on http://localhost:${PORT}/api/docs`);
});
