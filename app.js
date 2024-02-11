let allButtons = document.querySelectorAll('.single-tip');

let tipsSection = document.querySelector('.tips');

let inputSection = document.querySelector('.input-section');

let billInput = document.querySelector('.bill-wrapper input');

let peopleInput = document.querySelector('.people-input input');

let peopleInputErrorMessage = document.querySelector('.people-count-error p');

let customInput = document.querySelector('.custom-tip');

let results = document.querySelector('.results-section');

let resetBtn = document.querySelector('.reset-btn');

let amountTip = document.querySelector('.amountTip');

let amountTotal = document.querySelector('.amountTotal');

let percentage = 0;

console.log(billInput.value);

allButtons.forEach(b => {
    b.addEventListener('click', GetValueFromClickedButton);
})

function GetValueFromClickedButton(e) {

    allButtons.forEach(b => {
        if (b.classList.contains('active')) {
            b.classList.remove('active');
        }
    })

    let text = e.target.innerText;

    let value = text.slice(0, -1);

    percentage = Number(value);

    e.target.classList.add('active');

    customInput.value = 0;

    console.log(e.target);
}

function CheckPeopleInputValue() {

    let value = peopleInput.value;

    if (value <= 0) {
        peopleInput.classList.add('failed');
        peopleInputErrorMessage.classList.add('failed');
    }
    else {
        peopleInput.classList.remove('failed');
        peopleInputErrorMessage.classList.remove('failed');
    }

    Calculate();

}

function CheckIfCustomInputNotNull() {

    let value = customInput.value;

    if (value != 0) {

        percentage = value;

        allButtons.forEach(b => {
            if (b.classList.contains('active')) {
                b.classList.remove('active');
            }
        })

        Calculate();
    }
}

function Calculate() {

    let tipPerPerson = 0;

    let billPerPerson = 0;

    if (billInput.value > 0 && percentage > 0 && peopleInput.value > 0) {

        tipPerPerson = (billInput.value * (percentage / 100)) / peopleInput.value;

        billPerPerson = (billInput.value / peopleInput.value) + tipPerPerson;

        amountTip.innerText = tipPerPerson.toFixed(2);
        amountTotal.innerText = billPerPerson.toFixed(2);

        resetBtn.classList.add('active');
    }
}

function Reset() {
    billInput.value = null;
    peopleInput.value = null;

    allButtons.forEach(b => {
        if (b.classList.contains('active')) {
            b.classList.remove('active');
        }
    });

    customInput.value = null;

    amountTip.innerText = '$0.00';
    amountTotal.innerText = '$0.00';

    resetBtn.classList.remove('active');
}

tipsSection.addEventListener('click', Calculate);

resetBtn.addEventListener('click', Reset);
