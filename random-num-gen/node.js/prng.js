function getSalt() {
    const currentTime = new Date();
    let salt = Date.now() * currentTime.getMilliseconds() * currentTime.getSeconds() / (currentTime.getHours() >> 0); // >> to make sure the no. is always positive
    return salt | 0; // | to convert to int
}

function stringReverse(str) {
    const strArray = str.split("");
    const str1 = strArray.slice(0, strArray.length / 2).reverse();
    const str2 = strArray.slice(strArray.length / 2).reverse();
    return str1.join("") + str2.join("");
}

function randNum(len) {
    len = parseInt(len);
    let rNum;
    do {
        const salt = getSalt();
        const salt2 = getSalt();
        const reversedSalt = stringReverse(salt.toString());
        const reversedSalt2 = stringReverse(salt2.toString());
        const sum = (parseInt(reversedSalt) | 0) + (parseInt(reversedSalt2) | 0);
        rNum = sum.toString().slice(0, len);
    } while (rNum.toString().length !== len);
    return rNum;
}

console.log(randNum(5));