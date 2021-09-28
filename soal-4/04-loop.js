/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
function isPrime(x){
    for (let i=2,s= Math.sqrt(x);i <= s;i++){
    if(x % i=== 0) return false;
    }
    return true;
    }
    
    for(i=1;i<=100;i++){
    if (i == 1){
    continue;
    }else{
    if(isPrime(i)){
    console.log(i);
    }
    }
    }


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter=0;
let fiftiethPrime = 2;
let n =2;

/// EDIT HERE
while (primeCounter < 50) {
    isPrime=true;
    for(let i =2 ; i < n;i++){
        if (n % i == 0){
            isPrime = false
        }
    }
    if (isPrime){
        fiftiethPrime = n ;
        primeCounter++
    }
    n++
}
console.log(fiftiethPrime)


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
fiftiethOdd =1;
let a =1;
do { 
    if (a % 2 == 1){
        fiftiethOdd = a
        oddCounter++
    }
    a++
} 
while (oddCounter < 50)
console.log(fiftiethOdd);
