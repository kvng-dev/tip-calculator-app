const btns = document.querySelectorAll(".btn");

// console.log({ Bill: totalBill.value, person: totalPersons.

function calculateTip(value) {
  const totalBill = parseFloat(document.getElementById("bill").value);
  const totalPersons = parseFloat(document.getElementById("person").value);

  if (totalPersons === 0) {
    console.log("Value cannot be zero");
    return;
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
