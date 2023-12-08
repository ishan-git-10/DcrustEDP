import express from "express";
import { semFile, downloadFile } from "../controllers/FilesController.js";
const router = express.Router();


router.route("/sem-wise/:program/:branch/:sem").get(semFile);
router.route("/download/:file").get(downloadFile);

export default router;