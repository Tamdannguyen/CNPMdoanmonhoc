// CODE JS CHUNG CHO PHẦN BOT AI
const toggle = document.getElementById("chat-toggle");
const chatbox = document.getElementById("chatbox");
const closeBtn = document.getElementById("close-chat");

toggle.addEventListener("click", () => {
  chatbox.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  chatbox.classList.add("hidden");
});

//CODE PHẦN HIỂN THỊ TÊN ĐĂNG NHẬP
const username = localStorage.getItem("username");

if (username) {
  document.querySelector(".nav-item span").innerText = username;
}

//CODE PHẦN ĐỔI MẬT KHẨU
// ĐỔI MẬT KHẨU
const changePasswordBtn = document.getElementById("changePasswordBtn");

if (changePasswordBtn) {
  changePasswordBtn.addEventListener("click", function () {
    const modal = new bootstrap.Modal(
      document.getElementById("changePasswordModal")
    );
    modal.show();
  });
}

// LƯU MẬT KHẨU
const savePasswordBtn = document.getElementById("savePasswordBtn");

if (savePasswordBtn) {
  savePasswordBtn.addEventListener("click", function () {
    const oldPass = document.getElementById("oldPassword").value;
    const newPass = document.getElementById("newPassword").value;
    const confirmPass = document.getElementById("confirmPassword").value;

    const currentPass = localStorage.getItem("password");

    // Regex kiểm tra mật khẩu mạnh
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/;

    if (oldPass !== currentPass) {
      alert("Mật khẩu cũ không đúng!");
      return;
    }

    if (!regex.test(newPass)) {
      alert(
        "Mật khẩu không đủ mạnh (6 ký tự, hoa, thường, số, ký tự đặc biệt)"
      );
      return;
    }

    if (newPass !== confirmPass) {
      alert("Mật khẩu nhập lại không khớp!");
      return;
    }

    // Lưu mật khẩu mới
    localStorage.setItem("password", newPass);

    alert("Đổi mật khẩu thành công!");

    // Đóng Modal
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("changePasswordModal")
    );
    modal.hide();

    // Reset input
    document.getElementById("oldPassword").value = "";
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmPassword").value = "";
  });
}

//CODE CHO PHẦN LOGOUT
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    // Xác nhận người dùng có muốn logout không
    const confirmLogout = confirm("Bạn có chắc muốn đăng xuất không?");
    if (confirmLogout) {
      // Xóa dữ liệu user hiện tại
      localStorage.removeItem("username");
      localStorage.removeItem("password");

      // Quay về trang đăng nhập
      window.location.href = "login.html";
    }
  });
}
