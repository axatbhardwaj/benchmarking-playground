//taking salt from the system time
function getSalt() {
    let salt = Date.now() * new Date().getMilliseconds() * new Date().getSeconds() / (new Date().getHours());
    salt = parseInt(salt);
    //console.log(salt);
    return salt;
}

function stringReverse(str) {
    let str1 = str.split("").slice(0, str.length / 2);
    let str2 = str.split("").slice(str.length / 2, str.length);
    str1 = str1.reverse();
    str2 = str2.reverse();
    return str1.join("") + str2.join("")
}

//function to create the random number without using any library or inbuilt function
function randNum(len) {
    len = parseInt(len);
    let rNum = 0;
    do {
        let salt = getSalt();
        let salt2 = getSalt();
        salt = stringReverse(salt.toString());
        salt2 = stringReverse(salt2.toString());
        salt = parseInt(salt);
        // console.log(salt);
        salt2 = parseInt(salt2);
        // console.log(salt2);
        rNum = salt + salt2;
        rNum = rNum.toString();
        rNum = rNum.slice(0, len);
        //console.log(rNum);
    } while (rNum.toString().length !== len);
    return rNum;
}

console.log(randNum(5));