function sorting(arr){
  display(arr);
  document.write("<br/>");
  for (var i = 0; i < arr.length; i++) {
    for(var j= i+1;j< arr.length;j++){
      if(arr[i]>arr[j]){
        save = arr[j];
        arr[j] = arr[i];
        arr[i] = save;
      }
    }
  }
  display(arr);
}
function display(arr){
    //document.write(arr);
    for (var i = 0; i < arr.length; i++) {
      document.write("The value at position " +i + " is "+arr[i] +"<br/>");
    }
}
arr = [107,22,1,44,23,21];

sorting(arr);
