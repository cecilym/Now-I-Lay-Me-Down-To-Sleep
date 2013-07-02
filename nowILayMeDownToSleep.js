var me = {
  dead : false
};

var theLord = {
	heard : ""
};

var lay = function(noun, purpose) {
	noun.position = "down";
	var day = new Date();
	var now = day.getTime();
	var purposeChop = purpose.toLowerCase();

	if(purposeChop === "to sleep"){
		return (noun + noun.position + purpose + ", " + noun.awake + now);
	}
};

var prayer = function(person, action, purpose, requestAlive, requestDead) {
	action(person, purpose);

	if(person.dead) {
		theLord.heard = requestDead;
	} else {
		theLord.heard = requestAlive;
	}
	return "Amen";
};

prayer(me, lay, "to sleep", "my soul to keep", "my soul to take"); 








