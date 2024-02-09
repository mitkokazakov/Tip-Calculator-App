let allButtons = document.querySelectorAll('.single-tip');

let peopleInput = document.querySelector('.people-input input');

let customInput = document.querySelector('.custom-tip');

let results = document.querySelector('.results-section');

let percentage = 0;



allButtons.forEach(b => {
    b.addEventListener('click', GetValueFromClickedButton);
})

function GetValueFromClickedButton(e){

    let text = e.target.innerText;

    let value = text.slice(0,-1);

    percentage = Number(value);

    console.log(value);
}

function CheckPeopleInputValue(){

    let value = peopleInput.value;

    if(value <= 0){
        peopleInput.classList.add('failed');
    }
    else{
        peopleInput.classList.remove('failed');
    }
}

function CheckIfCustomInputNotNull(){

    let value = customInput.value;

    if(value != 0){

        percentage = value;
        console.log(value);
    }
}

results.addEventListener('click',CheckIfCustomInputNotNull);
