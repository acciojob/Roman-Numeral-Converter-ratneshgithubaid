document.addEventListener('DOMContentLoaded', function() {
    const convertButton = document.getElementById('convertButton');
    const numberInput = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');

    convertButton.addEventListener('click', function() {
        const num = parseInt(numberInput.value);
        
        if (isNaN(num) || num < 1 || num > 100000) {
            resultDiv.textContent = 'Please enter a number between 1 and 100000';
            return;
        }
        
        const romanNumeral = convertToRoman(num);
        resultDiv.textContent = romanNumeral;
    });

    function convertToRoman(num) {
        const romanSymbols = [
            ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
            ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
            ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
        ];
        
        let result = '';
        
        for (const [symbol, value] of romanSymbols) {
            while (num >= value) {
                result += symbol;
                num -= value;
            }
        }
        
        return result;
    }
});