function cek(){
     let y = document.getElementById("angka1").value ;
     let z = document.getElementById("angka2").value ;
     let text = " ";
     for(let x = y; x <= z ; x++) {
          text += x + "<br>";
     }
     document.getElementById("simpan").innerHTML = text;
}

function tes(){
     let a = document.getElementById("angka3").value ;
     let b = document.getElementById("angka4").value ;
     let hasil = " ";
     for(let c = a; c >= b ; c--) {
          hasil += c + "<br>";
     }
     document.getElementById("jumlah").innerHTML = hasil;
}


