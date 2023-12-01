import path from "path";
import express from "express";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});


const upload = multer({
  storage: storage,
});

router.post("/", upload.single("pdf"), (req, res) => {
  console.log(req.file)
  res.send({
    message: "File uploaded successfully",
    file: `/${req.file.path}`,
  });
});

export default router;