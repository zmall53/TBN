//Name Generator -Thanks to users on stack overflow-
function nameCreate() {
var a = ["Emerald", "Wet", "Old", "SWAG", "Black", "White", "Juicy", "Screaming", "Fluffy", "Dumb", "Annoying", "Oblivious", "Sticky", "Tired"];
var b = ["shoe", "rabbit", "boy", "girl", "creeper", "block", "cereal", "animal", "fish"];


var rA = Math.floor(Math.random()*a.length);
var rB = Math.floor(Math.random()*b.length);
var numb = Math.floor(Math.random() * 99);
var name = a[rA] + b[rB] + numb;
document.getElementById("nameGen").innerHTML = name;
}

//Reload
function pageReload() {
    location.reload();
}
