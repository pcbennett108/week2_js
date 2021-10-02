var tipRate;
var shout = "";
var fulltxt = "";
function tipCheck(price, tip) {
  tipRate = (tip / price) * 100;
  //return tipRate;
  if (tipRate < 5) {
    shout = "You are an awful tipper!";
  } else if (tipRate >= 5 && tipRate <= 10) {
    shout = "You are an OK tipper!";
  } else if (tipRate > 10 && tipRate <= 20) {
    shout = "You are a good tipper!";
  } else if (tipRate > 20) {
    shout = "You are a great tipper!";
  }
}
tipCheck(40, 6);
fulltxt = tipRate + "% " + shout;
console.log(fulltxt);
