$(document).ready(function(){
	var arrPushedValue=[]
	var regexNum=/\d/;
	var temporalStorage="";
	var result;
console.log("Welcome calculator")
//arr to push 
var pushvalue = function(val){
	var temporal;
	var strToNum;
	if(regexNum.test(val)===true || val==="." ){
		temporalStorage=temporalStorage+val;	
    	display(temporalStorage)
	}
	else if(val==="ac"){
		arrPushedValue=[];
		temporalStorage="";
	}
	else if(val==="ce"){
		if(temporalStorage.length>0){
		  	temporalStorage=""
		}
		else if(arrPushedValue.length>0){
			arrPushedValue.pop()
		}
	}
	else{

		if(arrPushedValue[arrPushedValue.length-1]==="*"){
           arrPushedValue.pop()
           temporal =arrPushedValue.pop()*temporalStorage;
           arrPushedValue.push(temporal);
           arrPushedValue.push(val);
           temporalStorage="";
		}
		else if(temporalStorage.length>0){
		temporalStorage=parseFloat(temporalStorage);
		arrPushedValue.push(temporalStorage);
		arrPushedValue.push(val)
		temporalStorage=""
		}
		else if(arrPushedValue.length>0){
			if(regexNum.test(arrPushedValue[arrPushedValue.length-1])===true){
				
				arrPushedValue.push(val);
			}
			else{
			arrPushedValue.pop();
			arrPushedValue.push(val);
			}
		}
	}
	
}

var processResult = function(arr){
	if(temporalStorage.length>0){
		pushvalue("=")
		
	}
	for (var i = 0; i < arr.length-1; i++) {
		if(regexNum.test(arr[i])===false){
    	 	if(i===1){
    	 		if(arr[i]==="+"){
    	 		   result=arr[i-1]+arr[i+1];
    	 		}
    	 		else if(arr[i]==="-"){
    	 		  result=arr[i-1]-arr[i+1];
    	 		}
    	 		else if(arr[i]==="/"){
    	 			result=arr[i-1]+arr[i+1];
    	 		}
    	 	}
    	 	else{
    	 		if(arr[i]==="+"){
    	 		   result=result+arr[i+1];
    	 		}
    	 		else if(arr[i]==="-"){
    	 		  result=result-arr[i+1];
    	 		}
    	 		else if(arr[i]==="/"){
    	 			result=result/arr[i+1];
    	 		}
    	 	}
		}
	};
	
	
}

var display = function(val){
	$(".screen").html(val) 
}

$(".one").on("click", function(){
	pushvalue(1)
	
});
 $(".two").on("click", function(){
 	pushvalue(2)
 	
 });
 $(".three").on("click", function(){
 	pushvalue(3)
 	
 });
 $(".four").on("click", function(){
 	pushvalue(4)
 	
 });
 $(".five").on("click", function(){pushvalue(5)});
 $(".six").on("click", function(){pushvalue(6)});
 $(".seven").on("click", function(){pushvalue(7)});
 $(".eight").on("click", function(){pushvalue(8)});
 $(".nine").on("click", function(){pushvalue(9)});
 $(".plus").on("click", function(){pushvalue("+")});
 $(".substraction").on("click", function(){pushvalue("-")});
 $(".division").on("click", function(){pushvalue("/")});
 $(".multiplication").on("click", function(){pushvalue("*")});
 $(".dot").on("click", function(){pushvalue(".")});
 $(".ac").on("click", function(){pushvalue("ac")});
 $(".ce").on("click", function(){pushvalue("ce")});
 $(".equal").on("click", function(){
 	
 	processResult(arrPushedValue)
 	arrPushedValue=[];
	arrPushedValue.push(result);
	display(result)
	//result=0;

 });


});//end ready
