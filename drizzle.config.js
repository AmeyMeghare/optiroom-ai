// drizzle.config.ts
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_xam62wpDAhNK@ep-steep-dust-a6zcuh17-pooler.us-west-2.aws.neon.tech/amey?sslmode=require',
  },
});

