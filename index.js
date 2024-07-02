const btns = document.querySelectorAll(".btn");
const customInput = document.querySelector(".custom");
const reset = document.getElementById("reset");

// console.log({ Bill: totalBill.value, person: totalPersons.

function calculateTip(value) {
  const totalBill = parseFloat(document.getElementById("bill").value);
  const totalPersons = parseFloat(document.getElementById("person").value);

  const totalPersonsInput = document.querySelector("#person");
  const errorMessage = document.querySelector("#error");

  if (totalPersons == 0) {
    // document.getElementById("person").style.border = "red";
    totalPersonsInput.style.border = "2px solid red";
    errorMessage.style.display = "inline-block";
    return;
  } else {
    totalPersonsInput.style.border = "";
    errorMessage.style.display = "none";
  }

  console.log(totalBill, totalPersons);

  const eachPerson = totalBill / totalPersons;
  const tip = eachPerson * value;
  const totalTipPerson = tip + eachPerson;
  // console.log({ waiterTip: Math.round(tip * 100) / 100, per: Math.round(totalTipPerson * 100) / 100 });

  document.getElementById("tip").innerHTML = Math.round(tip * 100) / 100;
  document.getElementById("total").innerHTML =
    Math.round(totalTipPerson * 100) / 100;
}

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = parseFloat(e.target.value);
    calculateTip(value);
  });
});

customInput.addEventListener("input", (e) => {
  const value = parseFloat(e.target.value) / 100;
  if (!isNaN(value)) {
    calculateTip(value);
  }
});

reset.addEventListener("click", () => {
  document.getElementById("tip").innerHTML = "$0.00";
  document.getElementById("total").innerHTML = "$0.00";
});
