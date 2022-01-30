const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

let keys = Object.keys(MORSE_TABLE);
let decodeKeys = [];
let values = Object.values(MORSE_TABLE);
values.push(' ');


function decode(expr) {
    let result = [];
    let arr = expr.split('');
    let finalArr = [];
    for (let i = 0; i < arr.length; i+11) {
        finalArr.push(arr.splice(i, 10).join(''));
    }

    for (let i = 0; i < keys.length; i++) {
        let letter = keys[i].split('');
        letter = letter.map((el) =>  {return (el == '.') ? 10 : (el == '-') ? 11 : el});
        letter = letter.join('');
        letter = letter.split('');
        while (letter.length < 10) {
            letter.unshift('0');
        }
        letter = letter.join('');
        decodeKeys.push(letter);
    }
    decodeKeys.push('**********');
    for (let i = 0; i < finalArr.length; i++) {
        for(let j = 0; j < decodeKeys.length; j++) {
            for (let k = 0; k < values.length; k++) {
                if (finalArr[i] == decodeKeys[j] && j == k ) {
                    result.push(values[k]);
                } else {
                    continue;
                }
            }
        }
    }
    return result.join('');;
}

module.exports = {
    decode
}