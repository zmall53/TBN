//Name Generator -Thanks to users on stack overflow-

var a = ["Emerald", "Wet", "Old", "SWAG", "Black", "White", "Juicy", "Screaming", "Fluffy", "Dumb", "Annoying", "Oblivious", "Sticky", "Tired"];
var b = ["shoe", "rabbit", "boy", "girl", "creeper", "block", "cereal", "animal", "fish", "tree", "mouse", "bottle"];
var name = "nameQuick";
var hasCreate = 0;

function nameCreate() {
    var rA = Math.floor(Math.random()*a.length);
    var rB = Math.floor(Math.random()*b.length);
    var name = a[rA] + b[rB];
    document.getElementById("nameGen").innerHTML = name;
    var hasCreate = 1;
}

function addNumb() {
    if (hasCreate = 1) {
        var numb = Math.floor(Math.random() * 99);
        var nameNumb = name + numb;
        document.getElementById("nameGen").innerHTML = nameNumb;
    }
}

//Reload
function pageReload() {
    location.reload();
}
