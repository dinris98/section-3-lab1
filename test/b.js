function squareNumber(num) {
  var squaredNumber = num*num;
  console.log('the result of squaring the number '+ num + 'is' + squaredNumber);
  return squaredNumber;

}
var squareButton= document.getElementById("square-button");
squareButton.addEventListener("click",function(){
  var num= document.getElementById("square-input").value;
  document.getElementById("solution").innerHTML =squareNumber(num);
});
function halfOf(num1){
  var halfOf = num1/2;
  console.log('the result of half the number '+ num1 + 'is' + halfOf);
  return halfOf;

}
var halfButton= document.getElementById("half-button");
halfButton.addEventListener("click",function(){
  var num1= document.getElementById("half-input").value;
  document.getElementById("solution1").innerHTML =halfOf(num1);
});
function percentOf(num3,num4) {
  var percent= (num3/num4)*100;
  console.log('the result of half the number '+ num3 + '/' + 'is' +percent);
  return percent;


}
var percentButton= document.getElementById("percent-button");
percentButton.addEventListener("click",function(){
  var num3= document.getElementById("percent1-input").value;
  var num4= document.getElementById("percent2-input").value;
  document.getElementById("solution2").innerHTML =percentOf(num3,num4);
});
function areaOf(num5) {
  var area= 3.14*(num5*num5);
  console.log('the result of half the number is' +area);
  return area;


}
var areaButton= document.getElementById("area-button");
areaButton.addEventListener("click",function(){
  var num5= document.getElementById("area-input").value;
  document.getElementById("solution3").innerHTML =areaOf(num5);
});
