const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const history = document.querySelector(".history");

class Item {
  constructor(title, amount, sign) {
    this.title = title;
    this.amount = amount;
    this.sign = sign;
  }
}

const items = [];

function deleteItem(element) {
  const parent = element.parentNode;
  parent.remove();
}

function addNew() {
  const title = document.getElementById("new_item").value;
  const amount = document.getElementById("amount").value;
  let sign = "";
  if (amount == 0) {
    alert("please enter correct value");
  } else if (amount > 0) {
    sign = "positive";
  } else {
    sign = "negative";
  }
  const newItem = new Item(title, amount, sign);
  items.push(newItem);
  console.log(items);
}

function historyShow() {}
