//Name Generator -Thanks to users on stack overflow-

var a = ["Emerald", "Wet", "Old", "SWAG", "Black", "White", "Juicy", "Screaming", "Fluffy", "Dumb", "Annoying", "Oblivious", "Sticky", "Tired", "Awesome", "Funny", "Smart", "Brave", "Calm", "Jealous", "Blue", "Attractive", "Fancy", "Fit", "Long", "Handsome", "Beautiful", "Plump", "Purple", "Salty", "Red", "Green", "Famous", "Helpful", "Rich", "Small", "Jolly", "Blonde", "Emo"];
var b = ["shoe", "rabbit", "creeper", "block", "cereal", "animal", "fish", "tree", "mouse", "bottle", "bird", "brother", "gamer", "flower", "monkey", "ape", "spider", "star", "panther", "sister", "ginger", "dog", "grandma", "grandpa", "whale", "water", "chicken", "horse", "man", "rat", "book", "fan", "hand"];
var name = "nameQuick";
var hasCreate = 0;

function nameCreate() {
  var rA = Math.floor(Math.random() * a.length);
  var rB = Math.floor(Math.random() * b.length);
  name = a[rA] + b[rB];
  document.getElementById("nameGen").innerHTML = name;
  hasCreate = 1;
}

function addNumb() {
  if (hasCreate == 1) {
    var numb = Math.floor(Math.random() * 99);
    var nameNumb = name + numb;
    document.getElementById("nameGen").innerHTML = nameNumb;
  } else {
    document.getElementById("numbButton").classList.add('buttonRed');
    setTimeout(function() {
      document.getElementById("numbButton").classList.remove('buttonRed');
    }, 400);
  }
}
