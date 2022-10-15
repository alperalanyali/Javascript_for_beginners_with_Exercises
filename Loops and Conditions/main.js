/* while and do while
var a = 100;
var b = 1000;
while(a<=b){
    a+=1;
  document.write(a);
  document.write("<br/>");
}*/

/* for loop
var a = 10;
var b = 10000;
var arr = new Array(3);
arr = [34,43,333];
for (var a = 0; a < arr.length; a++) {
  document.write(arr[a]);
  //document.write(a);
  document.write("<br/>");
  for (var i = 0; i < arr.length; i++) {
    document.write(arr[a]*b+1);
    document.write("<br/>");
  }
}
*/

var arr = [1,2,3];
for(a in arr){
  document.write(a+"<br/>");
}
