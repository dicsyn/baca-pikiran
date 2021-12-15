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
10.ulangi sampai 3 kali
11.keluarkan hasilnya

*/



function gambarAcak(){
    // cetak total 52 angka
    let cetakAngka = [],
    awal = 0,
    akhir = 51;

    cetakAngka = Array(akhir - awal + 1).fill().map(() => awal++);

    // acak semua angka sehingga tidak ada satupun angka ganda
    let angka = [],
    i = cetakAngka.length,
    x = 0;

    while (i--){
        x = Math.floor(Math.random() * (i+1));
        angka.push(cetakAngka[x]);
        cetakAngka.splice(x,1);
    }
    
    // menghubungkan semua angka acak dengan gambar
    for (let z = 0; z < 52; z++) {
        let gambar = document.querySelector('.gambar');
        gambarBaru = document.createElement('img');
        
        gambarBaru.setAttribute('src',`../imgcard/${angka[z]}.png`);
        gambarBaru.style.margin = '5px';
        gambarBaru.style.width = '2.5rem';
        gambar.appendChild(gambarBaru);
    }

}

const hasil = gambarAcak();
