const carbonDioxide = document.querySelector('button[greenhouse-gas="carbon-dioxide"]');
const methane = document.querySelector('button[greenhouse-gas="methane"]');
const nitrousOxide = document.querySelector('button[greenhouse-gas="nitrous-oxide"]');
const continueButton = document.getElementById('continueButton');
const activityInfo = document.querySelector(".activity-info");

let isTextVisibleC = false;
let isTextVisibleM = false;
let isTextVisibleN = false;

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

function changeCarbonDioxide() {
    carbonDioxide.classList.toggle("carbon-dioxide-new");

    isTextVisibleC = !isTextVisibleC;
    
    if (isTextVisibleC) {
        activityInfo.innerText = "- Reduce, reuse, and recycle!\n- Conserve non-renewable resources to lower the amount of fossil fuels burned\n- Use environmental-friendly lighting systems and refrigerators";
        activityInfo.style.opacity = 1;
    } else {
        activityInfo.style.opacity = 0;
        setTimeout(() => {
            activityInfo.innerText = "";
            checkAllButtonsClicked();
        }, 300);
    }

    if (isTextVisibleC) {
        clickCounter++;
    } else {
        clickCounter--;
    }

    checkAllButtonsClicked();
}

function changeMethane() {
    methane.classList.toggle("methane-new");

    isTextVisibleM = !isTextVisibleM;
    
    if (isTextVisibleM) {
        activityInfo.innerText = "- Reduce meat consumption; the production of methane from livestock is a significant source of emissions\n- Choose sustainable agriculture\n- Reduce food waste by storing food properly and composting when possible";
        activityInfo.style.opacity = 1;
    } else {
        activityInfo.style.opacity = 0;
        setTimeout(() => {
            activityInfo.innerText = "";
            checkAllButtonsClicked();
        }, 300);
    }

    if (isTextVisibleM) {
        clickCounter++;
    } else {
        clickCounter--;
    }

    checkAllButtonsClicked();
}

function changeNitrousOxide() {
    nitrousOxide.classList.toggle("nitrous-oxide-new");

    isTextVisibleN = !isTextVisibleN;
    
    if (isTextVisibleN) {
        activityInfo.innerText = "- Opt for renewable energy\n- Practice efficient lawn and garden care\n- Reduce energy consumption";
        activityInfo.style.opacity = 1;
    } else {
        activityInfo.style.opacity = 0;
        setTimeout(() => {
            activityInfo.innerText = "";
            checkAllButtonsClicked();
        }, 300);
    }

    if (isTextVisibleN) {
        clickCounter++;
    } else {
        clickCounter--;
    }

    checkAllButtonsClicked();
}

carbonDioxide.addEventListener('click', changeCarbonDioxide);
methane.addEventListener('click', changeMethane);
nitrousOxide.addEventListener('click', changeNitrousOxide);



