const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');
let count = 0;

likeButton.addEventListener('click', () => {
  count++;
  likeCount.innerText = count + " " + "like(s)";
});