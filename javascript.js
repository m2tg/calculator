const inputDiv = document.querySelector('.expression');
const buttons = document.querySelectorAll('.key');

let expression = '';

function parseAndEvaluate() {
    parsedExpression = expression.split(/([-+*\/])/g);
    //console.log(parsedExpression);
    while (parsedExpression.length !== 1) {
        if (parsedExpression.includes('/')) {
            parsedExpression.forEach( (element, index) => {
                if(element == '/') {
                    parsedExpression.splice(index-1, 3, parseInt(parsedExpression[index-1])/parseInt(parsedExpression[index+1]));
                }
            })
        }
        else if (parsedExpression.includes('*')) {
            parsedExpression.forEach( (element, index) => {
                if(element == '*') {
                    parsedExpression.splice(index-1, 3, parseInt(parsedExpression[index-1])*parseInt(parsedExpression[index+1]));
                }
            })
        }
        else if (parsedExpression.includes('+')) {
            parsedExpression.forEach( (element, index) => {
                if(element == '+') {
                    parsedExpression.splice(index-1, 3, parseInt(parsedExpression[index-1])+parseInt(parsedExpression[index+1]));
                }
            })
        }
        else if (parsedExpression.includes('-')) {
            parsedExpression.forEach( (element, index) => {
                if(element == '-') {
                    parsedExpression.splice(index-1, 3, parseInt(parsedExpression[index-1])-parseInt(parsedExpression[index+1]));
                }
            })
        }
        //console.log(parsedExpression);
    }
    inputDiv.textContent = parsedExpression;
}

function compute (e) {
    const dataValue = this.getAttribute('data-value');
    if (dataValue === '='){
        parseAndEvaluate();
    }
    else if (dataValue === 'C') {
        inputDiv.textContent = '';
        expression = '';
    }
    else {
        expression += dataValue;
        
        inputDiv.textContent = expression;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', compute);
})