<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1"> 
  <title>My First jQuery Mobile Application</title>
  <link rel="stylesheet" type="text/css" href="https://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.css"/>
  <script src="https://code.jquery.com/jquery-1.8.2.min.js"> </script>
  <script src="https://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.js"></script>
  <script src="/main.js"></script>
 </head>

 <body>
      //*********************************************************
      //*********************************************************
<div data-role="page" id="Home">

   <div data-role="header" data-theme='b'> 
      <h1>Joe's Finance Tracker App</h1>
      <div data-role="navbar">
         <ul>
			   <li><a href="#Home" data-icon="star">Home</a> </li>
               <li><a href="#Savings" data-icon="star">Savings and Investments</a> </li>
               <li><a href="#Spending" data-icon="plus">Spending Tracking</a> </li>
			   <li><a href="#Overview" data-icon="plus">Financial Overview</a> </li>
         </ul>
      </div><!-- /navbar -->
   </div>

   <div data-role="content" data-theme='c'>
      <h2>My Finance App</h2>
      <img src="./Pictures/DollarSign.wepg" alt="Dollar Sign" >.
      
   </div>

   <div data-role="footer" data-theme='b'>
      <h1>Copywrite Joe Jennings 2020</h1>
   </div>

</div>
//*********************************************************
//*********************************************************
<div data-role="page" id="Spending">

   <div data-role="header" data-theme='b'> 
      <h1>Joe's Finance Tracker App</h1>
      <div data-role="navbar">
            <ul>
			   <li><a href="#Home" data-icon="star">Home</a> </li>
               <li><a href="#Savings" data-icon="star">Savings and Investments</a> </li>
               <li><a href="#Spending" data-icon="plus">Spending Tracking</a> </li>
			   <li><a href="#Overview" data-icon="plus">Financial Overview</a> </li>
            </ul>
         </div><!-- /navbar -->
   </div>

   <div data-role="content" data-theme='c'>
     <h2>Spending Tracking</h2>

	 <div>
         <label for="expenseName">Name of Expense:</label>
		 <input type = "text" id = "expenseName"><br>
		 <label for="expenseAmount">Amount of Expense:</label>
		 <input type = "text" id = "expenseAmount"><br>
		 Add field for date<br>
		 Add enter button<br>
		 Add clear option<br>
		 Divide text area to show entry log<br>
     </div>
   </div>

   <div data-role="footer" data-theme='b'>
      <h1>Copywrite Joe Jennings 2020</h1>
   </div>

</div>

<div data-role="page" id="Savings">

	<div data-role="header" data-theme='b'> 
	<h1>Joe's Finance Tracker App</h1>
	   <div data-role="navbar">
			 <ul>
				<li><a href="#Home" data-icon="star">Home</a> </li>
				<li><a href="#Savings" data-icon="star">Savings and Investments</a> </li>
				<li><a href="#Spending" data-icon="plus">Spending Tracking</a> </li>
				<li><a href="#Overview" data-icon="plus">Financial Overview</a> </li>
			 </ul>
		  </div><!-- /navbar -->
	</div>

	<div data-role="content" data-theme='d'>
	   <h2>Savings Tracking</h2>

	   <label for="incomeSource">Source of Income:</label>
	   <input type = "text" id = "incomeSource"><br>
	   <label for="incomeAmount">Amount of Income:</label>
	   <input type = "text" id = "incomeAmount"><br>
	   Add field for date<br>
	   Add enter button<br>
	   Add clear option<br>
	   Divide text area to show entry log<br>
	</div>

	<div data-role="footer"  data-theme='b'>
		<h1>Copywrite Joe Jennings 2020</h1>
	</div>
    
</div>

<div data-role="page" id="Overview">

	<div data-role="header" data-theme='b'> 
	<h1>Joe's Finance Tracker App</h1>
	   <div data-role="navbar">
			 <ul>
				<li><a href="#Home" data-icon="star">Home</a> </li>
				<li><a href="#Savings" data-icon="star">Savings and Investments</a> </li>
				<li><a href="#Spending" data-icon="plus">Spending Tracking</a> </li>
				<li><a href="#Overview" data-icon="plus">Financial Overview</a> </li>
			 </ul>
		  </div><!-- /navbar -->
	</div>

	<div data-role="content" data-theme='d'>
	   <h2>Financial Overview</h2>
	   <div>
		  Divide page in half<br>
		  One side with Expense overview (per month?)<br>
		  One side with Savings overview<br>
		  Comparison at the top on savings per month vs expenses per month<br>
	   </div>
	   

	</div>

	<div data-role="footer"  data-theme='b'>
		<h1>Copywrite Joe Jennings 2020</h1>
	</div>
    
</div>


 </body>
 </html> 