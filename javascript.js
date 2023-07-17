const inputDiv = document.querySelector('expression');
const buttons = document.querySelectorAll('.key');

const expression = '';

function compute (e) {

}

buttons.forEach((button) => {
    button.addEventListener('click', compute);
})