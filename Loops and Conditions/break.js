var  a= 5;
var b = 50;
while(a<=b){

  document.write(a+"<br/>");
  a++;
  if(a % 3 == 0){
    a++;
    continue;
  }
}
