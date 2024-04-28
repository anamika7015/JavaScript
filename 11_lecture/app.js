// .checked = property that determines the checked state of an
//           html checkbox or radio button element

const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const payPalbtn = document.getElementById("payPalbtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (mycheckbox.checked) {
    console.log("you are subscribed!");
    subResult.textContent = `you are subscribed!`;
  } else {
    subResult.textContent = `you are NOT subscribed!`;
  }
  if(visabtn.checked){
    paymentResult.textContent = `you are paying with visa`;
  }
  else if(mastercardbtn.checked){
    paymentResult.textContent = `you are paying with mastercard`;
    
  }
  else if(payPalbtn.checked){
    paymentResult.textContent = `you are paying with paypal`;

  }
  else{
    paymentResult.textContent = `you must select a payment type`;
  }
};
