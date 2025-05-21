
const celsiusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');
const resetBtn = document.querySelector('.button button');

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

let isUpdating = false; 

celsiusInput.addEventListener('input', function () {
    if (isUpdating) return;
    const cTemp = parseFloat(celsiusInput.value);
    if (isNaN(cTemp)) {
        clearInputs();
        return;
    }

    isUpdating = true;
    fahrenheitInput.value = roundNumber((cTemp * 9 / 5) + 32);
    kelvinInput.value = roundNumber(cTemp + 273.15);
    isUpdating = false;
});

fahrenheitInput.addEventListener('input', function () {
    if (isUpdating) return;
    const fTemp = parseFloat(fahrenheitInput.value);
    if (isNaN(fTemp)) {
        clearInputs();
        return;
    }

    isUpdating = true;
    celsiusInput.value = roundNumber((fTemp - 32) * 5 / 9);
    kelvinInput.value = roundNumber((fTemp - 32) * 5 / 9 + 273.15);
    isUpdating = false;
});

kelvinInput.addEventListener('input', function () {
    if (isUpdating) return;
    const kTemp = parseFloat(kelvinInput.value);
    if (isNaN(kTemp)) {
        clearInputs();
        return;
    }

    isUpdating = true;
    celsiusInput.value = roundNumber(kTemp - 273.15);
    fahrenheitInput.value = roundNumber((kTemp - 273.15) * 9 / 5 + 32);
    isUpdating = false;
});

resetBtn.addEventListener('click', () => {
    clearInputs();
});

function clearInputs() {
    isUpdating = true;
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
    isUpdating = false;
}
