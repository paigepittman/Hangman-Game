var wordChoices = ["han solo", "princess lei", "millenium falcon", "yoda", "admiral ackbar", "obi wan kenobi", "jabba the hutt", "boba fett", "stormtroopers", "tatooine", "darth vadar", "tarkin", "luke skywalker", "lightsaber"];

var isGameStarted = false; 

var randomWord = "";

var random = "";

var spaces = [];

var letters = [];

var spacesJoined = "";

document.onkeyup = function() {

if (isGameStarted === false) {

random = Math.floor(Math.random() * wordChoices.length)

randomWord = wordChoices[random]

console.log(randomWord);

for (var i = 0; i < randomWord.length; i++) {

	spaces.push("_");
	letters.push(randomWord[i])

	}
	spacesJoined = spaces.join(" ");
console.log(spacesJoined);
console.log(letters);

isGameStarted = true; 

 }


}