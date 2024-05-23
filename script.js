document.getElementById('check-btn').addEventListener('click', function() 
{
    const textInput = document.getElementById('text-input').value;
    const resultDiv = document.getElementById('result');

    if (textInput.trim() === '') {
        alert('Please input a value');
        return;
    }

    const originalText = textInput;
    const cleanedText = textInput.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');

    if (cleanedText === reversedText) {
        resultDiv.textContent = `${originalText} is a palindrome`;
    } else {
        resultDiv.textContent = `${originalText} is not a palindrome`;
    }
});
