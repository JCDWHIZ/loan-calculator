// Function to calculate the loan
function calculateLoan(event) {
  event.preventDefault();
  var loanAmount = parseFloat(document.getElementById("loanAmount").value);
  var interestRate = parseFloat(document.getElementById("interestRate").value);
  var loanTerm = parseFloat(document.getElementById("loanTerm").value);

  // Hide the Calculate button and show the loading image
  var calculateBtn = document.getElementById("calculateBtn");
  calculateBtn.style.display = "none";

  var loadingContainer = document.getElementById("loadingContainer");
  loadingContainer.innerHTML = '<img src="loading.gif" alt="Loading..." />';

  setTimeout(function () {
    var monthlyInterestRate = interestRate / 100 / 12;
    var totalMonths = loanTerm * 12;
    var monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalMonths));
    var totalPayment = monthlyPayment * totalMonths;

    var result = document.getElementById("result");
    result.innerHTML = `
            <div class="col-md-7 mx-auto card border-2 border-primary mt-3 text-center">
              <h4>Loan Summary:</h4>
              <p>Loan Amount: N${loanAmount.toFixed(2)}</p>
              <p>Interest Rate: ${interestRate}%</p>
              <p>Loan Term: ${loanTerm} years</p>
              <p>Monthly Payment: N${monthlyPayment.toFixed(2)}</p>
              <p>Total Payment: N${totalPayment.toFixed(2)}</p>
            </div>
          `;

    // Show the Calculate button and hide the loading image
    calculateBtn.style.display = "block";
    loadingContainer.innerHTML = "";
  }, 3000); // 5000 milliseconds = 5 seconds
}

// Attach event listener to the form submission
var form = document.querySelector("form");
form.addEventListener("submit", calculateLoan);
