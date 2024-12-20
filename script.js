let count = 0;

        function increase() {
            count++;
            hideErrorMessage();
            updateCounter();
        }

        function decrease() {
            if (count <= 0) {
                showErrorMessage();
            } else {
                count--;
                hideErrorMessage();
                updateCounter();
            }
        }

        function reset() {
            count = 0;
            hideErrorMessage();
            updateCounter();
        }

        function updateCounter() {
            document.getElementById('counter').textContent = `Current Count: ${count}`;
        }

        function showErrorMessage() {
            document.getElementById('error-message').style.display = 'block';
        }

        function hideErrorMessage() {
            document.getElementById('error-message').style.display = 'none';
        }