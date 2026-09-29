console.log("Saya cinta UDINUS");

// variable 3 cara : var, let, const
const nama = "Noval";
const nim = "A11.2024.15659";
const umur = 20;
const nilai = [90, 100, 95];

console.log("Nama: " + nama +", umur: " + umur);

//konsep es6 pertama
//cara literal output
console.log(`Nama: ${nama}, umur: ${umur}`);

//konsep es6 kedua
//function cara keindahan 
const data_diri = (nama, nim) => `Nama: ${nama}, umur: ${umur}`;

console.log(data_diri(nama, nim));

//cara lama function
function penjumlahan1(bil1, bil2){
    return bil1 + bil2;
}

//cara es6
const penjumlahan2 = (bil1, bil2) => bil1 + bil2;

console.log(penjumlahan1(20, 3));
console.log(penjumlahan2(20, 3));