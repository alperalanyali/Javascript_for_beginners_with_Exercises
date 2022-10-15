function fi(num){
  if(num == 1)
    return 0;

  if(num == 2)
    return 1;

  return fi(num-1)+fi(num-2);
}

document.write(fi(25 ));
