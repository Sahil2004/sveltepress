import type { Request, Response } from "express";
import responseTime from "response-time"
import client from "prom-client";
import express from "express";

const metricsApp = express();

export const restResponseTimeHistogram = new client.Histogram({
    name: "http_request_duration_seconds",
    help: "Duration of HTTP requests in seconds",
    labelNames: ["method", "route", "statusCode"]
})

export const initMetricsServer = (port: string | number) => {
    const collectDefaultMetrics = client.collectDefaultMetrics;    

    collectDefaultMetrics();

    metricsApp.get("/metrics", async (req: Request, res: Response) => {
        res.set("Content-Type", client.register.contentType);
        res.end(await client.register.metrics());
    });

    metricsApp.listen(port, () => {
        console.log(`Metrics server is running on http://localhost:${port}`);
    });
}

export const initRestMetrics = responseTime((req: Request, res: Response, time: number) => {
    const { method, url } = req;
    const { statusCode } = res;
    restResponseTimeHistogram.observe({
        method,
        route: url,
        statusCode
    }, time * 1000)
});