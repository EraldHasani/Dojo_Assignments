var LikesNr = [9,11,9]
var LikesParagraph = [
    document.getElementById("likescount1"), //9 likes
    document.getElementById("likescount2"), //11 likes
    document.getElementById("likesCount3"), //9 likes
]
function addLike(postNr){
    likesParagraph[postNr].innerText = LikesNr[postNr]++  + " likes"
}
