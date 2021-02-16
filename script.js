function calculateTip(amountOfBill, numOfPeople, qualityOfService) {
  let tipPercent = 0;
  switch (qualityOfService) {
    case 'excellent':
      tipPercent = 0.25;
      break;
    case 'good':
      tipPercent = 0.2;
      break;
    case 'ok':
      tipPercent = 0.15;
      break;
    case 'poor':
      tipPercent = 0.1;
      break;
    default:
      tipPercent = 0.2;
  }

  if (numOfPeople >= 6) {
    tipPercent += 0.18;
  }

  const tipAmount = amountOfBill * tipPercent;
  return tipAmount;
}

function displayResult(tipAmount, totalAmount) {
  // Compose messages
  const tip_msg = `You should tip: <mark>$${tipAmount}</mark>`;
  const total_msg = `Your total bill is: <mark>$${totalAmount}</mark>`;

  let displayField = $("#displayTip");
  displayField.addClass("container mt-5 alert alert-primary");
  displayField.empty();
 
  // Tip amount and total amount is displayed with h2
  const tip_h2 = $("<h2>" + tip_msg + "</h2>");
  const total_h2 = $("<h2>" + total_msg + "</h2>");
  tip_h2.appendTo(displayField);
  total_h2.appendTo(displayField);
}

function displayWarning() {
  // Compose an error message
  let warning = $("#warning");
  warning.addClass("alert alert-danger");
  warning.attr("role", "alert");
  warning.html("You need to enter the amount of bill");
}

$( document ).ready( () => {
  $( "button#calculate" ).on("click", (e) => {
    // Prevents the page from refreshing
    e.preventDefault();

    // Check if amountOfBill is empty
    if (!$("input#amountOfBill").val()) {
      displayWarning();
      return;
    }

    const amountOfBill = $("#amountOfBill").val(); 
    const numOfPeople = $("#numberOfPeople").val();
    const qualityOfService = $("#rateService").val();

    tipAmount = calculateTip(amountOfBill, numOfPeople, qualityOfService);
    totalAmount = Number(amountOfBill) + Number(tipAmount);
    displayResult(tipAmount, totalAmount);
  });
});
