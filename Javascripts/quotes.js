let quotes = ["Your family only loves you because they have to.", "You only get one body and you've already ruined it.", "Before you can love someone else you have to learn to love yourself so there's no chance of that hapening.", "Some people just aren't going to find love.", "I would love you if you were pizza.", "The first step towards failure is trying.",]

let postArea = document.getElementById("quotes");

setInterval(function() {
  let randomNum = Math.floor(Math.random()*4);
  postArea.innerHTML = quotes[randomNum];
}, 3000);
