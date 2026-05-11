import express from "express";
import { check } from "../handlers/profile.js";

const endpoint = express.Router();

endpoint.get("/check", check);

export default endpoint;
