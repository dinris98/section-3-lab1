var btn = document.querySelector('button');

btn.onclick = function(){
  var x = document.getElementById('mx').value;
  var y = document.getElementById('my').value;
  var z = Number(x)+ Number(y);
  document.getElementById('result').textContent='result is '+z;
}
