import express from "express";
import { register } from "../handlers/authentication.js";

const endpoint = express.Router();

endpoint.post("/register", register);

export default endpoint;
