import express from "express";
import chalk from "chalk";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      chalk.green("\n✔  ") +
        chalk.bgYellowBright("MongoDB connection active..."),
    );
  } catch (err) {
    console.error(
      "\n❌  " +
        chalk.bgRedBright("Database connection failed: " + err.message + "\n"),
    );
    process.exit(1); // optional: Server stoppen, wenn DB nicht erreichbar
  }
}

await connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(
    chalk.green("✔  ") +
      chalk.bgCyanBright(`Server listening at port ${PORT}...\n`),
  );
});
