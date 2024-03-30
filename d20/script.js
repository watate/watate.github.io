const result = document.getElementById("result");
const helpCount = document.getElementById("help-count");
const d20btn = document.getElementById("d20-btn");
const coinbtn = document.getElementById("coin-btn");

let count = 0;

const onD20roll = () => {
    const roll = Math.floor(Math.random() * 20) + 1;
    count++;
    result.textContent = `Result: ${roll}`;
    helpCount.textContent = `helped you make ${count} decisions`;
}

const onCoinFlip = () => {
    const flip = Math.random() >= 0.5;
    count++;
    result.textContent = `Result: ${flip ? "Heads" : "Tails"}`;
    helpCount.textContent = `helped you make ${count} decisions`;
}

d20btn.addEventListener("click", onD20roll);
coinbtn.addEventListener("click", onCoinFlip);