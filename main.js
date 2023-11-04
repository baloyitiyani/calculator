function calculate(event){
    const inputValue =event.target.value;
    const expression  = /\/|\*|\-|\+/;

    const numbers = inputValue.split(expression);
    //console.log(numbers);
    const numberA = +numbers[0];
    // you can use the parseInt or put a '+' infront of your variable to change it from
    // string to a number
    const numberB = +numbers[1];

    const operation = inputValue.match(expression);
    const operator = operation[0];

    const calculator = new Calculator();
    let result;
    calculator.add(numberA);
    switch (operator){
        case '+':
            result = calculator.add(numberB)
            break;
        case '-':
            result = calculator.subtract(numberB);
            break
        case '*':
            result = calculator.multiply(numberB);
            break;
        case '/':
            result = calculator.divide(numberB);
            break;
    }
    updateResult(result)
   
    function updateResult(result){
        let element = document.getElementById('results');

        if (element){
            element.innerText = result;
        }
    }
}

document.getElementById('inputValue').addEventListener('change' , calculate);