import express from "express";
const router = express.Router();
import {
    uploadPyqs
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/pyqs").post(uploadPyqs);
// router.route("/").post(protect, admin, uploadPyqs);

// router
//   .route("/:id")
//   .get(getProductByID)
//   .put(protect, admin, updateProduct)
//   .delete(protect, admin, deleteProduct);

export default router;