var tetrisCanvas = document.getElementById('tetris');
var score = 0;
var blocks = []; // Array of blocks to keep track of all of the shapes that are falling 
var KEY_MAPPING = {
    39: "right",
    40: "down",
    37: "left",
    38: "up"
   };

// I, J, L, O, S, T, Z blocks
function Block (type) {
    this.type = type;
    this.getInfo = function() {
        return this.type + '-block';
    };
}

// Listen for arrow key presses
document.onkeydown = function(k){ 

	var keyValue;
	switch(k.which) {
		case 39: keyValue = KEY_MAPPING[39];
				break;
		case 40: keyValue = KEY_MAPPING[40];
				break;
		case 37: keyValue = KEY_MAPPING[37];
				break;
		case 38: keyValue = KEY_MAPPING[38];
				break;
		default: 
				keyValue = undefined;
	}

	console.log("Key value is " + keyValue);

};


// If you do an arrow key to the left or right, rotate the shape 90 degrees in that direction. 
// If you do an arrow key down, move the shape all the way down to the final spot on the board that's available (if time)
// The objects will constantly be falling until they reach their final resting place or until you run out of objects

// Let's start with just the L block

