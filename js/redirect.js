const currentDate = new Date();
const month = currentDate.getMonth() + 1;
const date = currentDate.getDate() + "-" + month + "-" + currentDate.getFullYear();

console.log(date)

const dayOne = "26-10-2024";
const dayTwo = "27-10-2024";
const dayThree = "28-10-2024";
const dayFour = "29-10-2024";
const dayFive = "30-10-2024";
const daySix = "31-10-2024";
const daySeven = "1-11-2024";
const dayEight = "2-11-2024";
const dayNine = "3-11-2024";

if (month <= 10) {
  if (currentDate.getDate() <= 25) {
    window.location.href = "https://khalid-azmatullah.github.io/kashmir/beforeTrip.html";
  }
}

if (month >= 10) {
  if (currentDate.getDate() >= 4) {
    window.location.href = "https://khalid-azmatullah.github.io/kashmir/afterTrip.html";
  }
}

if (date === dayOne) {
    window.location.href = "https://khalid-azmatullah.github.io/kashmir/dayOne.html";
} else if (date === dayTwo) {
    window.location.href = "https://khalid-azmatullah.github.io/kashmir/dayTwo.html";
} else if (date === dayThree) {
  window.location.href = "https://khalid-azmatullah.github.io/kashmir/dayThree.html";
} else if (date === dayFour) {
  window.location.href = "https://khalid-azmatullah.github.io/kashmir/dayFour.html";
} else if (date === dayFive) {
  window.location.href = "https://khalid-azmatullah.github.io/kashmir/dayFive.html";
} else if (date === daySix) {
  window.location.href = "https://khalid-azmatullah.github.io/kashmir/daySix.html";
} else if (date === daySeven) {
  window.location.href = "https://khalid-azmatullah.github.io/kashmir/daySeven.html";
} else if (date === dayEight) {
  window.location.href = "https://khalid-azmatullah.github.io/kashmir/dayEight.html";
} else if (date === dayNine) {
  window.location.href = "https://khalid-azmatullah.github.io/kashmir/dayNine.html";
}