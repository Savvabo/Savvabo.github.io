//                      2       A function, which returns reversed string.

function reverseString(string) {
    return (string === '') ? '' : reverseString(string.substr(1)) + string.charAt(0);
}

console.log("A function which returns reversed string:    ");
console.log(reverseString("abc"));
console.log("   ");

//                      3       A function, which prints the stair picture of size n
console.log("A function which prints the stair picture of size n:    ");

function printStairs(n) {
    for (let i = 1; i <= n; i++) {
        console.log(('').repeat(n - i).concat(('#').repeat(i)));
    }
}

printStairs(3);
console.log("   ");


// //                      4       A function which returns total sum of a range

function sumRange(arr) {
    const max = Math.max(arr[0], arr[1]);
    const min = Math.min(arr[0], arr[1]);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return (sum);
}

console.log("A function, which returns total sum of a range:    ");
console.log(sumRange([-1, 3]));
console.log("   ");


//                      5       Write a function, which returns the smallest of three numbers.
console.log("A function, which returns the smallest of three numbers:    ");

function min(a, b, c) {
    return console.log(Math.min(a, b, c));
}

min(9, 6, 87);


//                      6       A function which, prints the pyramid picture of size n
console.log("   ");
console.log("A function which, prints the pyramid picture of size n:    ");

function printPyramid(n) {
    for (let i = 0; i < n; i++)
        console.log(" ".repeat(n - i) + "#".repeat(2 * i + 1));
}

printPyramid(3);
console.log("   ");

//                      7       A function, which transforms first and last letter to uppercase (use built in string’s method).
let phrase = 'mamo, zlipy meni snizhku';
let uppercaseSome = phrase.charAt(0).toUpperCase() + phrase.substr(1) + phrase.charAt(phrase.length - 1).toUpperCase();
console.log('A function which transforms first and last letter to uppercase (use built in string’s method): ');
console.log(uppercaseSome);
console.log("   ");


//                      8       A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive.


const matchingWords = "ironman, cursor, ostap";
const oneWord = "ostap";
const anotherWord = " Ostap";

function cursorCheck(word) {
    if (matchingWords.includes(word)) {
        console.log("true");
    } else {
        console.log("false");
    }
}

console.log('A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive: ');
cursorCheck(oneWord);
cursorCheck(anotherWord);
console.log("   ");


//                      9       A function, which returns a string with all letters in uppercase (without built in string’s method). The function supports only english alphabet.
let onePhrase = 'mamo, zlipy meni snizhku';
let uppercase = onePhrase.toUpperCase();
console.log('A function which returns a string with all letters in uppercase (without built in string’s method). The function supports only english alphabet. ');
console.log(uppercase);
console.log("   ");


//                      10      A function, which removes duplication of letters in string. The function must be case-insensitive.
function removeDuplicationLetters(string) {
    let unique = '';
    for (let i = 0; i < string.length; i++) {
        if (string.lastIndexOf(string[i]) === string.indexOf(string[i])) {
            unique += string[i];
        }
    }
    return unique;
}

console.log('A function, which removes duplication of letters in string. The function must be case-insensitive: ');
console.log(removeDuplicationLetters('mamo, zlipy snizhku'));
console.log(removeDuplicationLetters('Hello I am Iron Man'));
console.log("   ");


//                      11      A function, that when given a number n returns the n-th number in the Fibonacci Sequence.
function fibonacci(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n]
}

console.log('A function, that when given a number n returns the n-th number in the Fibonacci Sequence: ');
console.log(fibonacci(10));

