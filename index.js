function calculateBmi() {
    var height = document.getElementById("height");
    var weight = document.getElementById("weight");
    var result = document.getElementById("result");
    
    var height = parseFloat(height.value);
    var weight = parseFloat(weight.value);
    height = height / 100;
    var bmi = weight / Math.pow(height, 2);
    if (isNaN(height) || isNaN(weight)) {
        result.innerHTML = "Please enter valid height and weight.";
    }
    else {
        var category = "";
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 25) {
            category = "Normal weight";
        } else if (bmi < 30) {
            category = "Overweight";
        } else {
            category = "Obese";
        }
        result.innerHTML = "Your bmi is: " + bmi.toFixed(2) + "(" + category + ")";
    }
}