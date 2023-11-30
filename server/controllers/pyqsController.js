import asyncHandler from "express-async-handler";
import Pyqs from "../models/Pyqs.js"

// @route   POST /api/admin/pyqs
// @access  Private/Admin
const uploadPyqs = asyncHandler(async (req, res) => {
  const { subjectName, code, sem, program, file } =
    req.body;

  const pyq = new Pyqs({
    subjectName,
    code,
    sem,
    program,
    file
  });

  const uploadedPyq = await pyq.save();
  res.json(uploadedPyq);
});

export {
  uploadPyqs
};
