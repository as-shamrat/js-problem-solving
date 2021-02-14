//Solution of problem-1
function kilometerToMeter(distanceInKm) {
  return distanceInKm * 1000;
}
let answer = kilometerToMeter(2);
console.log(answer);

//Solution of problem-2
function budgetCalculator(numOfWatch, numOfMobile, numOfLaptop) {
  let totalPrice = numOfWatch * 50 + numOfMobile * 100 + numOfLaptop * 500;
  return totalPrice;
}

console.log(budgetCalculator(2, 1, 3));

//Solution of problem-3
function hotelCost(numOfDays) {
  let cost = 0;
  for (let day = 1; day <= numOfDays; day++) {
    if (day >= 1 && day <= 10) {
      cost = cost + 100;
    } else if (day >= 11 && day <= 20) {
      cost = cost + 80;
    } else if (day > 20) {
      cost = cost + 50;
    }
  }
  console.log(cost);
}

hotelCost(22);

//Solution of problem-4
function megaFriend(arr) {
  let biggestName = "hello";
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].length > biggestName.length &&
      arr[i].length !== biggestName.length
    ) {
      biggestName = arr[i];
    }
  }
  return biggestName;
}

let arrFriends = [
  "Mrs.raihana",
  "Mrs.akila ibn jalil",
  "raihan",
  "walid",
  "Mrs.shayana",
];
let biggestNameOfArray = megaFriend(arrFriends);
console.log("biggest name is: ", biggestNameOfArray);
