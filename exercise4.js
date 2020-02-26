var tanggal = 31;
var bulan = 1;
var tahun = 1945;

switch(true){
  case bulan == 1 && tanggal <= 31 && tanggal >= 1 && tahun >= 1900 && tahun <= 2200:
    console.log(`${tanggal} Januari ${tahun}`);
    break;
  case bulan == 2 && tanggal <= 28 && tanggal >= 1 && tahun >= 1900 && tahun <= 2200:
    console.log(`${tanggal} Februari ${tahun}`);
    break;
  case bulan == 3 && tanggal <= 31 && tanggal >= 1 && tahun >= 1900 && tahun <= 2200:
    console.log(`${tanggal} Maret ${tahun}`);
    break;
  case bulan == 4 && tanggal <= 30 && tanggal >= 1 && tahun >= 1900 && tahun <= 2200:
    console.log(`${tanggal} April ${tahun}`);
    break;
  case bulan == 5 && tanggal <= 31 && tanggal >= 1 && tahun >= 1900 && tahun <= 2200:
    console.log(`${tanggal} Mei ${tahun}`);
    break;
  case bulan == 6 && tanggal <= 30 && tanggal >= 1 && tahun >= 1900 && tahun <= 2200:
    console.log(`${tanggal} Juni ${tahun}`);
    break;
  case bulan == 7 && tanggal <= 31 && tanggal >= 1 && tahun >= 1900 && tahun <= 2200:
    console.log(`${tanggal} Juli ${tahun}`);
    break;
  case bulan == 8 && tanggal <= 31 && tanggal >= 1 && tahun >= 1900 && tahun <= 2200:
    console.log(`${tanggal} Agustus ${tahun}`);
    break;
  case bulan == 9 && tanggal <= 3 && tanggal >= 1 && tahun >= 1900 && tahun <= 2200:
    console.log(`${tanggal} September ${tahun}`);
    break;
  case bulan == 10 && tanggal <= 31 && tanggal >= 1 && tahun >= 1900 && tahun <= 2200:
    console.log(`${tanggal} Oktober ${tahun}`);
    break;
  case bulan == 11 && tanggal <= 30 && tanggal >= 1 && tahun >= 1900 && tahun <= 2200:
    console.log(`${tanggal} November ${tahun}`);
    break;
  case bulan == 12 && tanggal <= 31 && tanggal >= 1 && tahun >= 1900 && tahun <= 2200:
    console.log(`${tanggal} Desember ${tahun}`);
    break;
  default:
    console.log('Input tidak valid');
    break;
    
}
