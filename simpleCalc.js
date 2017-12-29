///start making the buttons operation with jquery for the calculator

$(document).ready(function(){ 

var storage1 = [];
var storage2 = [];
var result = 0;
var bclicked = false;
var plusClicked = false;
var subtractClicked = false;
var divideClicked = false;
var multiplyClicked = false;
var goToStorageTwo = false;
var eqlbtn = false;


$(".btn1").on("click", function(){
	operatorAct();
	if(goToStorageTwo){
	storage2.push($(this).data("btn1"));
	$('.screen').text(storage2.join(""));
	} else {
	storage1.push($(this).data("btn1"));
	$('.screen').text(storage1.join(""));
	}
});

$(".btn2").on("click", function(){
	operatorAct();
	if(goToStorageTwo){
	storage2.push($(this).data("btn2"));
	$('.screen').text(storage2.join(""));
	} else {
	storage1.push($(this).data("btn2"));
	$('.screen').text(storage1.join(""));
	}
});

$(".btn3").on("click", function(){
	operatorAct();
	if(goToStorageTwo){
	storage2.push($(this).data("btn3"));
	$('.screen').text(storage2.join(""));
	} else {
	storage1.push($(this).data("btn3"));
	$('.screen').text(storage1.join(""));
	}
});

$(".btn4").on("click", function(){
	operatorAct();
	if(goToStorageTwo){
	storage2.push($(this).data("btn4"));
	$('.screen').text(storage2.join(""));
	} else {
	storage1.push($(this).data("btn4"));
	$('.screen').text(storage1.join(""));
	}
});

$(".btn5").on("click", function(){
	operatorAct();
	if(goToStorageTwo){
	storage2.push($(this).data("btn5"));
	$('.screen').text(storage2.join(""));
	} else {
	storage1.push($(this).data("btn5"));
	$('.screen').text(storage1.join(""));
	}
});

$(".btn6").on("click", function(){
	operatorAct();
	if(goToStorageTwo){
	storage2.push($(this).data("btn6"));
	$('.screen').text(storage2.join(""));
	} else {
	storage1.push($(this).data("btn6"));
	$('.screen').text(storage1.join(""));
	}
});

$(".btn7").on("click", function(){
	operatorAct();
	if(goToStorageTwo){
	storage2.push($(this).data("btn7"));
	$('.screen').text(storage2.join(""));
	} else {
	storage1.push($(this).data("btn7"));
	$('.screen').text(storage1.join(""));
	}
});

$(".btn8").on("click", function(){
	operatorAct();
	if(goToStorageTwo){
	storage2.push($(this).data("btn8"));
	$('.screen').text(storage2.join(""));
	} else {
	storage1.push($(this).data("btn8"));
	$('.screen').text(storage1.join(""));
	}
});

$(".btn9").on("click", function(){
	operatorAct();
	if(goToStorageTwo){
	storage2.push($(this).data("btn9"));
	$('.screen').text(storage2.join(""));
	} else {
	storage1.push($(this).data("btn9"));
	$('.screen').text(storage1.join(""));
	}
});

$(".btn0").on("click", function(){
	operatorAct();
	if(goToStorageTwo){
	storage2.push($(this).data("btn0"));
	$('.screen').text(storage2.join(""));
	} else {
	storage1.push($(this).data("btn0"));
	$('.screen').text(storage1.join(""));
	}
});
	
//setting up the plus button	
$('.btnPl').on("click", function(){
	runOpBtns('.btnPl');
	changeOp('.btnPl');
	if(divideClicked || multiplyClicked || subtractClicked) {
		multiplyClicked = false;
		divideClicked = false;
		subtractClicked = false;
	 }
	plusClicked = true;
});

//setting up the Subtract button	
$('.btnS').on("click", function(){
	runOpBtns('.btnS');
	changeOp('.btnS');
	if(divideClicked || multiplyClicked || plusClicked) {
		multiplyClicked = false;
		divideClicked = false;
		plusClicked = false;
	 }
	subtractClicked = true;
});

//setting up the Multiply button	
$('.btnM').on("click", function(){
	runOpBtns('.btnM');
	changeOp('.btnM');
	if(divideClicked || subtractClicked || plusClicked) {
		subtractClicked = false;
		divideClicked = false;
		plusClicked = false;
	 }
	 multiplyClicked = true;
});

//setting up the divide button	
$('.btnDi').on("click", function(){
	runOpBtns('.btnDi');
	changeOp('.btnDi');
	//if allows for switching of operands
	if(multiplyClicked || subtractClicked || plusClicked) {
		subtractClicked = false;
		multiplyClicked = false;
		plusClicked = false;
	 }
	 divideClicked = true;
});

//setting up the equal button
$('.btnE').on("click", function(){
	// $('.btnE').addClass("highlight");
	// setTimeout(1000);
	// $('.btnE').removeClass("highlight");
	
	//if statement will allow for number click, operator click then equals click
	if(storage2[0] === undefined) {
		storage2 = [0];
	}
	
	//if statement checks for button click to activate the equals and then runs operands based on which one
	//is picked
	if(bclicked){
		if(plusClicked){
		result = parseInt(storage1.join('')) + parseInt(storage2.join(''));
		$('.screen').text(result);
		}
		else if(subtractClicked){
		result = parseInt(storage1.join('')) - parseInt(storage2.join(''));
		$('.screen').text(result);
		}
		else if(multiplyClicked){
		result = parseInt(storage1.join('')) * parseInt(storage2.join(''));
		$('.screen').text(result);
		}
		else if (divideClicked){ 
			if(storage2[0] === 0) {
				$('.screen').text("error");
			} else {
			result = parseInt(storage1.join('')) / parseInt(storage2.join('')); 
			$('.screen').text(result);}
		}

		clear();
	
	}
});

//setting up the clear button
$('.btnCl').on("click", function(){
	clear();
	$('.screen').text("_");
});
	
//function to clear all vars and added classes	
function clear(){
    storage1 = [];
	storage2 = [];
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
};
//activate the operator buttons plus, subtract, divide and multiply
function operatorAct(){
	bclicked = true;

};

function runOpBtns(operator){
	if(bclicked){
	$(operator).addClass("highlight");
	goToStorageTwo = true;
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

});