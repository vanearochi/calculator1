$(document).ready(function(){
	var arrPushedValue=[]
	var regexNum=/[\d\.]/;
	var temporalStorage="";
	var result;
	var backupArr=[];
console.log("Welcome calculator")
//arr to push 

var ac = function(){
		arrPushedValue=[];
		temporalStorage="";
		backupArr=[];
		display(0)
	};

var ce = function(){
		if(temporalStorage.length>0){
		  	temporalStorage=""
		  	display(arrPushedValue)
		}
		else if(arrPushedValue.length>0){
			arrPushedValue.pop()
			display(arrPushedValue)
		}
	};

var pushvalue = function(val){
	var temporal;
	var strToNum;
	if(regexNum.test(val)===true){
		if(val==="."){ 
			if (temporalStorage.indexOf(".")===-1){
				temporalStorage=temporalStorage+val;	
		    	display(temporalStorage)
		    }
    	}
    	else {
    		temporalStorage=temporalStorage+val;	
	    	display(temporalStorage)
    	}
	}
	

	
	else if(temporalStorage.length>0){
		temporalStorage=parseFloat(temporalStorage);
		arrPushedValue.push(temporalStorage);
		arrPushedValue.push(val)
		temporalStorage=""
		console.log("test11"+arrPushedValue)
		}
		else if(arrPushedValue.length>0){
			if(regexNum.test(arrPushedValue[arrPushedValue.length-1])===true){
				
				arrPushedValue.push(val);
				console.log("test12"+arrPushedValue)
			}
			else{
			arrPushedValue.pop();
			arrPushedValue.push(val);
			console.log("test13"+arrPushedValue)
			}
		}
	
	
}

var multiplication = function(arr){
		
		var arrTemporal = [];
		var multiplicationProduct;
		for (var i = 0; i < arr.length-1; i++){
			if(arr[i]==="*" && arr[i-2]==="*"){
				multiplicationProduct=arrTemporal.pop()*arr[i+1];
				arrTemporal.push(multiplicationProduct);
				i++
			}
			else if(arr[i]==="*"){
				multiplicationProduct=arr[i-1]*arr[i+1];
				arrTemporal.pop();
				arrTemporal.push(multiplicationProduct);
				i++
			}
			else{
				arrTemporal.push(arr[i]);
			}
		}
		arrPushedValue=arrTemporal
		console.log( "test3 " + arrPushedValue)

};


var processResult = function(arr){
	
	
	
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
    	 			result=arr[i-1]/arr[i+1];
    	 		}
    	 		//console.log("test1"+result)
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
    	 		console.log("test2"+result)
    	 		console.log(typeof(result))
    	 	}
		}
	};
	
	console.log(arrPushedValue)
	console.log(result)
}

var display = function(val){
	$(".screen").html(val) 
}


 $(".number").on("click", function(event){
  var the_number = this.innerHTML;
  console.log(the_number)
  pushvalue(the_number)

 });
 
 $(".plus").on("click", function(){pushvalue("+")});
 $(".substraction").on("click", function(){pushvalue("-")});
 $(".division").on("click", function(){pushvalue("/")});
 $(".multiplication").on("click", function(){pushvalue("*")});
 $(".dot").on("click", function(){pushvalue(".")});
 $(".ac").on("click", function(){ac()});
 $(".ce").on("click", function(){ce()});
 $(".equal").on("click", function(){

 	pushvalue("=")

 	if(arrPushedValue.indexOf("*")>=0){
 		multiplication(arrPushedValue)
 		if(arrPushedValue.length===1){
 			result=arrPushedValue[0]
 			display(result)
 		}
 		
 	}
 	
 	processResult(arrPushedValue)
 	arrPushedValue=[];
	arrPushedValue.push(result);
	display(result)
	//result=0;

 });


});//end ready


// if(temporalStorage.length>0){
//  		temporalStorage=parseFloat(temporalStorage);
// 		arrPushedValue.push(temporalStorage);
// 		console.log("test2 "+arrPushedValue )
// 		temporalStorage=""
		
// 	}
//  	