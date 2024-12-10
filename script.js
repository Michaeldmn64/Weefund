function showWithdraw() {
  document.getElementById("withdrawSection").style.display = "block";
}

function showBuyBPC() {
  document.getElementById("buyBPCSection").style.display = "block";
}

function submitWithdrawCode() {
  const code = document.getElementById("withdrawCode").value;
  if (code) {
    alert(`BPC code submitted: ${code}`);
  } else {
    alert("Please enter a valid BPC code.");
  }
}

function submitBPCCode() {
  const code = document.getElementById("bpcCode").value;
  if (code) {
    alert(`BPC code submitted: ${code}`);
  } else {
    alert("Please enter a valid BPC code.");
  }
}