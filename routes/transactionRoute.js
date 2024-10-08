const express = require("express");
const { getAllTransaction, addTransaction, editTransaction, deleteTransaction } = require("../controllers/transactionController");

const router = express.Router();

//Add a new transaction (POST)
router.post("/add-transaction",addTransaction);

//Edit transaction
router.post("/edit-transaction",editTransaction);

//Delete transaction
router.post("/delete-transaction",deleteTransaction);

//Get all transactions (POST)
router.post("/all-transactions",getAllTransaction);

module.exports = router;