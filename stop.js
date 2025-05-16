document.getElementById('weight').addEventListener('input', function() {
    document.getElementById('weight-value').textContent = this.value + ' kg';
});

document.getElementById('height').addEventListener('input', function() {
    document.getElementById('height-value').textContent = this.value + ' cm';
});

function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100;
    const bmi = (weight / (height * height)).toFixed(1);

    let resultText = `Your BMI is ${bmi}. `;
    let resultClass = '';

    if (bmi < 18.5) {
        resultText += 'You are underweight.';
        resultClass = 'underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText += 'You have a normal weight.';
        resultClass = 'normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText += 'You are overweight.';
        resultClass = 'overweight';
    } else {
        resultText += 'You are obese.';
        resultClass = 'obese';
    }

    const resultElement = document.getElementById('bmi-result');
    resultElement.textContent = resultText;
    resultElement.className = resultClass;
}
