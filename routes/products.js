const express = require("express");

const router = express.Router();

const productController = require("../controller/productsController");

//Routes for CRUD
router.post("/create", productController.addProduct);
router.get("/", productController.getProducts);
router.post("/:id/update_quantity", productController.updateProduct);
router.post("/:id", productController.deleteProduct);

module.exports = router;