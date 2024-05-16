let equation = "";
let last_result;

function pressed(element){
    equation += element.textContent;
    document.getElementById("result").innerHTML = equation;
}

function canc(){
    equation = "";
    document.getElementById("result").innerHTML = "CALCULATOR";
}

function calc(){
    
}

function ans() {
    equation += last_result;
    document.getElementById("result").innerHTML = equation;
}