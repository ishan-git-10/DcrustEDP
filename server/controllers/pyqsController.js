import asyncHandler from "express-async-handler";
import Pyqs from "../models/Pyqs.js"

// @route   POST /api/admin/pyqs
// @access  Private/Admin
const uploadPyqs = asyncHandler(async (req, res) => {
  const { name, code, sem, program, path } =
    req.body;

  console.log(path);
  if(!name || !code || !sem || !program || !path){
    res.status(400).json({ error: 'Validation failed' });
  }

  const pyq = new Pyqs({
    subjectName: name,
    code: code,
    sem: sem,
    program: program,
    fileLink: path
  });

  const uploadedPyq = await pyq.save();
  res.json(uploadedPyq);
});

export {
  uploadPyqs
};
