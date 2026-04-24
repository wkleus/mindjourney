import express from "express";
import chalk from "chalk";

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    chalk.yellowBright.underline(`\nServer listening at port ${PORT}...\n`),
  );
});
