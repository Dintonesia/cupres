import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

const Config: Config = {
  schema: "./src/lib/supabase/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  driver: "aws-data-api",
  dbCredentials: {
    database: "postgres",
    secretArn: "vsyakrdoafwmjjvmilbg",
    resourceArn: "mZt5wxn2CCMjy3Yg",
  },
};

export default Config;

const NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
