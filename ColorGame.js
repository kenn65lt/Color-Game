var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector('#reset');
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');

//Easy Button
easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove('selected');
	easyBtn.classList.add('selected');
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});
// Hard Button
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove('selected');
	hardBtn.classList.add('selected');
	numSquares =6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	messageDisplay.textContent= "";
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		 }
});

// Reset Button
resetBtn.addEventListener("click", function(){
	//Generate all new colors
	colors = generateRandomColors(numSquares);
	//Picka a new random color from array
	pickedColor = pickColor();
	//Change color display
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style. background = colors[i];
	}
	h1.style.background = "steelblue";
});
                      
colorDisplay.textContent = pickedColor;

//Colors
for(var i =0; i< squares.length; i++){
	//add intial colors to squares
	squares[i].style.background = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//Grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to picked color
		if(clickedColor === pickedColor){
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			messageDisplay.textContent = "Correct";
			resetBtn.textContent = "Play Again?"

		} else {
			this.style.background = "#232323"
			messageDisplay.textContent = "Try Again"
		}
	})
}

function changeColors(color){
	//Loop through all squares
	for(var i =0; i< colors.length; i++){
		//change each colors to match given color
		squares[i].style.background = color;
	}
	
}

function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}

function generateRandomColors(num) {
	// make an array 
	var arr = []
	//add num random colors to array
	// Repeat num times
	for( var i = 0; i < num; i++){
		//Get a random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

//Random Color
function randomColor() {
// pick a "(red" from 0-255
var r = Math.floor(Math.random() *256); 
// pick a "green" from 0 -255
var g = Math.floor(Math.random() *256); 
//Pick a "blue" from 0 -255
var b = Math.floor (Math.random() *256); 
return "rgb(" + r + ", " + g + ", " + b +")";

}