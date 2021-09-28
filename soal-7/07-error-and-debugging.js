/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE

/*
Jawaban perbedaan dari TypeError,ReferenceError,RangeError dan SyntaxError dari segi definisi

- TypeError
akan muncul saat operan atau argumen yang diteruskan ke suatu fungsi tidak sesuai dengan tipe yang diharapkan oleh operator atau fungsi tersebut; atau
ketika mencoba mengubah nilai yang tidak dapat diubah atau
ketika mencoba menggunakan nilai dengan cara yang tidak pantas

-ReferenceError
akan muncul saat menggunakan variabel yang belum di deklarasikan 

-RangeError
akan muncul saat objek nilai yang tidak di set atau berkisar dari nilai yang diperbolehkan.

-SyntaxError
akan muncul saat ada kesalahan ketik dalam menulis Syntax. */

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
///let Hasil analisis 

/* yang terjadi adalah error dan masuk ke kategori ReferenceError dikarenakan letak var 
dan const tidak di deklarasikan di awal sehingga urutan program yang harusnya 
dari atas ke bawah jadi error,jika ingin diperbaiki maka ubah letak var dan const 
menjadi di atas sebelum console log. */

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
