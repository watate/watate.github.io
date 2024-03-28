const inputText = document.getElementById("text-input");
const resultsText = document.getElementById("results");
const checkButton = document.getElementById("check-btn");

function isPalindrome(input) {
    const inputClean = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    if (inputClean.length === 1) return true;

    for (let i = 0; i < inputClean.length / 2; i++) {
        if (inputClean[i] !== inputClean[inputClean.length - i - 1]) {
            return false;
        }
    }
    return true;
}

function onCheckPalindrome(event) {
    event.preventDefault();
    const input = inputText.value;

    if (!input) {
        alert("Please input a value")
        return;
    }

    if (isPalindrome(input)) {
        resultsText.innerHTML = `<strong>${input}</strong> is a palindrome.`;
    } else {
        resultsText.innerHTML = `<strong>${input}</strong> is not a palindrome.`;
    }
}

checkButton.addEventListener("click", onCheckPalindrome);

