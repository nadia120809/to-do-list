const inputTugas = document.getElementById("input-tugas");
const tombolTambah = document.getElementById("tombol-tambah");
const daftarTugas = document.getElementById("daftar-tugas");

// AMBIL DATA DARI LOCAL STORAGE
let tugas = JSON.parse(localStorage.getItem("tugas")) || [];

// SIMPAN KE LOCAL STORAGE
function simpanTugas() {
    localStorage.setItem("tugas", JSON.stringify(tugas));
}

// TAMPILKAN TUGAS
function tampilkanTugas() {
    daftarTugas.innerHTML = "";

    tugas.forEach((item, index) => {
        const liBaru = document.createElement("li");
        liBaru.textContent = item;

        const tombolHapus = document.createElement("button");
        tombolHapus.textContent = "Hapus";
        tombolHapus.style.marginLeft = "10px";

        tombolHapus.addEventListener("click", function () {
            tugas.splice(index, 1);
            simpanTugas();
            tampilkanTugas();
        });

        liBaru.appendChild(tombolHapus);
        daftarTugas.appendChild(liBaru);
    });
}

// TAMBAH TUGAS
tombolTambah.addEventListener("click", function () {
    const teksTugas = inputTugas.value;

    if (teksTugas === "") {
        alert("Harap isi tugas terlebih dahulu");
        return;
    }

    tugas.push(teksTugas);
    simpanTugas();
    tampilkanTugas();
    inputTugas.value = "";
});

// TAMPILKAN SAAT HALAMAN DIBUKA
tampilkanTugas();
