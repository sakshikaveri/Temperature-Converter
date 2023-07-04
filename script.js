

let celsiusInput = document.querySelector('.celsius > input')
let fahrenheitInput = document.querySelector('.fahrenheit > input')
let kelvinInput = document.querySelector('.kelvin > input')

/*These lines of code define three variables: celsiusInput, fahrenheitInput, and kelvinInput. These variables store references to the input elements with the IDs celsius, fahrenheit, and kelvin.*/

/*The document.querySelector() method is used to select an element from the DOM. The #celsius part of the code tells the querySelector() method to select the element with the ID celsius. The > input part of the code tells the querySelector() method to select the first input element that is a child of the element with the ID celsius.*/

let btn = document.querySelector('.button button')
/* defines a variable called btn. This variable stores a reference to the button element with the class button.*/

function roundNumber(number) {
    return Math.round(number * 100) / 100
}

celsiusInput.addEventListener('input', function () {
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp * (9 / 5)) + 32
    let kTemp = cTemp + 273.15

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})
/*This line of code defines an event listener for the celsiusInput element. When the user enters a value in the celsiusInput element, the event listener is triggered. The event listener then does the following:

It gets the value of the celsiusInput element.
It converts the value to a floating-point number.
It uses the conversion formulas to calculate the equivalent temperature in Fahrenheit and Kelvin.
It rounds the calculated temperatures to two decimal places.
It sets the value of the fahrenheitInput and kelvinInput elements to the rounded temperatures.*/

fahrenheitInput.addEventListener('input', function () {
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5 / 9)
    let kTemp = (fTemp - 32) * (5 / 9) + 273.15

    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})
kelvinInput.addEventListener('input', function () {
    let kTemp = parseFloat(kelvinInput.value)
    let fTemp = (kTemp - 273.15) * (9 / 5) + 32
    let cTemp = kTemp - 273.15

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
})

btn.addEventListener('click', () => {
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""

})
/*line of code defines an event listener for the button element. When the user clicks the button, the event listener is triggered. The event listener then clears the values of all three input elements.*/