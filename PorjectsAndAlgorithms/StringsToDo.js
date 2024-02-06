function removeBlanks(str) {
    return str.split(" ").filter(word => word !== "").join("");
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c ")); 
console.log(removeBlanks("I can not BELIEVE it's not BUTTER")); 





function getDigits(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(Number(str[i]))) {
            result += str[i];
        }
    }
    return parseInt(result, 10);
}

console.log(getDigits("abc8c0d1ngd0j0!8")); 
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));




function acronym(str) {
    const words = str.split(/\W+/).filter(word => word !== ''); // Split by non-word characters (excluding underscores) and remove empty strings
    const acronymArr = words.map(word => word[0].toUpperCase());
    return acronymArr.join("");
}

console.log(acronym(" there's no free lunch - gotta pay yer way. ")); // Output: "TNFL-GPYW"
console.log(acronym("Live from New York, it's Saturday Night!")); // Output: "LFNYISN"







function countNonSpaces(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            count++;
        }
    }
    return count;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy")); 
console.log(countNonSpaces("Hello world !")); 



function removeShorterStrings(arr, minLength) {
    return arr.filter(str => str.length >= minLength);
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));

console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));
