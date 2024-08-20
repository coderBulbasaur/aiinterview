/** @type { import("drizzle-kit").Config } */

export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://genie-interview_owner:AWl9finuH0xG@ep-wild-rain-a56l05uu.us-east-2.aws.neon.tech/genie-interview?sslmode=require',
    }
  };
  