function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;
    /*Buat looping yang akan berlanjut sampai
     tidak ada switching yang dilakukan:*/
    while (switching) {
      //mulai dengan: belum ada switching yang selesai:
      switching = false;
      rows = table.rows;
      /*Ulangi melalui semua baris tabel (kecuali
       pertama, yang berisi header tabel):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //mulailah dengan mengatakan seharusnya tidak ada switching:
        shouldSwitch = false;
        /*Dapatkan dua elemen yang ingin dibandingkan,
         satu dari baris saat ini dan satu dari baris berikutnya:*/
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        //periksa apakah kedua baris harus bertukar tempat:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // jika demikian, tandai sebagai switching dan hentikan looping:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*Jika switch telah ditandai, lakukan switching
         dan tandai bahwa switch telah dilakukan:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }