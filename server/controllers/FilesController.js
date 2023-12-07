import asyncHandler from "express-async-handler";
import path from "path";
import Pyqs from "../models/Pyqs.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const UPLOADS_DIR = path.join(__dirname, "../../uploads/");

// @route   POST /api/files/sem-wise/:branch/:sem
const semFile = asyncHandler(async (req, res) => {
  const sem = req.params.sem;
  const branch = req.params.branch;

  console.log(sem);
  console.log(branch);

  try {
    const pdfs = await Pyqs.find({ sem: sem, branch: branch});
    console.log(pdfs);
    res.json(pdfs);
  } catch (error) {
    console.log(error);
  }
});

// @route   POST /api/files/download/:file
const downloadFile = asyncHandler(async (req, res) => {
  const pdfId = req.params.file;

  console.log(pdfId);
  try {
    const pdf = await Pyqs.findById(pdfId);

    if (!pdf) {
      return res.status(404).json({ message: "PDF not found." });
    }

    const filePath = path.join(UPLOADS_DIR, path.basename(pdf.fileLink));
    console.log(filePath);

    // Serve the file as an attachment
    res.download(filePath, `${pdf.subjectName}.pdf`, (err) => {
      if (err) {
        console.error("PDF download error:", err);
        res.status(500).json({ message: "PDF download failed." });
      }
    });
  } catch (error) {
    console.error("PDF download error:", error);
    res.status(500).json({ message: "PDF download failed." });
  }
});

export { semFile, downloadFile };
