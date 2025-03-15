import responseTime from "response-time"
import client from "prom-client";

export const initMetrics = responseTime((req, res, time) => {
    const { method, url } = req;
    const { statusCode } = res;
    console.log(`method: ${method}, url: ${url}, status: ${statusCode}, time: ${time}ms`);
}