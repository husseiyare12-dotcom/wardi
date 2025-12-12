let num = 0;
const number = document.getElementById("number");
const emoji = document.getElementById("emoji");

const emojis = ["😀","🔥","🎉","🤲","✨","💯","🕊️","😊","🥰","🌟"];

document.getElementById("plus").addEventListener("click", () => {
    num++;
    updateUI();
});

document.getElementById("minus").addEventListener("click", () => {
    if(num > 0) num--;
    updateUI();
});

document.getElementById("reset").addEventListener("click", () => {
    num = 0;
    updateUI();
});

function updateUI() {
    number.textContent = num;

    if (num % 10 === 0 && num !== 0) {
        let index = (num / 10) - 1;
        emoji.textContent = emojis[index] || "🎉";
    } else {
        emoji.textContent = "";
    }
}