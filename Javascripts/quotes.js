let quotes = ["Your family only loves you because they have to.", "You only get one body and you've already ruined it.", "Before you can love someone else you have to learn to love yourself so there's no chance of that hapening.", "Some people just aren't going to find love.", "I would love you if you were pizza.", "Do less, sleep more.", "'Expectations are resentments in the making. I have learned to have no or low expectations on things that are out of my control (everything). This way, I'm usually pleasantly surprised.' - Anne Lamott", "Listen to your heart. When you hear it stop beating, seek medical attention."]

let postArea = document.getElementById("quotes");

setInterval(function() {
  let randomNum = Math.floor(Math.random()*quotes.length);
  postArea.innerHTML = `<p>${quotes[randomNum]}</p>`;
}, 5000);
