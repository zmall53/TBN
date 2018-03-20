   var a = ["Small", "Blue", "Ugly"];
   var b = ["Bear", "Dog", "Banana"];


   var rA = Math.floor(Math.random()*a.length);
   var rB = Math.floor(Math.random()*b.length);
   var name = a[rA] + b[rB];
   document.getElementById("nameGen").innerHTML = name;
