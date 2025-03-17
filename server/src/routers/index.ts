import { swaggerSpecs } from "@/config";
import { Router } from "express";
import swaggerUi from "swagger-ui-express";

const router = Router();

router.use("/docs", swaggerUi.serve);
router.use("/docs", swaggerUi.setup(swaggerSpecs));

export { router };