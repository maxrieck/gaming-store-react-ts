// function add(num1, num2) {
//     return sum = num1 + num2;     
// }

// console.log(add(2, 3))

const numbers = [5,9,3,7,8]

const getLargest = (numbers) => {
    return Math.max(...numbers)
}

console.log(getLargest(numbers));

//function that accepts string
//create variable of vowels
//turn the string into and array
//filter array for vowels
//return index count for new array

const word = "athsnanfkawipfnargag"

function countVowels(word) {
    const vowels = ['a','e','i','o','u'];

    return word.toLowerCase().split('').filter(letter => vowels.includes(letter)).length;
   
}


console.log(countVowels(word))
