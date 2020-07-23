/*
* Amazon
* Write a function which compresses a string "AAACCCBBD" to "A3C3B2D".
* Then write another function to get the original string from
* the compressed string.
*/

const stringCompression = string => {
    let arr = [];
    let count = 0;
    let char;

    for(let i = 0; i < string.length;) {
        char = string.charAt(i);
        arr.push(string.charAt(i));
        i++;
        count = 1;

        while (string.charAt(i) === char) {
            i++;
            count++;
        }

        if (count > 1) {
            arr.push(count);
        }
    }

    return arr.join('');
}

const stringDecompression = string => {
    let arr = [];
    let char;
    let num;

    for (let i = 0; i < string.length; i++) {
        if (Number.isNaN(parseInt(string.charAt(i)))) {
            char = string.charAt(i);
            arr.push(char);
        } else {
            num = parseInt(string.charAt(i));
            for (let j = 1; j < num; j++) {
                arr.push(char);
            }
        }
    }

    return arr.join('');
};

module.exports = {
    stringCompression,
    stringDecompression,
};
