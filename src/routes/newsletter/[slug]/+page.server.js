import { sql } from "@vercel/postgres";

// @ts-ignore
export async function load({ params, locals }) {
  return {
    content: await sql`SELECT * from  NAMES where user_id='${locals.user}'`
  }
}