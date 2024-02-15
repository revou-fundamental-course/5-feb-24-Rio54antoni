function convertToFar() {
    var celcius = parseFloat(document.querySelector('.input-field').value);
    var fahrenheit = (celcius * 9 / 5) + 32;
    var calculation = celcius + '°C * 9/5 + 32 = ' + fahrenheit.toFixed(2) + '°F';
    document.getElementById('input-hasil-konversi').value = fahrenheit.toFixed(2);
    document.getElementById('penjelasan-konversi').value = calculation;
}

function resetFields() {
    document.querySelector('.input-field').value = '';
    document.getElementById('input-hasil-konversi').value = '';
    document.getElementById('penjelasan-konversi').value = '';
}
