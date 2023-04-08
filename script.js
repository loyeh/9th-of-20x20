const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const history = document.getElementById("history");
const new_item = document.getElementById("new_item");
const new_amount = document.getElementById("amount");

class Item {
  constructor(title, amount, sign) {
    this.title = title;
    this.amount = amount;
    this.sign = sign;
  }

  rowCreator() {
    const row = document.createElement("div");
    row.className = "row " + this.sign;
    row.innerHTML = `<span class="close" onclick="deleteItem(this)">X</span><div><p>${this.title}</p><p class="cost">${this.amount}</p></div>`;
    return row;
  }
}

function deleteItem(element) {
  const parent = element.parentNode;
  parent.remove();
  storageUpdate();
  calculationsUpdate();
}

function addNew() {
  const title = new_item.value;
  new_item.value = "";
  const amount = new_amount.value;
  new_amount.value = null;
  let sign = "";
  if (amount == 0) {
    alert("please enter correct value");
  } else if (amount > 0) {
    sign = "positive";
  } else {
    sign = "negative";
  }
  const newItem = new Item(title, amount, sign);
  const row = newItem.rowCreator();
  history.appendChild(row);
  storageUpdate();
  calculationsUpdate();
}

function storageUpdate() {
  const inner = history.innerHTML;
  localStorage.setItem("inner", JSON.stringify(inner));
}

function calculationsUpdate() {
  history.innerHTML = JSON.parse(localStorage.getItem("inner"));
  const cost = document.getElementsByClassName("cost");
  let total_income = 0;
  let total_expense = 0;
  let total_balance = 0;
  const costs = [];
  for (let i = 0; i < cost.length; i++) {
    costs.push(Number(cost[i].innerText));
  }
  costs.forEach((amount) => {
    total_balance += amount;
    if (amount > 0) {
      total_income += amount;
    } else {
      total_expense += amount;
    }
  });
  balance.innerText = `$${total_balance.toFixed(2)}`;
  income.innerText = `$${total_income.toFixed(2)}`;
  expense.innerText = `$${total_expense.toFixed(2)}`;
}
