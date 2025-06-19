document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('number-input');
    const convertButton = document.getElementById('convert-button');
    const resultOutput = document.getElementById('result-output');

    convertButton.addEventListener('click', function() {
        const number = parseInt(numberInput.value);
        
        if (isNaN(number) || number < 1 || number > 100000) {
            resultOutput.textContent = 'Please enter a number between 1 and 100,000';
            return;
        }
        
        const romanNumeral = convertToRoman(number);
        resultOutput.textContent = romanNumeral;
    });

    function convertToRoman(num) {
        if (num === 0) return '';
        
        const romanSymbols = [
            ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
            ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
            ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
        ];
        
        let result = '';
        
        for (let [symbol, value] of romanSymbols) {
            while (num >= value) {
                result += symbol;
                num -= value;
            }
        }
        
        return result;
    }
});