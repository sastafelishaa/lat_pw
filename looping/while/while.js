function tampil1() {
  let a = document.getElementById("nilaia").value;
  let b = document.getElementById("nilaib").value;
  let hasil1 = " ";

  while (a <= b) {
    hasil1 += a + "<br>";
    a++;
  }
  document.getElementById("cek1").innerHTML = hasil1;
}
