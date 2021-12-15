/*
MEMBUAT PROGRAM TEBAK PIKIRAN

1.tekan tombol get started
2.komputer membangkitkan angka random dari 0 - 51
3.gambar tampil ke layar secara satu persatu berurutan mengikuti angka random yang dihasilkan komputer
4.player harus mengingat 1 gambar dan angka
5.tekan tombol lanjut
6.komputer membangkitkan angka random dari 0 - 51 dan angkanya tersusun dalam 4 kotak yang disediakan
7.player memilih kotak dimana gambar dan angkanya berada
8.klik tombol
9.kotak yang player pilih diletakkan tengah lalu komputer membangkitkan angka random lagi
10.ulangi sampai 2 kali
11.keluarkan hasilnya

*/

function angkaAcak() {
  // cetak total 52 angka
  let cetakAngka = [],
    awal = 0,
    akhir = 51;

  cetakAngka = Array(akhir - awal + 1)
    .fill()
    .map(() => awal++);

  // acak semua angka sehingga tidak ada satupun angka ganda
  let angka = [],
    i = cetakAngka.length,
    x = 0;

  while (i--) {
    x = Math.floor(Math.random() * (i + 1));
    angka.push(cetakAngka[x]);
    cetakAngka.splice(x, 1);
  }

  return angka;
}
const hasil = angkaAcak();

// kartu
// step 1
function kartuAcak() {
  let cards = document.querySelector(".pilihan");
  for (let i = 0; i < 4; i++) {
    // menambahkan kartu
    let myCard = document.createElement("div");

    myCard.setAttribute("id", "mycard");
    myCard.classList.add("col-3", "img-thumbnail", `kartuGambar${i}`);
    myCard.style.borderColor = "#C9D6DF";
    myCard.style.position = "relative";
    myCard.style.margin = "0.5rem";
    myCard.style.width = "175px";
    myCard.style.height = "250px";
    myCard.style.borderRadius = "10px";
    myCard.style.padding = "1rem 0 1rem 0";

    cards.appendChild(myCard);
  }
}
kartuAcak();

// membuat kartu1
function kartu1() {
  for (let z = 0; z < 13; z++) {
    let gambar = document.querySelector(".kartuGambar0");
    gambarBaru = document.createElement("img");

    gambarBaru.id = "gambar";
    gambarBaru.classList.add("imgcard");
    gambarBaru.setAttribute("src", `../imgcard/${hasil[z]}.png`);
    gambarBaru.style.margin = "5px";
    gambarBaru.style.width = "30px";
    gambar.appendChild(gambarBaru);
  }
}
const card1 = kartu1();

// membuat kartu2
function kartu2() {
  for (let z = 13; z < 26; z++) {
    let gambar = document.querySelector(".kartuGambar1");
    gambarBaru = document.createElement("img");

    gambarBaru.id = "gambar";
    gambarBaru.classList.add("imgcard");
    gambarBaru.setAttribute("src", `../imgcard/${hasil[z]}.png`);
    gambarBaru.style.margin = "5px";
    gambarBaru.style.width = "30px";
    gambar.appendChild(gambarBaru);
  }
}
const card2 = kartu2();

// membuat kartu 3
function kartu3() {
  for (let z = 26; z < 39; z++) {
    let gambar = document.querySelector(".kartuGambar2");
    gambarBaru = document.createElement("img");

    gambarBaru.id = "gambar";
    gambarBaru.classList.add("imgcard");
    gambarBaru.setAttribute("src", `../imgcard/${hasil[z]}.png`);
    gambarBaru.style.margin = "5px";
    gambarBaru.style.width = "30px";
    gambar.appendChild(gambarBaru);
  }
}
const card3 = kartu3();

