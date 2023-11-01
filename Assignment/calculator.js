let display = document.getElementById("display");
        let result = document.getElementById("result");
        let currentOperation = "";

        function appendToDisplay(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = "";
        }

        function calculate() {
            try {
                result.textContent = eval(display.value);
                display.value = "";
            } catch (error) {
                result.textContent = "Error";
            }
        }