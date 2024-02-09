let allButtons = document.querySelectorAll('.single-tip');

let results = document.querySelector('.results-section');

let p = 0;

function GetValueFromClickedButton(e){

    let text = e.target.innerText;

    let value = text.slice(0,-1);

    p = Number(value);

    console.log(value);
}

allButtons.forEach(b => {
    b.addEventListener('click', GetValueFromClickedButton);
})

