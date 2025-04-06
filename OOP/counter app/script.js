let interval;

    function startCountdown() {
      clearInterval(interval); // Clear any previous countdown
      const input = document.getElementById('userNumber');
      const display = document.getElementById('countDisplay');
      let count = parseInt(input.value);

      if (isNaN(count) || count <= 0) {
        alert("Please enter a valid positive number!");
        return;
      }

      display.textContent = count;

      interval = setInterval(() => {
        count--;
        display.textContent = count;
        if (count <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    }