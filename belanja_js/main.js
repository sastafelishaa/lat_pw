let belanja = parseInt(prompt("Masukan Nilai Belanja : "));
if (belanja >= 0 && belanja < 100000) {
  document.write(`Anda Belanja = ${belanja} <br>`);
  document.write("Anda Tidak Dapat Diskon!!");
} else if (belanja >= 100000 && belanja < 200000) {
  document.write(`Anda Belanja = ${belanja} <br>`);
  document.write("Anda Dapat Diskon 10% <br>");
  let diskon = (belanja * 10) / 100;
  document.write(`Total Bayar = ${belanja - diskon}`);
} else if (belanja >= 200000) {
  document.write(`Anda Belanja = ${belanja} <br>`);
  document.write("Anda Dapat Diskon 25% <br>");
  let diskon1 = (belanja * 25) / 100;
  document.write(`Total Bayar = ${belanja - diskon1}`);
} else {
  document.write("Nilai Yang Anda Masukan Salah!!");
}
