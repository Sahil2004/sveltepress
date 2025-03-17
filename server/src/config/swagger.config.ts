import swaggerJsdoc, { type Options } from 'swagger-jsdoc';
import { name, version } from '../../package.json';

const swaggerOptions: Options = {
    definition: {
        failOnErrors: true,
        openapi: "3.0.0",
        info: {
            title: name,
            version
        }
    },
    apis: ["./src/routers/*.ts"]
}

export const swaggerSpecs = swaggerJsdoc(swaggerOptions);