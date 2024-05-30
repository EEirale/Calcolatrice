let equation = "";
let start = 0;
let end = 0;
let last_result; 
let numbers = []; 
let operators= [];

function pressed(element) { 
    if(element.textContent === "𝜋"){
        equation += "3.1415"; 
    } else if (["+", "-", "*", "/", "%", "^", "√"].includes(element.textContent)) {
        operators.push(element.textContent);
        end = equation.length;
        numbers.push(parser());
        equation += element.textContent;
        start = equation.length;
    }
    else {
        equation += element.textContent; 
    }
    
    document.getElementById("result").innerHTML = equation; 
}

function canc() { 
    equation = "";
    start = 0;
    end = 0;
    numbers = [];
    operators_index = []
    document.getElementById("result").innerHTML = "CALCULATOR"; 
}

function calc() {
    while(operators.find("^") > 0){

    }
}

function ans() { 
    equation += "ANS";
    numbers.push(last_result) 
    document.getElementById("result").innerHTML = equation; 
}

function parser() {
    let number;

    try {
        number = parseFloat(equation.substring(start, end))
    } catch (error) {
        alert("invalid number format")
    }
    try {
        number = parseFloat(equation.substring(start, end))
		if(Number.isInteger(number)){
			number = parseInt(number);
            console.log(number)
			return number;
		}
        console.log(number)
		return number;
    } catch (error) {
        alert("invalid number format");
    }
}
