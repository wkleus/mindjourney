import express from "express";
import chalk from "chalk";
import mongoose from "mongoose";
import profileEndpoint from "./endpoints/profile.js";
import authenticationEndpoint from "./endpoints/authentication.js";

import dotenv from "dotenv";
dotenv.config();

// console.log("MONGO_URL:", process.env.MONGO_URL);

const app = express();

app.use(express.json());

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
    process.exit(1); // Stop server if database is unreachable
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

app.use("/endpoint/profile", profileEndpoint);
app.use("/endpoint/authentication", authenticationEndpoint);

app.use((error, request, response, next) => {
  const errorMessage = error.message || "It's a Server Error.";
  const statusCode = error.status || 500;

  console.error(
    "\n❌  " + chalk.bgRedBright("Server error: " + errorMessage + "\n"),
  );

  return response
    .status(statusCode)
    .json({ error: errorMessage, status: statusCode, success: false });
});
