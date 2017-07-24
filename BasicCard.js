function BasicCard (front, back) {
	this.front = front; 
	this.back = back;
}


BasicCard.prototype.printCard = function() {
	console.log("Front: " + this.front + ", " + "Back: " + this.back);
}

BasicCard.prototype.printFront = function() {
	console.log(this.front);
}
// var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// console.log(firstPresident.back); 

module.exports = BasicCard;