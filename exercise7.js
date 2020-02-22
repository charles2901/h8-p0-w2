//1. Menyusun Barisan Bintang

function barisanBintang(rows1){
    for(i = 0; i < rows1; i++){
      console.log("*")
    }
}
var rows1 = 5;
barisanBintang(rows1);


//2. Menyusun Barisan Bintang Dengan Nested Looping

function barisanBintangNested(rows2){
    for(i = 0; i < rows2; i++){
        var tampung = '';
        for(j = 0; j < rows2; j++){
            tampung += "*";
        }
        console.log(tampung)
    }
}
var rows2 = 5;
barisanBintangNested(rows2);


//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
function barisanTanggaBintang(rows3){
    var count = 1;
    for(i = 0; i < rows3; i++){
        var tampung = '';
        for(j = 0; j < count; j++){
            tampung += '*';
        }
        console.log(tampung);
        count++;
    }
}


var rows3 = 5;
barisanTanggaBintang(rows3);