const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultelement = document.getElementById("resultelement");
let age;
mysubmit.onclick = function () {
  age = mytext.value;
  age = Number(age);

  if (age >= 101) {
    resultelement.textContent = `you are  too old to enough to  this site`;
  } else if (age == 0) {
    resultelement.textContent = `you can't enter , you are just born`;
  } else if (age >= 18) {
    resultelement.textContent = `you are able to enter this site`;
  } else if (age < 0) {
    resultelement.textContent = `your age can't be below 0`;
  } else {
    resultelement.textContent = `you are not able to enter this site`;
  }
};
