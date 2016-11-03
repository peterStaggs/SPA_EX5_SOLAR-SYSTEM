var planets = ["mercury", "venus", "earth", "mars", 
"jupiter", "saturn", "uranus", "neptune"];

var words = ["The", "early", "bird", "might", "get", "the", 
"worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

//Use a forEach method in place of a for loop. It's argument, input, represents each index. 
//use += to add each index and move to the next. If you just use "=", the result will be Neptune, because each
//index will get hopped over until it reaches the last one. 

planets.forEach(function(input) {
	document.getElementById("planets").innerHTML += "<ul>" + input + "</ul>";
})


function toCaps(str)
{
  return str.replace(/^\w/g, function(txt) { 
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});
}

var caps = planets.map(toCaps); 
	document.getElementById("capPlanets").innerHTML += "<ul>" + caps + "</ul>";


var filterE = planets.filter(function(planets) {
    return /e/.test(planets);
});

console.log(filterE);

function red (value) {
	return words.join(" "); 
}

let reduced = words.reduce(red) + ".";

var words = ["The", "early", "bird", "might", "get", "the", 
"worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

document.getElementById("capPlanets").innerHTML += "<ul>" + reduced + "</ul>";





