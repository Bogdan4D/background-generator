var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var c1;
var c2;

function setInputColors() {	
	var style = getComputedStyle(body).background;
	var colorMatch = style.match(/\((\d+),\s*(\d+),\s*(\d+)\)/g);
	var match1 = colorMatch[0];
	var match2 = colorMatch[1];
	var rgbValues1 = match1.match(/\d+/g);
	var rgbValues2 = match2.match(/\d+/g);
	var nums1 = rgbValues1.map(function(str) {
		return parseInt(str); });
	var nums2 = rgbValues2.map(function(str) {
		return parseInt(str); });
	var r1 = nums1[0], g1 = nums1[1], b1 = nums1[2];
	var r2 = nums2[0], g2 = nums2[1], b2 = nums2[2];
	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}
	function rgbToHex(r, g, b) {
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}
	var hex1 = rgbToHex(r1,g1,b1);
	var hex2 = rgbToHex(r2,g2,b2);

	color1.value = hex1;
	color2.value = hex2;
}

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", "
		+ color2.value
		+ ")";

		css.textContent = body.style.background + ";";
}

var randomBtn = document.createElement("button");
var node = document.createTextNode("Random Background Colors");
randomBtn.appendChild(node);
body.insertBefore(randomBtn, body.lastChild);
randomBtn.setAttribute("class", "random");

function randomColor(e) {
	c1 = "rgb(" + Math.floor((Math.random() * 255) + 1) 
		  + " " + Math.floor((Math.random() * 255) + 1) 
		  + " " + Math.floor((Math.random() * 255) + 1)
		  + ")";
	c2 = "rgb(" + Math.floor((Math.random() * 255) + 1) 
		  + " " + Math.floor((Math.random() * 255) + 1) 
		  + " " + Math.floor((Math.random() * 255) + 1)
		  + ")";
	body.style.background = 
		"linear-gradient(to right, " 
		+ c1 
		+ ", "
		+ c2
		+ ")";
	setInputColors();
	setGradient();
	
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("load", setInputColors);

window.addEventListener("load", setGradient);

randomBtn.addEventListener("click", randomColor);
