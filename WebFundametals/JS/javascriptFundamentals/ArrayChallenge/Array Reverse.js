function reverse(arr) {
    reversedArr = [];
for(i=arr.length-1; i>= 0 ; i--){
    reversedArr.push(arr[i]);
}

    return reversedArr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
