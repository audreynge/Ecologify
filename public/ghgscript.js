const yearButton2020 = document.querySelector('button[data-year="2020"]');
const yearButton2021 = document.querySelector('button[data-year="2021"]');
const yearButton2022 = document.querySelector('button[data-year="2022"]');
const continueButton = document.getElementById('continueButton');
const yearData = document.querySelector(".year-ghg-data");

let isTextVisible2020 = false;
let isTextVisible2021 = false;
let isTextVisible2022 = false;

let clickCounter = 0;

function checkAllButtonsClicked() {
    if (clickCounter === 3) {
        fadeInContinueButton(); // Show and fade in the "Continue" button
    } else {
        continueButton.style.opacity = 0;
        setTimeout(() => {
            continueButton.style.display = 'none';
        }, 300); // Hide the "Continue" button with a delay for the fade-out effect
    }
}

function fadeInContinueButton() {
    continueButton.style.opacity = 0;
    continueButton.style.display = 'block';
    setTimeout(() => {
        continueButton.style.opacity = 1;
    }, 10);
}



function pieChart2020() {
    yearButton2020.classList.toggle("piechart-2020");

    isTextVisible2020 = !isTextVisible2020;
    
    if (isTextVisible2020) {
        yearData.innerText = "Carbon dioxide: 34.7 billion metric tons\n Methane: 370 million metric tons \nNitrous Oxide: 8.7 million metric tons";
        yearData.style.opacity = 1;
    } else {
        yearData.style.opacity = 0;
        setTimeout(() => {
            yearData.innerText = "";
            checkAllButtonsClicked();
        }, 300);
    }

    if (isTextVisible2020) {
        clickCounter++;
    } else {
        clickCounter--;
    }

    checkAllButtonsClicked();
}

function pieChart2021() {
    yearButton2021.classList.toggle("piechart-2021");

    isTextVisible2021 = !isTextVisible2021;
    
    if (isTextVisible2021) {
        yearData.innerText = "Carbon dioxide: 37 billion metric tons\n Methane: 330 million metric tons \nNitrous Oxide: 9 million metric tons";
        yearData.style.opacity = 1;
    } else {
        yearData.style.opacity = 0;
        setTimeout(() => {
            yearData.innerText = "";
            checkAllButtonsClicked();
        }, 300);
    }

    if (isTextVisible2021) {
        clickCounter++;
    } else {
        clickCounter--;
    }

    checkAllButtonsClicked();
}

function pieChart2022() {
    yearButton2022.classList.toggle("piechart-2022");

    isTextVisible2022 = !isTextVisible2022;
    
    if (isTextVisible2022) {
        yearData.innerText = "Carbon dioxide: 37.5 billion metric tons\n Methane: 135 million metric tons \nNitrous Oxide: 335.7 parts per billion";
        yearData.style.opacity = 1;
    } else {
        yearData.style.opacity = 0;
        setTimeout(() => {
            yearData.innerText = "";
            checkAllButtonsClicked();
        }, 300);
    }

    if (isTextVisible2022) {
        clickCounter++;
    } else {
        clickCounter--;
    }

    checkAllButtonsClicked();
}

yearButton2020.addEventListener('click', pieChart2020);
yearButton2021.addEventListener('click', pieChart2021);
yearButton2022.addEventListener('click', pieChart2022);



