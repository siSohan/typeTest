"use strict";
const text = document.querySelector("#myWord");
const msg = document.querySelector(".msg");
const btn = document.querySelector(".btn");

let start, end, totalTime, sms;

let hint = [
  "The earth launghs in flowers",
  "Please take your dog, Cali, out for a walk – he really needs some exercise!",
  "What a beautiful day it is on the beach, here in beautiful and sunny Hawaii.",
  "Rex Quinfrey, a renowned scientist, created plans for an invisibility machine.",
  "Do you know why all those chemicals are so hazardous to the environment?",
  " You never did tell me how many copper pennies where in that jar; how come?",
  "Max Joykner sneakily drove his car around every corner looking for his dog.",
  "The two boys collected twigs outside, for over an hour, in the freezing cold!",
  "When do you think they will get back from their adventure in Cairo, Egypt?",
  "Trixie and Veronica, our two cats, just love to play with their pink ball of yarn.",
  "We climbed to the top of the mountain in just under two hours; isn’t that great?",
  "We climbed to the top of the mountain in just under two hours; isn’t that great?",
];

const makemsg = function () {
  sms = Math.floor(Math.random() * hint.length);
  console.log(sms);
  msg.innerHTML = hint[sms];
  const time = new Date();
  start = time.getTime();
  console.log(start);
  btn.innerText = "Done";
  text.value = "";
};
const doneWork = function () {
  const time = new Date();
  end = time.getTime();
  btn.innerText = "Start";
  totalTime = (end - start) / 1000;
  ///////////////////////////////////////////////////////////
  console.log(totalTime);
  const wpm = Math.round((setTypeStr(text.value) / totalTime) * 60);
  console.log(wpm);
  msg.style.color = 'black';
  msg.innerHTML = `Your typed total ${wpm} words per minutes ${errorsms(
    text.value,
    hint[sms]
  )}`;
};
const errorsms = function (str1, str2) {
  const mainTxt = str2.split(" ");
  const typeTxt = str1.split(" ");
  let count = 0;
  typeTxt.forEach((value, i) => {
    if (value === mainTxt[i]) {
      count++;
    }
  });
  console.log(mainTxt.length);
  
  return ` ${count} correct out of ${
    mainTxt.length
  } words and total number of error are ${mainTxt.length - count} `;
};
const setTypeStr = function (str) {
  let respons = str.split(" ");
  let forarr = [];
  respons.forEach((value, i) => {
    if (value === "") return;
    forarr.push(value);
  });
  console.log(forarr);
  return forarr.length;
};
// event listener add on btn
btn.addEventListener("click", function () {
  if (btn.innerText === "Start") {
    text.disabled = false;
    makemsg();
  } else if (btn.innerText === "Done") {
    text.disabled = true;
    doneWork();
  }
});
