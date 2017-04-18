// everything within one function to separate variables and functions
//i make from the window's
$(document).ready(function() {

	// generates the random number
	var Random = Math.floor(Math.random() * 101+1);

	/* links the random number id to the var Random that generates the number.
	the .text() feature is better for this becasue it replaces text within
	an element where .html() will add text to an element. */
	$("#randomNumber").text(Random);

	console.log(Random);

	// i know this isnt dry, dont yell at me
	var rub1 = Math.floor(Math.random() * 19+1);
	var rub2 = Math.floor(Math.random() * 8+1);
	var rub3 = Math.floor(Math.random() * 17+1);
	var rub4 = Math.floor(Math.random() * 5+1);

	//incase anyone knows about console and wants to cheat :p
	console.log(rub1, rub2, rub3, rub4);

	/* initially defining and setting the score and wins/losses to 0. */
	var userScore = 0;
	var wins = 0;
	var losses = 0;

	/* connecting the win and loss vars to the ids in html. This
	is where .text is better because i set those variables initially
	to 0. */
	$("#winTally").text(wins);
	$("#lossTally").text(losses);


	//reset...pretty much redoing what happens at the beginning
	function reset() {

		Random = Math.floor(Math.random() * 11+31);

		console.log(Random);

		$("#randomNumber").text(Random);

		var rub1 = Math.floor(Math.random() * 11+1);
		var rub2 = Math.floor(Math.random() * 8+1);
		var rub3 = Math.floor(Math.random() * 14+1);
		var rub4 = Math.floor(Math.random() * 5+1);
		userScore = 0;
		$("#yourScore").text(userScore);
	};

	//adding the win and running the reset function after

	function addWin() {
		alert("You Win!!!");
		console.log("win");
		wins++;
		$("#winTally").text(wins);
		reset();
	};

	//adding the loss running the reset function after

	function addLoss() {
		alert("You Lose.");
		console.log("loss");
		losses++;
		$("#lossTally").text(losses);
		reset();
	};

	/* logic for when the user presses one of the crystals. first it changes
	the user score to equal the value of the gem, then console logs it, 
	then adds it to the user score with the .text(). same is repeated for the
	rest of the rubs */ 
	$("#rub1").on("click", function() {
		userScore = userScore + rub1;
		console.log("New userScore= " + userScore);
		$("#yourScore").text(userScore);

		if(userScore == Random) {
			addWin();
		}
		else if(userScore > Random) {
			addLoss();
		}
	});

	$("#rub2").on("click", function() {
		userScore = userScore + rub2;
		console.log("New userScore= " + userScore);
		$("#yourScore").text(userScore);

		if(userScore == Random) {
			addWin();
		}
		else if(userScore > Random) {
			addLoss();
		}
	});

	$("#rub3").on("click", function() {
		userScore = userScore + rub3;
		console.log("New userScore= " + userScore);
		$("#yourScore").text(userScore);

		if(userScore == Random) {
			addWin();
		}
		else if(userScore > Random) {
			addLoss();
		}
	});

	$("#rub4").on("click", function() {
		userScore = userScore + rub4;
		console.log("New userScore= " + userScore);
		$("#yourScore").text(userScore);

		if(userScore == Random) {
			addWin();
		}
		else if(userScore > Random) {
			addLoss();
		}
	});

});