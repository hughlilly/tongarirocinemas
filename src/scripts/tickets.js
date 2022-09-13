//  Get elements to read from and update
const totalDiv = document.getElementById("ticket-total");
let countAdult = document.getElementById("adult").innerText;
let countChild = document.getElementById("child").innerText;
let countConc = document.getElementById("conc").innerText;

// Get buttons
const decreaseButtons = document.querySelectorAll(".decrease");
const increaseButtons = document.querySelectorAll(".increase");

// Set prices
const adultPrice = 18;
const childPrice = 14.5;
const concPrice = 11.5;

decreaseButtons.forEach((decrease) => {
  decrease.addEventListener("click", (event) => {
    const countToChange = event.target.dataset.countName;
    if (countToChange === "adult") {
      if (countAdult > 0) {
        countAdult--;
        document.getElementById("adult").innerText = countAdult;
        updateTotal();
      }
    } else if (countToChange === "child") {
      if (countChild > 0) {
        countChild--;
        document.getElementById("child").innerText = countChild;
        updateTotal();
      }
    } else if (countToChange === "conc") {
      if (countConc > 0) {
        countConc--;
        document.getElementById("conc").innerText = countConc;
        updateTotal();
      }
    }
  });
});

increaseButtons.forEach((increase) => {
  increase.addEventListener("click", (event) => {
    const countToChange = event.target.dataset.countName;
    if (countToChange === "adult") {
      if (countAdult < 10 && countAdult >= 0) {
        countAdult++;
        document.getElementById("adult").innerText = countAdult;
        updateTotal();
      }
    } else if (countToChange === "child") {
      if (countChild < 10 && countChild >= 0) {
        countChild++;
        document.getElementById("child").innerText = countChild;
        updateTotal();
      }
    } else if (countToChange === "conc") {
      if (countConc < 10 && countConc >= 0) {
        countConc++;
        document.getElementById("conc").innerText = countConc;
        updateTotal();
      }
    }
  });
});

// Function run each time count changes
function updateTotal() {
  // Calculate total
  const total =
    adultPrice * countAdult + childPrice * countChild + concPrice * countConc;

  // Update total when value changes, to two decimal places
  totalDiv.textContent = `${total.toFixed(2)}`;
}
