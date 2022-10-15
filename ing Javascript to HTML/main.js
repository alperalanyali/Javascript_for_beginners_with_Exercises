var str1 = "<h3>This is my second text</h3>";
document.write(str1);
document.write(12343545);
//alert("Hi");
//var answer = prompt("Are you older than 20?");
//console.log(answer);
//var question = "Are you older than 20?";
//var answer = confirm(question);
//if(answer == true){
//  document.write("<br/><br/>You answer is yes");
//} else {
//  document.write("<br/><br/>Your answer is no")
//}

//var p = document.getElementsByTagName('h3');
//p[0].innerHTML = "afassd";
var p = document.getElementById("container");
var txt = document.createTextNode("Deneme 1 2 3 ");
var h = document.createElement("h2");
var replace = false;
h.appendChild(txt);
function change(){
  /* if(visible== true){
    p.removeChild(h);
    visible = false;
  } else {
      p.appendChild(h);
      visible = true;
  }*/
  //p.removeChild(document.getElementById('123'));
  if(replace == false){
      p.replaceChild(h,document.getElementById('123'));
  } else {
    p.replaceChild(document.getElementById('123'),h);
  }
}

function create(){
  p.appendChild(h);
}

function change2(){
  var txt1 = "Detrtfg";
  var ted = document.createElement("h3");
  p.replaceChild(ted,document.getElementById("123"));
}

function remove(){
  p.removeChild(h);
}
