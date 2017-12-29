///start making the buttons operation with jquery for the calculator



$(document).ready(function(){ 

var userInput = [];
var result = undefined;
var bclicked = false;
var plusClicked = false;
var subtractClicked = false;
var divideClicked = false;
var multiplyClicked = false;
var storeUserInput = false;
var count = 0;


$(".btn0").on("click", function(){
	highlightBtn('.btn0');
	if((userInput.length<11)){
	operatorAct();
	userInput.push($(this).data("btn0"));
	$('.screen').text(userInput.join(""));
	};
});

$(".btn1").on("click", function(){
	highlightBtn('.btn1');
	operatorAct();
	if((userInput.length<11)){
	userInput.push($(this).data("btn1"));
	$('.screen').text(userInput.join(""));
	};
});

$(".btn2").on("click", function(){
	highlightBtn('.btn2');
	if((userInput.length<11)){
	operatorAct();
	userInput.push($(this).data("btn2"));
	$('.screen').text(userInput.join(""));
	};
});

$(".btn3").on("click", function(){
	highlightBtn('.btn3');
	if((userInput.length<11)){
	operatorAct();
	userInput.push($(this).data("btn3"));
	$('.screen').text(userInput.join(""));
	};
});

$(".btn4").on("click", function(){
	highlightBtn('.btn4');
	if((userInput.length<11)){
	operatorAct();
	userInput.push($(this).data("btn4"));
	$('.screen').text(userInput.join(""));
	};
});

$(".btn5").on("click", function(){
	highlightBtn('.btn5');
	if((userInput.length<11)){
	operatorAct();
	userInput.push($(this).data("btn5"));
	$('.screen').text(userInput.join(""));
    };
});

$(".btn6").on("click", function(){
	highlightBtn('.btn6');
	if((userInput.length<11)){
	operatorAct();
	userInput.push($(this).data("btn6"));
	$('.screen').text(userInput.join(""));
	};
});

$(".btn7").on("click", function(){
	highlightBtn('.btn7');
	if((userInput.length<11)){
	operatorAct();
	userInput.push($(this).data("btn7"));
	$('.screen').text(userInput.join(""));
    };
});

$(".btn8").on("click", function(){
	highlightBtn('.btn8');
	if((userInput.length<11)){
	operatorAct();
	userInput.push($(this).data("btn8"));
	$('.screen').text(userInput.join(""));
	};
});

$(".btn9").on("click", function(){
	highlightBtn('.btn9');
	if((userInput.length<11)){
	operatorAct();
	userInput.push($(this).data("btn9"));
	$('.screen').text(userInput.join(""));
	};
});

//setting up the plus button	
$('.btnPl').on("click", function(){
	highlightBtn('.btnPl');
	plusClicked = true;
	runOpBtns('.btnPl');
	changeOp('.btnPl');
	if(!(divideClicked || subtractClicked || multiplyClicked)) {	
		performCalc();
	 } else {
		 	if(parseInt(userInput.join(''))){
		 	plusClicked = false;
		 	performCalc();
		 	};
		plusClicked = true;
	 	subtractClicked = false;
		divideClicked = false;
		multiplyClicked = false;
	 };
});

//setting up the Subtract button	
$('.btnS').on("click", function(){
	highlightBtn('.btnS');
	subtractClicked = true;
	runOpBtns('.btnS');
	changeOp('.btnS');
	if(!(divideClicked || multiplyClicked || plusClicked)) {
		performCalc();
	 } else {
		 	if(parseInt(userInput.join(''))){
		 	subtractClicked = false;
		 	performCalc();
		 	};
		subtractClicked = true;
	 	multiplyClicked = false;
		divideClicked = false;
		plusClicked = false;
	 }; 
});
	


//setting up the Multiply button	
$('.btnM').on("click", function(){
	highlightBtn('.btnM');
	multiplyClicked = true;
	runOpBtns('.btnM');
	changeOp('.btnM');
	if(!(divideClicked || subtractClicked || plusClicked)) {	
		performCalc();
	 } else {
	 	if(parseInt(userInput.join(''))){
		 	multiplyClicked = false;
		 	performCalc();
		 	}
		multiplyClicked = true;
	 	subtractClicked = false;
		divideClicked = false;
		plusClicked = false;
	 };
});

//setting up the divide button	
$('.btnDi').on("click", function(){
	highlightBtn('.btnDi');
	//below lets us know the button is active
	divideClicked = true;
	//runOpBtns is used so that we dont run the calculation with out a second input in the number and changeOp changes this button to be highlighted
	runOpBtns('.btnDi');
	changeOp('.btnDi');
	//if allows for switching of operands while user input array is empty
	if(!(multiplyClicked || subtractClicked || plusClicked)) {	
		performCalc();
	 } else {
	 	//if allows us to know what the previous operand was clicked so if its 1 + 2 - 3 / will know to substract 3 instead of dividing it
	 	if(parseInt(userInput.join(''))){
		 	divideClicked = false;
		 	performCalc();
		 	};
		 	//have to clear the previous operand and make this active again after running the calculation
		divideClicked = true;
	 	subtractClicked = false;
		multiplyClicked = false;
		plusClicked = false;
	 };
});

//setting up the equal button that will simply run the calculation that the user wants
$('.btnE').on("click", function(){
	highlightBtn('.btnE');
	runOpBtns();
	performCalc();	
});

//setting up the clear button, will set all conditions to as if application was on start up
$('.btnCl').on("click", function(){
	highlightBtn('.btnCl');
	clear();
	$('.screen').text("_");
});

//setting up the +/- button, will only change the user input not the result ever
$('.btnCh').on("click", function(btnP){
	highlightBtn('.btnCh');
	//checks to see if userinput exists
	if(parseInt(userInput.join(''))){
		//this if statement ensures we dont put in more than one dash
		if(!(userInput[0] === '-')){
			userInput.unshift('-');
			$('.screen').text(userInput.join(""));
			//if a dash exist then this line will run and remove it
		} else if (userInput[0] === '-'){
				userInput.shift()
				$('.screen').text(userInput.join(""));
			};
	};
});


//setting up the backspace or delete userInput[0] button, simply will allow user to delete last entry that the user inputed to the screen, will not delete result at any time
$('.btnBack').on("click", function(btnP){
	highlightBtn('.btnBack');
		//if statement only allows button to work if user has inputted a value first
	if(parseFloat(userInput.join(''))){
		//deletes the first element in the front of the array
		userInput.shift();
		$('.screen').text(userInput.join(""));
	};	
});

//setting up the add decimal button to the user input only once and as long as there is a user value stored, will not add decimal to result ever
$('.btnDe').on("click", function(btnP){
	highlightBtn('.btnDe');
		//if statement only allows one decimal to be added to user input array by using indexOf we can check if array has a decimal in it, returns -1 if it does not
		if((userInput.indexOf('.') === -1)){
			userInput.push('.');
			$('.screen').text(userInput.join(""));
		};	
});
	
	//function to clear all vars and remove added classes	
	function clear(){
    userInput = [];
	result = 0;
	$('.btnPl').removeClass("highlight");
	$('.btnM').removeClass('highlight');
	$('.btnDi').removeClass('highlight');
	$('.btnS').removeClass('highlight');
	bclicked = false;
	plusClicked = false;
 	subtractClicked = false;
	divideClicked = false;
	multiplyClicked = false;
	storeUserInput = false;
	count= 0; 
	};

	//activate the operator buttons plus, subtract, divide and multiply
	function operatorAct(){
	bclicked = true;

	};

	//activates the operator buttons of plus,subtract,equal,divide and multiply
	function runOpBtns(operator){
	//if statement allows for intial condition to be set
	if(storeUserInput){
		storeUserInput = false;
	}   else if(bclicked){
			$(operator).addClass("highlight");
			//if statement runs a count to run the buttons after the second input is stored
				if(count<1){
				count++;
				storeUserInput = true;}
				};
		};

	//below function changes the operand after it is clicked as long as there is a user input
	function changeOp(operator) {
	if(bclicked){
		if(plusClicked || divideClicked || multiplyClicked || subtractClicked)
		$('.btnPl').removeClass("highlight");
		$('.btnM').removeClass('highlight');
		$('.btnDi').removeClass('highlight');
		$('.btnS').removeClass('highlight');
		$(operator).addClass("highlight");
		}
	}

	//below function simply highlights all buttons once clicked in any state
	function highlightBtn(btn){
		$(btn).toggleClass('press',150,'easeInOutCubic')
	    $(btn).toggleClass('press',150,'easeInOutCubic')
	}

	function performCalc(){
	//if statement checks to see if on start up if there is a user value, if so store it result and clear the user input to allow for a new user input 
	
	
	if(storeUserInput) {
		result = parseFloat(userInput.join(''))
		userInput = [];
		}
		//this following input runs our plus,divide,multiply and subtract calculations and display the result on the screen
		if(bclicked && userInput.join('')){ 
				if(plusClicked){
					result = parseFloat(userInput.join('')) + result;
					userInput = [];
					$('.screen').text(result);
				}
					else if(subtractClicked){
						result = result - parseFloat(userInput.join(''));
						userInput = [];
						$('.screen').text(result);
					}
						else if(multiplyClicked){
							result = parseFloat(userInput.join('')) * result;
							userInput = [];
							$('.screen').text(result);
						}	
							else if (divideClicked){
								//if statement throws error on the screen if user tries to divide by zero and restarts the application to initial state
								if(parseFloat(userInput.join('')) === 0){
									$('.screen').text("error");
									clear();
								} 
								else {
									result = result / parseFloat(userInput.join(''));
										userInput = [];
									$('.screen').text(result);
								}
							}
			
		}		
	
		
		
	}
});