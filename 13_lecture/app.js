//switch = can be an efficient replacement to many else if statements

// let day = 1;

// switch (day) {
//   case 1:
//     console.log("it is sunday");
//   case 2:
//     console.log("it is monday");
//   case 3:
//     console.log("it is tuesday");
//   case 4:
//     console.log("it is wednesday");
//   case 5:
//     console.log("it is thrusday");
//   case 6:
//     console.log("it is friday");
//   case 7:
//     console.log("it is satarday");
//      default:
//         console.log(`${day} is not a day`);
//  }

////////////////////////////////////////////another example//////////////////////////////////////

let testScore = 33;
let lettergrade;

switch (true) {
  case testScore >= 90:
    lettergrade = "A";
    break;
  case testScore >= 80:
    lettergrade = "B";
    break;
  case testScore >= 70:
    lettergrade = "C";
    break;
  case testScore >= 60:
    lettergrade = "D";
    break;
  case testScore >= 50:
    lettergrade = "E";
    break;
  default:
    lettergrade = "F";
    break;
}
console.log(lettergrade);
