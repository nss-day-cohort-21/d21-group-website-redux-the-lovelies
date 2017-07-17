let datingList = [
    {
        image: "img/stevebrule.jpg",
        name: " Dr. Steve Brule",
        age: " 46",
        description:" Dating is good for your health!"
    },
    {
        image: "img/Donny.jpg",
        name: " Donny",
        age: " 37",
        description:" When it comes to dating, I'm out of my element. Let's go bowling."
    },
    {
        image: "img/Urkel.jpg",
        name: " Steven \"Urk Man\" Urkel",
        age: " 19",
        description:" Did I do that?"
    },
    {
        image: "img/Lindsay.jpg",
        name: " Lindsay Lohan",
        age: " 28",
        description:" Dating me is like taking crack."
    },
    {
        image: "img/Lorraine.jpg",
        name: " Lorraine",
        age: " 64",
        description:" UGHHUGHGHGHUG"
    },
    {
        image: "img/Karlor.jpg",
        name: " Karlor the Barbarian",
        age: " 156",
        description:" My human name is Steve, but in the World of Warcraft I go by Karlor the Barbarian of the Forzen North."
    },
];

for (let i = 0; i < datingList.length; i++) {
	
	let datingImage = datingList[i].image;
	let datingName = datingList[i].name;
	let datingAge = datingList[i].age;
	let datingDesc = datingList[i].description;

    let datingCard = `<article class="card"><img src="${datingImage}" class="card-images">
	 <header class="card-header"><h1>Name:${datingName}</h1><h2>Age:${datingAge}</h2></header>
	 <section class="card-paragraph"><p><b>About Me:</b>${datingDesc}</p></section><br>
	 <button class="dateBtn"><a href="#" target="_blank">Check Me Out!</a></button>
	 </article>`;

	

	let datingHolder = document.getElementById("datingDisplay");
 	datingHolder.innerHTML += datingCard;

 	};
