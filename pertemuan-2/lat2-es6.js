//Bedah data JSON: array dan object

//array
const nilai = [100, 20, 80];

//destructuring array = membedah data array
const nilai2 = nilai[1];
console.log(`Nilai ke 2 dari array: ${nilai}`);

//spread array = nambah / kurangi data array
const nilai_new = [99]; //ambil data ke 2, brarti index ke 1
const array_nilai_tambah = [...nilai_new, nilai]; //ini mau menambahkan
const tambah_dibelakang = [nilai, ...nilai_new];

console.log(`tambah belakang: ${tambah_dibelakang}`);
console.log(`kumpulan array nilai baru: ${array_nilai_tambah}`);

// ====================

//object
const mhs = {
    namaku : "Noval",
    umurku : 20,
    nilaiku : [90, 90, 100],
};

//destricturing object
const nama_kuu = mhs.nama; // ambil value dari key nama, dari object mhs
const {namaku, umurku, nilaiku} = mhs; //langsung buat banyakdari banyak key

console.log(`Nama: ${namaku}, Umur boss: ${umurku}`);

//spread object = tambah data keyv_value ke object
const nimku = {nim: "A11.2024.15657"};

const new_mhs = {
    ...nimku,
    mhs,
};

console.log(new_mhs);
console.log('');

//array of object = artinya kumpulan object dalam array 
const list_mhs = [
    {
        nama: "Rifqi",
        umur: 20,
    },
    {
        nama: "adi",
        umur: 21,
    }
]

//destructuring array of object
const nama_mhs_kedua = list_mhs[1].nama;

console.log(nama_mhs_kedua);

// spread, tambah object ke array of object
const mhs_anyar = {
    nama: "kak ros",
    umur: 75,
};

const list_mhs_anyar = [...list_mhs, mhs_anyar];

console.log(list_mhs_anyar);