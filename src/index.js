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

function decode(expr) {
    // write your solution here
    let inArray = [];
    let arrayPieceString = expr.split([]); 
    let length = arrayPieceString.length/10;
    let arrayOfElementSymbol = [];
    let arrayElement = [];
    let result = '';
    let value = '';

    for(let i = 0; i < length; i++){
        let str = arrayPieceString.slice(0, 10).join([]);
        for(let k = 0; k < 10; k++){
            arrayPieceString.shift();
        }
        if (str == '**********') {
            str = ' ';
        }
        inArray.push(str);
    }
    
    for(let key of inArray){
        key = key.split([]);
        for(let b = 0; b < 5; b++){
            let element = key.slice(0, 2).join('');
            for(let i = 0; i < 2; i++){
                key.shift();
            }

            if(element == 10 || element == 11){
                key.push(element);
            }  else if (element == ' '){
                key.push(element);
            }
        }
        arrayOfElementSymbol.push(key);
    }
    inArray = null;

    arrayOfElementSymbol.forEach(element => {
        element.forEach(key => {
            let a = element.shift(key);
            if (a == '10') {
                key = '.';
            } else if (a == '11'){
                key = '-';
            } else if (a = ' ') {
                key = ' ';
            }
            element.push(key);
        });
    });
    
    for(let i = 0; i < arrayOfElementSymbol.length; i++){
        let r = arrayOfElementSymbol[i].join('');
        arrayElement.push(r);
    }
    arrayOfElementSymbol = null;

    for (let element of arrayElement){
        for (let key in MORSE_TABLE){
            if (element == key){
                value = MORSE_TABLE[key];
            } else if (element == ' ') {
                value = element;
            }
        }
        result += value;
    }

    return result;
}

module.exports = {
    decode
}