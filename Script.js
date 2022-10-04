// _________________ Start all _________________
// [1] Create empty variables to store serial letters in
// [2] Toggle class on selected options on each click to
//     choose serial properties
// [3] Get choosen selectors by classname, set values in
//     empty variables and generate customization serials

const inputs = document.querySelectorAll(".settings [type='checkbox']"),
  smallChoose = document.getElementById("small"),
  bigChoose = document.getElementById("big"),
  numbersChoose = document.getElementById("numbers"),
  specialChoose = document.getElementById("special"),
  serialCount = document.getElementById("serialCount"),
  generateBtn = document.querySelector(".generate"),
  copyBtn = document.querySelector(".copy"),
  restoreBtn = document.querySelector(".restore"),
  showSerial = document.querySelector(".serialEl");

let small = "",
  big = "",
  numbers = "",
  special = "";

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    e.target.classList.toggle("change");
  });
});

function generate() {
  smallChoose.classList.contains("change")
    ? (small = "abcdefghijklmnopqrstuvwxyz")
    : (small = "");

  bigChoose.classList.contains("change")
    ? (big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    : (big = "");

  numbersChoose.classList.contains("change")
    ? (numbers = "1234567890")
    : (numbers = "");

  specialChoose.classList.contains("change")
    ? (special = "!@#$%&?/\\")
    : (special = "");

  let properties = small + numbers + big + special;

  let randomResult = "";

  for (let i = 0; i < serialCount.value; i++) {
    randomResult +=
      properties[Math.floor(Math.random() * properties.length)] || "";
  }

  localStorage.setItem("lastSerial", randomResult);

  return randomResult || "Error!";
}

generateBtn.onclick = () => {
  showSerial.innerHTML = generate();
};

copyBtn.onclick = () => {
  if (showSerial.innerHTML !== "Error!") {
    navigator.clipboard.writeText(showSerial.innerHTML);
  }
};

restoreBtn.onclick = () => {
  showSerial.innerHTML = localStorage.getItem("lastSerial");
};
