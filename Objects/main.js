/*
var c = new Object();
c.dinner = "empty";
c.hours = 12;
c['year'] = 2020;

for(name in c){
  document.write(name+",<br/>");
}*/
//document.write(c['hours']);

/*var c = {
  dinner:'empty',
  hours:12,
  year:2020

};
document.write(c['hours']);*/

/*function name(d,h,y){
  this.dinner = d;
  this.hours = h;
  this.year = y;
}
var c = new name('meatballs',23,2020);
document.write(c.hours)*/
/*
var c = {
  dinner:'empty',
  hours:12,
  year:2020,
  displayYear: function(){
    document.write(this.year+" " );
  },
  displayHours: function(){
    document.write(this.hours + " ");
  }
};

c.displayYear();
c.displayHours();
*/

//document.write(Math.sqrt(Math.random(Math.PI),30)+"<br/>");


var time = new Date();
document.write(time.getFullYear());
