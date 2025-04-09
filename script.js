const userInput = document.getElementById('text-input');
// ^related to the text-input from the html
const checkPalindromeBtn = document.getElementById('check-btn');
// ^related to the check-btn from the html
const resultDiv = document.getElementById('result');
// ^related to the result from the html

const checkPalindrome = (input) => {
    const originalInput = input;
// ^checkPalindrome
    if (input === '') {
        alert('Please input a value');
        return;
    }

    resultDiv.replaceChildren();
// ^replaceChildren
    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase(); // remove non alphanumeric characters
    let resultMessage = `<strong>${originalInput}</strong> ${
        lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
    } a palindrome`;

    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = resultMessage;
    resultDiv.appendChild(pTag);

    resultDiv.classList.remove('hidden'); 
}

userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkPalindrome(userInput.value);
        userInput.value = '';
    }
})

checkPalindromeBtn.addEventListener('click', () => {
    checkPalindrome(userInput.value);
    userInput.value = '';
});