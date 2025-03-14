import { defineConfig } from 'drizzle-kit';
import { DATABASE_URL } from './src/config/env.config';


export default defineConfig({
  out: './drizzle',
  schema: './src/schemas/index.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: DATABASE_URL || "",
  },
});
