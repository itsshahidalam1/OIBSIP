document.getElementById('convertBtn').addEventListener('click', function() {
    const temp = document.getElementById('temperature').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const result = document.getElementById('result');

    if (isNaN(temp)) {
        result.textContent = 'Please enter a valid number.';
        return;
    }

    let convertedTemp;
    let convertedUnit;

    if (unit === 'celsius') {
        convertedTemp = `${(temp * 9/5) + 32} °F, ${(parseFloat(temp) + 273.15)} K`;
        convertedUnit = '';
    } else if (unit === 'fahrenheit') {
        convertedTemp = `${(temp - 32) * 5/9} °C, ${((temp - 32) * 5/9) + 273.15} K`;
        convertedUnit = '';
    } else if (unit === 'kelvin') {
        convertedTemp = `${temp - 273.15} °C, ${(temp - 273.15) * 9/5 + 32} °F`;
        convertedUnit = '';
    }

    result.textContent = `Converted temperature: ${convertedTemp} ${convertedUnit}`;
});
