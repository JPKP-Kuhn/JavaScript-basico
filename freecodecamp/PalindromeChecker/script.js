function isPalindrome(word){
    for (let i = 0; i < word.length/2; i++){
        if (word[i] !== word[word.length - 1 - i]){
            return false;
        }
    }
    return true;
}

function getInput(){
    const word = document.getElementById('text-input').value;
    if (word === ''){
        alert('Please input a value.');
        return;
    }
    const regex = /[^a-zA-Z0-9]/g;
    let newWord = word.replace(regex, '').toLowerCase();
    console.log(newWord);

    const result = document.getElementById('result');
    if (isPalindrome(newWord)){
        result.innerHTML = `${word} is a palindrome`;
        return;
    } else {
        result.innerHTML = `${word} is not a palindrome`;
        return;
    }
}