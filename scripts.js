let equation = ""; 
let last_result; 
let numbers = []; 
let operators_index = [];

function pressed(element) { 
    equation += element.textContent; 
    document.getElementById("result").innerHTML = equation; 
}

function canc() { 
    equation = ""; 
    document.getElementById("result").innerHTML = "CALCULATOR"; 
}

function calc() { 
    numbers = [];
    operators_index = []
    parser(); 
    let j = 0; 
    result = numbers[j++]; 
    console.log("result: " + result); 
    for (let i = 0; i < operators_index.length; i++) { 
        console.log("operator: " + equation[operators_index[i]]);
        switch (equation[operators_index[i]]) { 
            case "+": 
                result += numbers[j++]; 
                break; 
            case "-": 
                result -= numbers[j++]; 
                break;
            case "*": 
                if (operators_index[i] === "+") {
                    result -= numbers[j - 1];
                    result += (numbers[j - 1] * numbers[j++]);
                } else if (operators_index[i] === "-") {
                    result += numbers[j - 1];
                    result -= (numbers[j - 1] * numbers[j++]);
                } else {
                    result *= numbers[j++];
                }
                break; 
            case "/":
                if (operators_index[i] === "+") {
                    result -= numbers[j - 1];
                    result += (numbers[j - 1] / numbers[j++]);
                } else if (operators_index[i] === "-") {
                    result += numbers[j - 1];
                    result -= (numbers[j - 1] / numbers[j++]);
                } else if (operators_index[i] === "*"){
                    result += numbers[j - 1];
                    result -= (numbers[j - 1] / numbers[j++]);
                } else {
                    result /= numbers[j++]
                }
                break;
        } console.log("result: " + result); 
    } 
    equation = ""; 
    last_result = result; 
    document.getElementById("result").innerHTML = result; 
}

function ans() { 
    equation += last_result; 
    document.getElementById("result").innerHTML = equation; 
}

function parser() {
    let start = 0; let end = 0;

    for (let i = 1; i < equation.length; i++) {
        if (isNaN(equation.charAt(i))) {
            end = i;
            try {
                number = parseInt(equation.substring(start, end))
                console.log(number)
            } catch (error) {
                alert("invalid number format")
            }
            numbers.push(number);
            start = end + 1;
            operators_index.push(i);
        }
    }

    end = equation.length;
    try {
        number = parseInt(equation.substring(start, end))
        console.log(number)
        numbers.push(number);
    } catch (error) {
        alert("invalid number format");
    }
    
}