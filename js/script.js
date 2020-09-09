var yeild = 50;
var rain = "*";
var output = x;
var x = yeild;

var rainfall = prompt("How many inches of rain fell?");
console.log(rain.repeat(rainfall));
if (rainfall >= 20) {
  output = yeild * 0.9;
} else if (rainfall < 10) {
  output = yeild * 0.8;
} else {
  output = yeild;
}
var fertilizer = prompt("Did you use fertilizer?");
if (fertilizer === "yes") {
  var type = prompt("Did you use premium or regular fertilizer?");
  if (type === "premium") {
    console.log("The yeild should be " + output * 1.15 + " bushels per acre.");
  } else if (type === "regular") {
    console.log("The yeild should be " + output * 1.1 + " bushels per acre.");
  }
} else {
  console.log("The yeild should be " + output + " bushels per acre.");
  // } else {
  //   console.log("The yeild should be " + output + " bushels per acre.");
}
//var type = prompt("Did you use premium or regular fertilizer?");
//if ((type = premium)) {
//console.log(yeild * 1.15);
//}
//console.log("The yeild should be " + output + " bushels per acre.");
