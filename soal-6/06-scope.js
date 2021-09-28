/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
// Ada 2 variable scope pada Javascript yaitu bersifat global dan local
// Definisi dari global scope adalah variable yang memiliki akses secara global dan dapat dipanggil /dipakai di blok manapun
// Sedangkan Local scope adalah variabel yang tidak dapat diakses secara luar / general jika berada di blok localnya.
// Implementasi dari Global scope: 
//  let barang = "Kipas";
//  function globalsc(){
//  return barang;}
//  console.log(globalsc(barang));
// Implementasi dari local scope: 
//  function localsc(){
//  let barang = "Kipas";}

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam console.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// Hasil Analisa :Hasil dari console.lognya adalah Mariah,mengapa itu terjadi karena menggunakan Split dimana Split ini akan membagi string dengan string kosong sebagai pemisah dan menjadikannya array dimana Mariah index 0 dan Carey index 1 
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