// membuat kartu 4
function kartu4() {
  for (let z = 39; z < 52; z++) {
    let gambar = document.querySelector(".kartuGambar3");
    gambarBaru = document.createElement("img");

    gambarBaru.id = "gambar";
    gambarBaru.classList.add("imgcard");
    gambarBaru.setAttribute("src", `../imgcard/${hasil[z]}.png`);
    gambarBaru.style.margin = "5px";
    gambarBaru.style.width = "30px";
    gambar.appendChild(gambarBaru);
  }
}
const card4 = kartu4();

// membuat tombol dalam kartu
function tombol() {
  for (let i = 0; i < 4; i++) {
    let tombolKartu = document.querySelector(`.kartuGambar${i}`);
    element = document.createElement("input");
    element.type = "button";
    element.value = "Next";
    element.className = `btn btn-info tombol${i}`;
    element.style.fontWeight = "500";
    element.style.color = "white";

    tombolKartu.appendChild(element);
  }
}
tombol();

// kartu step 2
const susunArray = hasil;

potong1 = susunArray.slice(-52, -39);
potong2 = susunArray.slice(-39, -26);
potong3 = susunArray.slice(-26, -13);
potong4 = susunArray.slice(39);

function kartuStep2() {
  // olahan tombol 1
  document.querySelector(".tombol0").addEventListener("click", tukarArray1);
  function tukarArray1() {
    hasilArray = Array.prototype.concat.apply(
      [],
      [potong2, potong1, potong3, potong4]
    );
    return hasilArray;
  }
  const arr1 = tukarArray1();

  // olahan tombol 2
  document.querySelector(".tombol1").addEventListener("click", tukarArray2);
  function tukarArray2() {
    hasilArray = Array.prototype.concat.apply(
      [],
      [potong1, potong2, potong3, potong4]
    );
    return hasilArray;
  }
  const arr2 = tukarArray2();

  // olahan tombol3
  document.querySelector(".tombol2").addEventListener("click", tukarArray3);
  function tukarArray3() {
    hasilArray = Array.prototype.concat.apply(
      [],
      [potong1, potong3, potong2, potong4]
    );
    return hasilArray;
  }
  const arr3 = tukarArray3();
  }

  // olahan tombol 4
  document.querySelector(".tombol3").addEventListener("click", tukarArray4);

  function tukarArray4() {
    hasilArray = Array.prototype.concat.apply(
      [],
      [potong2, potong4, potong3, potong1]
    );
    return hasilArray;
  }
  const arr4 = tukarArray4();
  
kartuStep2();

function tukarGambar(){
  element = document.querySelectorAll('.imgcard');
  if (element.src.match(`../imgcard/${hasil}.png`)){
      element.src(`../imgcard/${arr4}.png`)
  }else{
      element.src(`../imgcard/${arr4}.png`)
  }
  return element;
}  


// menggeser kartu yang di klik ke urutan ke 2
function urutkan() {
document.querySelector(".tombol0").addEventListener("click", olah1);
function olah1() {
  let susun1 = document.querySelector(".kartuGambar0");
  let susun2 = document.querySelector(".kartuGambar1");

  susun2.insertAdjacentElement("afterend", susun1);
}

document.querySelector(".tombol2").addEventListener("click", olah2);
function olah2() {
  let susun1 = document.querySelector(".kartuGambar1");
  let susun2 = document.querySelector(".kartuGambar2");

  susun2.insertAdjacentElement("afterend", susun1);
}

document.querySelector(".tombol3").addEventListener("click", olah3);
function olah3() {
  let susun1 = document.querySelector(".kartuGambar1");
  let susun2 = document.querySelector(".kartuGambar3");

  susun2.insertAdjacentElement("afterend", susun1);

  document.querySelector(".tombol3").addEventListener("click", olah4);
  function olah4() {
    let susun1 = document.querySelector(".kartuGambar2");
    let susun2 = document.querySelector(".kartuGambar3");

    susun2.insertAdjacentElement("afterend", susun1);
  }
  olah4();
}
}
const arrayOlah = urutkan();
