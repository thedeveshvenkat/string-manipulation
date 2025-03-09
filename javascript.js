const button = document.querySelector("#button");
const reverseButton = document.querySelector("#reverseButton");
const text = document.querySelector("input");
const newText = document.querySelector(".empty");
const palindromeButton = document.querySelector("#palindromeButton");

newText.textContent = "";
const para = document.createElement("p");

button.addEventListener("click", () => {
    let string = text.value;
    text.value = "";
    text.focus();
    para.textContent = "";
    for (let i = 0; i < 3; i++) {
        para.textContent += string + " ";
        newText.append(para);
    }
});

function reverseString(string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string.charAt(i);
    }
    return reversedString;
}

reverseButton.addEventListener("click", () => {
    let string = text.value;
    text.value = "";
    text.focus();
    para.textContent = "";
    let reversedString = reverseString(string);
    para.textContent += reversedString;
    newText.append(para);
});

palindromeButton.addEventListener("click", () => {
    let string = text.value;
    let string2 = string.replace(/\W/g, "");
    text.value = "";
    text.focus();
    para.textContent = "";
    let reversedString = reverseString(string2);
    if (string2 === reversedString) {
        para.textContent = `${string} is a palindrome!`;
    } else {
        para.textContent = `${string} is not a palindrome!`;
    }
    newText.append(para);
});
