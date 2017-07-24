function ClozeCard (text, cloze) {
	var textToLower = text.toLowerCase();
	var clozeToLower = text.toLowerCase();

	if (!textToLower.includes(clozeToLower)) {
		console.log("ERROR: cloze-deletion does ot appear within full text -- <' + cloze + '>'");
		return;
	}

	this.fullText = text; 
	this.cloze = cloze;
	this.partial = text.replace(cloze, "__________");
}

ClozeCard.prototype.printCloze = function() {
		console.log(this.cloze);
}
ClozeCard.prototype.printText = function () {
		console.log(this.fullText);
}
ClozeCard.prototype.printPartial = function() {
		console.log(this.partial);
}

var firstQuestion = new ClozeCard("Washington was first president", "Washington");

firstQuestion.printCloze();
firstQuestion.printText();
firstQuestion.printPartial();

module.exports = ClozeCard;

