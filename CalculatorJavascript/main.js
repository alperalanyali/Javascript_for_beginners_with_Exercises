var save = document.getElementById('forms');


function add(){
  save.elements[2].value =   Number(save.elements[0].value) +   Number(save.elements[1].value);
}
function substraction(){
  save.elements[2].value =   Number(save.elements[0].value) -   Number(save.elements[1].value);
}
function multi(){
  save.elements[2].value =   Number(save.elements[0].value) *   Number(save.elements[1].value);
}
function divide(){
  if(Number(save.elements[1].value) == 0){
    alert("Division by 0 is not allowed!!");
    save.elements[1].value = "Error invalid value";
  }
  save.elements[2].value =   Number(save.elements[0].value) /   Number(save.elements[1].value);
}
function remaind(){
  save.elements[2].value =   save.elements[0].value %   save.elements[1].value;
}
