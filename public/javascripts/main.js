var expenseArray = [];
var incomeArray = [];

var incomeObject = function(source, amount, month) {
    this.Source = source;
    this.Amount = Number(amount);
    this.Month = month;
    this.ID = 1;
}

var expenseObject = function(source, amount, month) {
    this.Source = source;
    this.Amount = Number(amount);
    this.Month = month;
    this.ID = 1;
}

var chosenMonth;
var pType = "";
var totalExpense = 0;
var totalIncome = 0;

document.addEventListener("DOMContentLoaded", function (event) {


    $(document).bind("change", "#select-month", function (event, ui) {
        chosenMonth =  document.getElementById("select-month").value;  
    });

    document.getElementById("submitSpending").addEventListener("click", function () {
        pType = "expense";
        var a = document.getElementById("expenseName").value;
        var b = document.getElementById("expenseAmount").value;
        var c = chosenMonth;
        newExpense = new expenseObject(a, b, c);
        if (!newExpense.isValid()){
            alert("All entries must have a value and Amount must be a number.")
        }
        else{
            totalExpense = totalExpense + parseInt(b);
        }
        $.ajax({
        url:"/AddExpense",
        type: "POST",
        data: JSON.stringify(newExpense),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
            success: function (result) {
                console.log(result);
                document.location.href = "index.html#Overview"; //go to the page where the item was added
            }
        });
        
        $(document).on("pagebeforeshow", "#Overview", function(event) {
            setTimeout(() => {
                let localID = Number(document.getElementById("IDparmHere").innerHTML);
                let pointer = 0;
                let i;
                for(i = 0; i < expenseArray.length; i++) {
                    console.log(pointer + " " + localID + " " + expenseArray[i].ID);
                    if(localID == expenseArray[i].ID) {
                        pointer = i;
                        break;
                    }
                }
                document.getElementById("expenseTotal").innerHTML = totalExpense;
                document.getElementById("grandTotal").innerHTML = totalIncome - totalExpense;
            }, 100);
        }); 
    })

    document.getElementById("submitIncome").addEventListener("click", function () {
        pType = "income";
        var a = document.getElementById("incomeSource").value;
        var b = document.getElementById("incomeAmount").value;
        var c = chosenMonth;
        newIncome = new incomeObject(a, b, c);
        if (!newIncome.isValid()){
            alert("All entries must have a value and Amount must be a number.")
        }
        else {
            totalIncome = totalIncome + parseInt(b);
        }

        $.ajax({
        url:"/AddIncome",
        type: "POST",
        data: JSON.stringify(newIncome),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
            success: function (result) {
                console.log(result);
                document.location.href = "index.html#Overview"; //go to the page where the item was added
            }
        });
        $(document).on("pagebeforeshow", "#Overview", function(event) {
            setTimeout(() => {
                let localID = Number(document.getElementById("IDparmHere").innerHTML);
                let pointer = 0;
                let i;
                for(i = 0; i < incomeArray.length; i++) {
                    console.log(pointer + " " + localID + " " + incomeArray[i].ID);
                    if(localID == incomeArray[i].ID) {
                        pointer = i;
                        break;
                    }
                }
                document.getElementById("incomeTotal").innerHTML = totalIncome;
                document.getElementById("grandTotal").innerHTML = totalIncome - totalExpense;
            }, 100);
        }); 
    })

    document.getElementById("clearIncome").addEventListener("click", function () {
        document.getElementById("incomeSource").value = "";
        document.getElementById("incomeAmount").value = "";
    })
    document.getElementById("clearExpense").addEventListener("click", function () {
        document.getElementById("expenseName").value = "";
        document.getElementById("expenseAmouunt").value = "";
    })

    //pagebeforeshow
    $(document).on("pagebeforeshow", "#Overview", function (event) {
        UpdateDisplay(pType);
    });


    $(document).on("pagebeforeshow", "#Savings", function (event) {
        document.getElementById("incomeSource").value = "";
        document.getElementById("incomeAmount").value = "";
    });

    $(document).on("pagebeforeshow", "#Spending", function (event) {
        document.getElementById("expenseName").value = "";
        document.getElementById("expenseAmount").value = "";
    });
    
})

function UpdateDisplay(expenseType) {
    if (expenseType == "expense"){
        fetch('/getAllExpenses')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            expenseArray = data;

            whichElement = document.getElementById("expenseList")
            whichElement.innerHTML = "";
            expenseArray.forEach(function(item, index) {
                var li = document.createElement("li");
                li.setAttribute("data-parm", item.ID);
                li.setAttribute("class", "expenseClass");
                whichElement.appendChild(li);
                li.innerHTML = li.innerHTML + " ID: " + item.ID + ". " + " Month: " + item.Month + " Source: " +item.Source + ": " + item.Amount
            });
            var classname = document.getElementsByClassName("expenseClass");
            Array.from(classname).forEach(function (element) {
                element.addEventListener('click', function() {
                    var parm = this.getAttribute("data-parm");
                    document.getElementById("IDparmHere").innerHTML = parm;
                    document.location.href = "index.html#Overview";
                });
            });
        })

        .catch(function(err){
            console.log(err);
        })
    }
    else if (expenseType == "income") {
        fetch('/getAllIncome')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            incomeArray = data;

            whichElement = document.getElementById("incomeList")
            whichElement.innerHTML = "";
            expenseArray.forEach(function(item, index) {
                var li = document.createElement("li");
                li.setAttribute("data-parm", item.ID);
                li.setAttribute("class", "incomeClass");
                whichElement.appendChild(li);
                li.innerHTML = li.innerHTML + " ID: " + item.ID + ". " + " Month: " + item.Month + " Source: "+item.Source + ": " + item.Amount
            });
            var classname = document.getElementsByClassName("incomeClass");
            Array.from(classname).forEach(function (element) {
                element.addEventListener('click', function() {
                    var parm = this.getAttribute("data-parm");
                    document.getElementById("IDparmHere").innerHTML = parm;
                    document.location.href = "index.html#Overview";
                });
            });
        })

        .catch(function(err){
            console.log(err);
        })
    }
}

incomeObject.prototype.isValid = function() {
    if (this.Source == "" || this.Amount == "") {
        return false;
    } else if (isNaN(this.Amount)) {
        return false;
    } else{
        return true;
    }
}

expenseObject.prototype.isValid = function() {
    if (this.Source == "" || this.Amount == "") {
        return false;
    } else if (isNaN(this.Amount)) {
        return false;
    } else{
        return true;
    }
}