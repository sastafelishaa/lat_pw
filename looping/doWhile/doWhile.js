function tampil1() {
    let a = document.getElementById("nilaia").value;
    let b = document.getElementById("nilaib").value;
    let hasil = " ";
  
    do {
      hasil += a + "<br>";
      a--;
    } while (a >= b);
    document.getElementById("cek1").innerHTML = hasil;
  }