// 1. berisi array (data)

const mataKuliahList = {
  mataKuliah: [
    { kode: "MK001", nama: "Pemrograman mobile", sks: 2 },
    { kode: "MK002", nama: "pemrograman sisi klien", sks: 3 },
    { kode: "MK003", nama: "permrograman sisi server", sks: 3 },
  ],
};

const mahasiswaList = {
  mahasiswa: [
    {
      nim: "22001",
      nama: "Noval Fitriadi",
      status: true,
      matkul: [
        { matkulId: "MK001", tugas: 85, uts: 80, uas: 90 },
        { matkulId: "MK002", tugas: 80, uts: 85, uas: 88 },
      ],
    },
    {
      nim: "22002",
      nama: "Najib finanda",
      status: true,
      matkul: [{ matkulId: "MK001", tugas: 70, uts: 75, uas: 80 }],
    },
  ],
};

// berisi kodingan kumupulan object

// 1. Menampilkan Semua Data Mahasiswa (show())
const show = () => {
  mahasiswaList.mahasiswa.forEach((mhs) => {
    console.log(
      `NIM: ${mhs.nim}, Nama: ${mhs.nama}, Status: ${mhs.status ? "Aktif" : "Tidak Aktif"}`,
    );
    console.log("Mata Kuliah:");

    mhs.matkul.forEach((mk) => {
      const matkulName = mataKuliahList.mataKuliah.find(
        (m) => m.kode === mk.matkulId,
      ).nama;
      console.log(
        `- ${matkulName}: Tugas ${mk.tugas}, UTS ${mk.uts}, UAS ${mk.uas}`,
      );
    });
  });
};
show();

// 2. Menambah Mahasiswa Baru (add())
const add = (mahasiswa) => mahasiswaList.mahasiswa.push(mahasiswa);
add({
  nim: "22003",
  nama: "Andi Setiawan",
  status: true,
  matkul: [{ matkulId: "MK003", tugas: 88, uts: 85, uas: 90 }],
});
console.log(mahasiswaList);

// 3. Mengupdate Mahasiswa (update())
const update = (nim, dataBaru) => {
  mahasiswaList.mahasiswa = mahasiswaList.mahasiswa.map((m) =>
    m.nim === nim ? { ...m, ...dataBaru } : m,
  );
};
update("22001", { status: false });
console.log(mahasiswaList);

// 4. Menghapus Mahasiswa (deleteById())
const deleteById = (nim) => {
  mahasiswaList.mahasiswa = mahasiswaList.mahasiswa.filter(
    (m) => m.nim !== nim,
  );
};
deleteById("22002");
console.log(mahasiswaList);

// 5. Menghitung Total Nilai (totalNilai())
const totalNilai = (nim) => {
  const mahasiswa = mahasiswaList.mahasiswa.find((m) => m.nim === nim);
  if (!mahasiswa) return "Mahasiswa tidak ditemukan";

  return mahasiswa.matkul.map((mk) => {
    const total = mk.tugas + mk.uts + mk.uas;
    return { matkulId: mk.matkulId, total };
  });
};
console.log(totalNilai("22001"));

// 6. Mengelompokkan Mahasiswa Berdasarkan Kategori Nilai (kategoriNilai())
const kategoriNilai = (nilai) => {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 65) return "C";
  if (nilai >= 50) return "D";
  return "E";
};
console.log(kategoriNilai(88)); // Output: A
console.log(kategoriNilai(72)); // Output: B

// 7. Menghitung IPS Mahasiswa (IPS())
const IPS = (nim) => {
  const mahasiswa = mahasiswaList.mahasiswa.find((m) => m.nim === nim);

  if (!mahasiswa) return "Mahasiswa tidak ditemukan";

  const totalSks = mahasiswa.matkul.reduce((sum, mk) => {
    const matkul = mataKuliahList.mataKuliah.find(
      (m) => m.kode === mk.matkulId,
    );
    return sum + matkul.sks;
  }, 0);

  const totalNilai = mahasiswa.matkul.reduce((sum, mk) => {
    const total = mk.tugas * 0.3 + mk.uts * 0.3 + mk.uas * 0.4;
    const matkul = mataKuliahList.mataKuliah.find(
      (m) => m.kode === mk.matkulId,
    );
    return sum + total * matkul.sks;
  }, 0);

  return (totalNilai / totalSks).toFixed(2);
};
console.log(`IPS Mahasiswa 22001: ${IPS("22001")}`);

// 8. Menghitung Jumlah Mahasiswa (jumlahMahasiswa())
const jumlahMahasiswa = () => mahasiswaList.mahasiswa.length;
console.log(`Jumlah Mahasiswa: ${jumlahMahasiswa()}`);

// 9. Mengurutkan Mahasiswa berdasarkan NIM (sortByNIM())
const sortByNIM = () =>
  mahasiswaList.mahasiswa.sort((a, b) => a.nim.localeCompare(b.nim));
sortByNIM();
console.log(mahasiswaList);

// 10. Menghitung Mahasiswa Aktif dan Tidak Aktif (jumlahAktifTidak())
const jumlahAktifTidak = () => {
  return {
    aktif: mahasiswaList.mahasiswa.filter((m) => m.status).length,
    tidakAktif: mahasiswaList.mahasiswa.filter((m) => !m.status).length,
  };
};
console.log(jumlahAktifTidak());

// 11. Mengurutkan mahasiswa berdasarkan status aktif/tidak (sortByStatus())
const sortByStatus = () => {
  mahasiswaList.mahasiswa.sort((a, b) => Number(b.status) - Number(a.status));
};
sortByStatus();
console.log(mahasiswaList);

// 12. Menghapus semua data mahasiswa dari array (clearArray())
const clearArray = () => {
  mahasiswaList.mahasiswa = [];
};
clearArray();
console.log(mahasiswaList);
