function myalert() {
    alert("Loading weather report...")
}
function removeMessage(){
 var footerElements= document.querySelectorAll("footer");
 footerElements.forEach(function(footerElement){
    footerElement.remove();
 });
}



// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert temperatures based on the selected unit
function convertTemperatures() {
    var celsiusTomorrowElement = document.getElementById("celsiusTomorrow");
    var celsiusMinTomorrowElement = document.getElementById("celsiusMinTomorrow");
    var temperatureUnitSelect = document.querySelector("select[name='temperature']");

    


    // Extract numerical values from the text content
    var celsiusTomorrow = parseFloat(celsiusTomorrowElement.textContent);
    var celsiusMinTomorrow = parseFloat(celsiusMinTomorrowElement.textContent);

    // Check the selected unit
    var isFahrenheit = temperatureUnitSelect.value === "F";

    // Convert temperatures based on the selected unit
    if (!isNaN(celsiusTomorrow)) {
        var convertedTemperature = isFahrenheit ? convertCelsiusToFahrenheit(celsiusTomorrow) : celsiusTomorrow;
        celsiusTomorrowElement.textContent = convertedTemperature.toFixed(2) + (isFahrenheit ? "°F" : "°C");
    }

    if (!isNaN(celsiusMinTomorrow)) {
        var convertedMinTemperature = isFahrenheit ? convertCelsiusToFahrenheit(celsiusMinTomorrow) : celsiusMinTomorrow;
        celsiusMinTomorrowElement.textContent = convertedMinTemperature.toFixed(2) + (isFahrenheit ? "°F" : "°C");
    }
}

// Function to handle select change
function handleSelectChange() {
    convertTemperatures();
}

var select = document.querySelector("select[name='temperature']");
select.addEventListener("change", handleSelectChange);

convertTemperatures();
