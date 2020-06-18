var express = require('express');
var router = express.Router();

var totalExpense = 0;
var totalIncome = 0;

var expenseID = 1;
var incomeID = 1;

var expenseArray = [];
var incomeArray = [];

var incomeObject = function(source, amount, month) {
    this.Source = source;
    this.Amount = amount;
    this.Month = month;
    this.ID = incomeID++;
}

var expenseObject = function(source, amount, month) {
    this.Source = source;
    this.Amount = amount;
    this.Month = month;
    this.ID = expenseID++;
}  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//Code for expenses
router.get('/getAllExpenses', function(req, res, next) {
  res.json(expenseArray);
});

router.post('/AddExpense', function (req, res) {
  const newExpense = req.body;
  newExpense.ID = expenseID++; //ignore data from client, use server-side data to keep track of primary key
  expenseArray.push(newExpense);
  res.status(200).json(newExpense);
  totalExpense = totalExpense + newExpense.Amount;
});

//Code for income
router.get('/getAllIncome', function(req, res, next) {
  res.json(incomeArray);
});

router.post('/AddIncome', function (req, res) {
  const newIncome = req.body;
  newIncome.ID = incomeID++; //ignore data from client, use server-side data to keep track of primary key
  incomeArray.push(newIncome);
  res.status(200).json(newIncome);
  totalIncome = totalIncome + newIncome.Amount;
});

module.exports = router;
