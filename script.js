let currentInput ='';
let previousInput='';
let operation = null;
let restOnNextInput= false;

const resultDisplay= document.getElementById('result');
const expressionDisplay = document.getElementById('expression');

const numbersButtons= document.querySelectorAll(".number");
const operatorButtons= document.querySelectorAll(".operator");
const resultButton= document.querySelector(".result-btn");
const closeButton= document.querySelector(".close");
const minimizeButton= document.querySelector(".minimize");


//Number button click handlers
numbersButtons.forEach(button => {
    button.addEventListener("click", ()=> {
        const number = button.textContent; // gets the visible digit

        if(restOnNextInput){
            currentInput ='';
            previousInput='';
            operation = null; 
            restOnNextInput= false;
        }//clear everything after getting a result
        
        if(currentInput === '0' && number === '0') return;

        currentInput += number;
        updateDisplay();
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", ()=> {
        const op = button.textContent;//gets the visible operator
        if(currentInput==='') return;

        restOnNextInput = false;
        if(previousInput !== ''){
            calculate();
        }
        
        operation=op;
        previousInput=currentInput;
        currentInput='';
        updateDisplay();
    });
});

resultButton.addEventListener('click', ()=>{
   calculate();
   operation = null;
   restOnNextInput = true;
});

closeButton.addEventListener("click", ()=>{
    alert('Calculate closed!');
    //window.close();
});

minimizeButton.addEventListener("click", ()=>{
    alert('Minimize button will work on real world');
    //document.querySelector(".calculator").style.display = "none";
});

function calculate(){
    if(previousInput === '' || currentInput === '' || operation === null)return;

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result=0;

    switch(operation){
        case '+':
            result= prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if(current === 0){
                alert('can\'t divide by zero!');
                clear();
                return;
            }
            result = prev / current;
            break;
    }

    currentInput = result.toString();
    previousInput = '';
    updateDisplay();
}


function updateDisplay(){
    if(currentInput === ''){
        resultDisplay.textContent ='0';
    }else{
        resultDisplay.textContent = currentInput;
    }

    if(previousInput !== '' && operation !== null){
        expressionDisplay.textContent= `${previousInput} ${operation} ${currentInput || ''}`;
    }else{
        expressionDisplay.textContent = '';
    }
}

function clear(){
    currentInput ='';
    previousInput='';
    operation = null;
    updateDisplay();
}

updateDisplay();