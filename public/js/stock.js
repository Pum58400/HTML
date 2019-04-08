function AddNumber() {
  var swap = [];
  var data = document.getElementById("price").value;
  if (data.length == 4) {
    if (data.length % 4 == 0) {
      document.getElementById("price").value = data.substring(0, 1) + "," + data.substring(1, data.length);
    }
  }

}

function SearchtableForm() {
  var x = document.getElementById("check").value;
  if (x == "") {
    alert("กรุณากรอกข้อความ")
    return false;

  } else {

    document.getElementById("search").submit();
  }
}
function AdddataForm() {


  var tmp_date = document.getElementById("date").value;
  var tmp_number = document.getElementById("number").value;
  var tmp_version = document.getElementById("version").value;
  var tmp_price = document.getElementById("price").value;
  var tmp_color = document.getElementById("color").value;
  // var tmp_quantity = document.getElementById("quantity").value;

  if (tmp_date == "" || tmp_number == "" || tmp_version == "" || tmp_price == "" || tmp_color == "") {
    alert("กรุณากรอกข้อความให้ครบทุกช่อง")
    return false;
  }
  if (tmp_number.length < 17 || !tmp_number.match(/^([A-Z0-9_\.\-])+$/)) {
    alert("กรุณากรอก เลขตัวถัง ให้ถูกต้อง");
    return false;
  }
  //  if(!tmp_number.match( /^([A-Z_\.\-])+$/)){
  //   alert("กรอก เลขตัวถัง ได้เฉพาะตัวเลขและตัวอักษรภาษาอังกฤษให้ครบ 17 ตัวอักษรเท่านั้น");
  //   return false;
  // }

  if (tmp_version.length < 4) {
    alert("กรุณากรอก รุ่น ให้ถูกต้อง");
    return false;
    // }else if(!tmp_version.match(/^([a-zA-Z0-9])+$/i)){
    //   alert("กรอก รุ่น ได้เฉพาะตัวเลขและตัวอักษรภาษาอังกฤษเท่านั้น");
    //   return false;

  }
  if (tmp_color == parseInt(tmp_color)) {
    alert("กรอก สี เฉพาะตัวอักษร");
    return false;
  }
  // else if(tmp_quantity == ""){
  //   alert("กรอก จำนวน ให้ถูกต้อง");
  //   return false;
  // }
  // else if(tmp_quantity != parseInt(tmp_quantity)){
  //   alert("กรอก จำนวน ได้เฉพาะตัวเลขเท่านั้น");
  //   return false;
  // }
  else {
    alert("เพิ่มข้อมูลเรียบร้อย");
    document.getElementById("form1").submit();
  }
}
//check number ,
function checkNumber() {
  var change = "";
  var value = "";
  var data = document.getElementById("price").value;
  var removed = ""
  if (data.charAt(data.length - 1) != parseInt(data.charAt(data.length - 1)) || data.charAt(0) =='0') {
    document.getElementById("price").value = data.substring(0, data.length - 1);
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data.charAt(i) == ",") {
        data.slice(0, i);
      } else {
        removed += data.substring(i, i + 1);
      }
    }
    var size = -1;
    for (let i = removed.length; i >= 0; i--) {
      if (size == 3) {
        size = 1;
        change += "," + removed.substring(i, i + 1);
      } else {
        change += removed.substring(i, i + 1);
        size++;
      }

    }
    for (let i = change.length; i >= 0; i--) {
      value += change.substring(i, i + 1)
    }
    document.getElementById("price").value = value;

  }

}
