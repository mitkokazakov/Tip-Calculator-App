let allButtons = document.querySelectorAll('.single-tip');

let peopleInput = document.querySelector('.people-input input');

let peopleInputErrorMessage = document.querySelector('.people-count-error p');

let customInput = document.querySelector('.custom-tip');

let results = document.querySelector('.results-section');

let resetBtn = document.querySelector('.reset-btn');

let percentage = 0;



allButtons.forEach(b => {
    b.addEventListener('click', GetValueFromClickedButton);
})

function GetValueFromClickedButton(e){

    allButtons.forEach(b => {
        if (b.classList.contains('active')) {
            b.classList.remove('active');
        }
    })

    let text = e.target.innerText;

    let value = text.slice(0,-1);

    percentage = Number(value);

    e.target.classList.add('active');

    customInput.value  = 0;

    console.log(e.target);
}

function CheckPeopleInputValue(){

    let value = peopleInput.value;

    if(value <= 0){
        peopleInput.classList.add('failed');
        peopleInputErrorMessage.classList.add('failed');
    }
    else{
        peopleInput.classList.remove('failed');
        peopleInputErrorMessage.classList.remove('failed');
    }
}

function CheckIfCustomInputNotNull(){

    let value = customInput.value;

    if(value != 0){

        percentage = value;
        console.log(value);

        allButtons.forEach(b => {
            if (b.classList.contains('active')) {
                b.classList.remove('active');
            }
        })
    }
}

resetBtn.addEventListener('click',() =>{
    console.log('click');
});
