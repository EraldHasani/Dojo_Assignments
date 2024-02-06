
function pushFront(arr, element) {
    arr.splice(0, 0, element);
    return arr;
}

console.log(pushFront([5,7,2,3], 8)); 
console.log(pushFront([99], 7));   









function popFront(arr) {
    const removed = arr.shift();
    console.log(removed + " returned, with " + arr + " printed in the function");
    return removed;
}

console.log(popFront([0,5,10,15])); 
console.log(popFront([4,5,7,9]));   









function insertAt(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}

console.log(insertAt([100,200,5], 2, 311)); 
console.log(insertAt([9,33,7], 1, 42));    










function removeAt(arr, index) {
    const removed = arr.splice(index, 1)[0];
    console.log(removed + " returned, with " + arr + " printed in the function");
    return removed;
}

console.log(removeAt([1000,3,204,77], 1)); 
console.log(removeAt([8,20,55,44,98], 3)); 











function swapPairs(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}

console.log(swapPairs([1,2,3,4]));        
console.log(swapPairs(["Brendan", true, 42]));








function removeDupes(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            removeAt(arr, i); 
            i--; 
        }
    }
    return arr;
}
function removeAt(arr, index) {
    arr.splice(index, 1);
}

console.log(removeDupes([-2,-2,3.14,5,5,10]));  
console.log(removeDupes([9,19,19,19,19,19,29])); 
