//Name Generator -Thanks to users on stack overflow-

navigator.serviceWorker && navigator.serviceWorker.register('sw.js').then(function(registration) {
  console.log('Excellent, registered with scope: ', registration.scope);
});

var a = ["Emerald", "Wet", "Old", "SWAG", "Black", "White", "Juicy", "Screaming", "Fluffy", "Dumb", "Annoying", "Oblivious", "Sticky", "Tired", "Awesome", "Funny", "Smart", "Brave", "Calm", "Jealous", "Blue", "Attractive", "Fancy", "Fit", "Long", "Handsome", "Beautiful", "Plump", "Purple", "Salty", "Red", "Green", "Famous", "Helpful", "Rich", "Small", "Jolly", "Blonde", "Emo"];
var b = ["shoe", "rabbit", "creeper", "block", "cereal", "animal", "fish", "tree", "mouse", "bottle", "bird", "brother", "gamer", "flower", "monkey", "ape", "spider", "star", "panther", "sister", "ginger", "dog", "grandma", "grandpa", "whale", "water", "chicken", "horse", "man", "rat", "book", "fan", "hand"];
var name = "nameQuick";
var hasCreate = 0;
var hasCreateCopy = 0;

function nameCreate() {
  "use strict";
  var rA = Math.floor(Math.random() * a.length);
  var rB = Math.floor(Math.random() * b.length);
  name = a[rA] + b[rB];
  hasCreate = 1;
  hasCreateCopy = 1;
  document.getElementById("nameGen").innerHTML = name;
  document.getElementById("button-copy").setAttribute("data-clipboard-target", "#nameGen");
  document.getElementById("button-copy").setAttribute("data-clipboard-text", name);
}

function addNumb() {
  "use strict";
  if (hasCreate === 1) {
    var numb = Math.floor(Math.random() * 99);
    var nameNumb = name + numb;
    document.getElementById("button-copy").setAttribute("data-clipboard-text", nameNumb);
    document.getElementById("nameGen").innerHTML = nameNumb;
  } else {
    document.getElementById("numbButton").classList.add('buttonRed');
    setTimeout(function() {
      document.getElementById("numbButton").classList.remove('buttonRed');
    }, 400);
  }
}
 
function copyClip() {
  "use strict";
  if (hasCreateCopy === 0) {
      document.getElementById("button-copy").classList.add('buttonRed');
      setTimeout(function() {
      document.getElementById("button-copy").classList.remove('buttonRed');
    }, 400);
  } else {
      document.getElementById("nameGen").classList.add('textGreen');
      setTimeout(function() {
      document.getElementById("nameGen").classList.remove('textGreen');
    }, 400);
  }
}
