function login() {
  let id = prompt("Tên ?");
  //id nhớ viết hoa nha
  if (id == "Admin") {
    let pass = prompt("Mật khẩu?");
    if (pass == "mindx") {
      alert("Chào mừng");
    } else {
      alert("Mật khẩu sai");
    }
  } else if (id == "" || !id) {
    alert("Canceled");
  } else {
    alert("Chúng tôi ko biết bạn");
  }
}

login();
