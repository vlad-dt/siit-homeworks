function play() {
	let arr = ["rock", "paper", "scissors"];

	let min = 0;
	let max = 2;

	let computer = Math.floor(Math.random() * (max - min + 1)) + min;
	let user = Math.floor(Math.random() * (max - min + 1)) + min;
	
	console.log("Computer choice: " + arr[computer]);
	console.log("User choice: " + arr[user]);
	
	if(arr[computer] == "rock" && arr[user] == "scissors"){
		console.log("Computer wins!");
	}
	else if (arr[user] == "rock" && arr[computer] == "scissors"){
		console.log("User wins!");
	}
	else if (arr[computer] == "scissors" && arr[user] == "paper"){
		console.log("Computer wins!");
	}
	else if (arr[user] == "scissors" && arr[computer] == "paper"){
		console.log("User Wins!");
	}
	else if (arr[computer] == "paper" && arr[user] == "rock"){
		console.log("Computer wins!");
	}
	else if (arr[user] == "paper" && arr[computer] == "rock"){
		console.log("User wins!");
	}
	else if (arr[computer] == arr[user]){
		console.log("It's a draw!");
	}
	
}

play();