///start making the buttons operation with jquery for the calculator

$(document).ready(function(){ 

var storage1 = [];
var result = undefined;
var bclicked = false;
var plusClicked = false;
var subtractClicked = false;
var divideClicked = false;
var multiplyClicked = false;
var goToStorageTwo = false;
var eqlbtn = false;
var count = 0;


$(".btn0").on("click", function(){
	if((storage1.length<11)){
	operatorAct();
	storage1.push($(this).data("btn0"));
	$('.screen').text(storage1.join(""));
	};
});

$(".btn1").on("click", function(){
	operatorAct();
	if((storage1.length<11)){
	storage1.push($(this).data("btn1"));
	$('.screen').text(storage1.join(""));
	};
});

$(".btn2").on("click", function(){
	if((storage1.length<11)){
	operatorAct();
	storage1.push($(this).data("btn2"));
	$('.screen').text(storage1.join(""));
	};
});

$(".btn3").on("click", function(){
	if((storage1.length<11)){
	operatorAct();
	storage1.push($(this).data("btn3"));
	$('.screen').text(storage1.join(""));
	};
});

$(".btn4").on("click", function(){
	if((storage1.length<11)){
	operatorAct();
	storage1.push($(this).data("btn4"));
	$('.screen').text(storage1.join(""));
	};
});

$(".btn5").on("click", function(){
	if((storage1.length<11)){
	operatorAct();
	storage1.push($(this).data("btn5"));
	$('.screen').text(storage1.join(""));
    };
});

$(".btn6").on("click", function(){
	if((storage1.length<11)){
	operatorAct();
	storage1.push($(this).data("btn6"));
	$('.screen').text(storage1.join(""));
	};
});

$(".btn7").on("click", function(){
	if((storage1.length<11)){
	operatorAct();
	storage1.push($(this).data("btn7"));
	$('.screen').text(storage1.join(""));
    };
});

$(".btn8").on("click", function(){
	if((storage1.length<11)){
	operatorAct();
	storage1.push($(this).data("btn8"));
	$('.screen').text(storage1.join(""));
	};
});

$(".btn9").on("click", function(){
	if((storage1.length<11)){
	operatorAct();
	storage1.push($(this).data("btn9"));
	$('.screen').text(storage1.join(""));
	};
});

//setting up the plus button	
$('.btnPl').on("click", function(){
	plusClicked = true;
	runOpBtns('.btnPl');
	changeOp('.btnPl');
	if(!(divideClicked || subtractClicked || multiplyClicked)) {	
		performCalc();
	 } else {
		 	if(parseInt(storage1.join(''))){
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
	subtractClicked = true;
	runOpBtns('.btnS');
	changeOp('.btnS');
	if(!(divideClicked || multiplyClicked || plusClicked)) {
		performCalc();
	 } else {
		 	if(parseInt(storage1.join(''))){
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
	multiplyClicked = true;
	runOpBtns('.btnM');
	changeOp('.btnM');
	if(!(divideClicked || subtractClicked || plusClicked)) {	
		performCalc();
	 } else {
	 	if(parseInt(storage1.join(''))){
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
	divideClicked = true;
	runOpBtns('.btnDi');
	changeOp('.btnDi');
	//if allows for switching of operands
	if(!(multiplyClicked || subtractClicked || plusClicked)) {	
		performCalc();
	 } else {
	 	if(parseInt(storage1.join(''))){
		 	divideClicked = false;
		 	performCalc();
		 	};
		divideClicked = true;
	 	subtractClicked = false;
		multiplyClicked = false;
		plusClicked = false;
	 };
});

//setting up the equal button
$('.btnE').on("click", function(){
	runOpBtns();
	performCalc();
	//eqlbtn = true;	
});

//setting up the clear button
$('.btnCl').on("click", function(){
	clear();
	$('.screen').text("_");
});

//setting up the +/- button
$('.btnCh').on("click", function(btnP){
	
	if(parseInt(storage1.join(''))){
		if(!(storage1[0] === '-')){
		storage1.unshift('-');
		$('.screen').text(storage1.join(""));
		};
	};
});

//setting up the backspace or delete storage1[0] button
$('.btnBack').on("click", function(btnP){

	if(parseInt(storage1.join(''))){
		storage1.shift();
		$('.screen').text(storage1.join(""));
	};	
});

//setting up the backspace or delete storage1[0] button
$('.btnDe').on("click", function(btnP){

	if(parseInt(storage1.join(''))){
		if((storage1.indexOf('.') === -1)){
		storage1.push('.');
		$('.screen').text(storage1.join(""));
		}
	};	
});
	
//function to clear all vars and remove added classes	
	function clear(){
    storage1 = [];
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
	goToStorageTwo = false;
	eqlbtn = false;
	count= 0; 
	};

//activate the operator buttons plus, subtract, divide and multiply
	function operatorAct(){
	bclicked = true;

	};

	function runOpBtns(operator){
	if(goToStorageTwo){
		goToStorageTwo = false;
	}
	else if(bclicked){
	$(operator).addClass("highlight");
	if(count<1){
	count++;
	goToStorageTwo = true;}
	}
	};

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

	function performCalc(){
	//if statement checks for button click to activate the equals and then runs operands based on which one
	//is picked
	
	if(goToStorageTwo) {
		result = parseFloat(storage1.join(''))
		storage1 = [];
		}
		if(bclicked && storage1.join('')){ 
				if(plusClicked){
					result = parseFloat(storage1.join('')) + result;
					storage1 = [];
					$('.screen').text(result);
				}
					else if(subtractClicked){
						result = result - parseFloat(storage1.join(''));
						storage1 = [];
						$('.screen').text(result);
					}
						else if(multiplyClicked){
							result = parseFloat(storage1.join('')) * result;
							storage1 = [];
							$('.screen').text(result);
						}
							else if (divideClicked){
								if(parseFloat(storage1.join('')) === 0){
									$('.screen').text("error");
									clear();
								} 
								else {
									result = result / parseFloat(storage1.join(''));
										storage1 = [];
									$('.screen').text(result);
								}
							}
			
		}		
	
		
		
	}
});