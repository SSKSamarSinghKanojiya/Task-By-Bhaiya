const express = require("express");
const {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const authenticateJWT = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authenticateJWT, createOrder);
router.get("/", authenticateJWT, getOrders);
router.put("/:id", authenticateJWT, updateOrder);
router.delete("/:id", authenticateJWT, deleteOrder);

module.exports = router;
