function hitung(){
     let hasil = document.getElementById("hasil").value;
if(hasil >= 0 && hasil <= 70) {
     document.getElementById("jumlah").innerHTML = "Remedial";
}
else if(hasil >= 71 && hasil <= 79) {
     document.getElementById("jumlah").innerHTML = "C";
}
else if(hasil >= 80 && hasil <= 89) {
     document.getElementById("jumlah").innerHTML = "B";
}
else if(hasil >= 90 && hasil <= 100) {
     document.getElementById("jumlah").innerHTML = "A";
}
else {
     document.getElementById("jumlah").innerHTML = "Nilai anda melebihi batas";
}
}