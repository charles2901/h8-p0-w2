// 1. Melakukan Looping Menggunakan While

var count1 = 2;
var count2 = 20;

console.log("LOOPING PERTAMA");
while(count1 <= 20){
  console.log(count1 + "- I love coding");
  count1 += 2;
}
console.log("LOOPING KEDUA");
while(count2 >= 2){
  console.log(count2 + "- I will become fullstack developer");
  count2 -= 2;
}


//2. Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA");
for(i = 1; i <= 20; i++){
    console.log(i + " - I love coding");
  }

console.log("LOOPING KEDUA");
for(j = 20; j >= 1; j--){
    console.log(j + " - I will become fullstack developer")
}


//3. Angka Ganjil dan Genap

console.log(' ');

var counter = 1;
while(counter <= 100){
  if(counter % 2 == 0){
    console.log(counter + " - GENAP")
  }
  else{
    console.log(counter +" - GANJIL")
  }
  counter++;
}

var counter2 = 1;
  while(counter2 <= 100){
  if(counter2 % 3 == 0){
    console.log(counter2 + " KELIPATAN 3")
  }
  else{
    console.log("")
  }
  counter2 += 2;
}

var counter3 = 1;
while(counter3 <= 100){
  if(counter3 % 6 == 0){
    console.log(counter3 + " KELIPATAN 6")
  }
  else{
    console.log("")
  }
  counter3 += 5;
}

var counter4 = 1;
while(counter4 <= 100){
  if(counter4 % 10 == 0){
    console.log(counter4 + " KELIPATAN 10")
  }
  else{
    console.log("")
  }
  counter4 += 9;
}
