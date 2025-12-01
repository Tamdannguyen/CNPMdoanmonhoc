const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("Username");
const passwordInput = document.getElementById("Password");

let failCount = 0;
const MAX_FAIL = 5;

// Regex username: giả sử yêu cầu tên user là danntt@uit.com bao gồm chữ viết thường + đuôi uit.com
const usernameRegex = /^(?=.*[a-z])[a-zA-Z0-9._%+-]+@uit\.com$/;

// Regex mật khẩu: giả sử >=6 ký tự, có ít nhất 1 ký tự viết thường, viết hoa, chữ số và ký tự đặc biệt
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Nếu nhập sai quá 5 lần thì bị khóa tài khoản.
  if (failCount >= MAX_FAIL) {
    alert("Tài khoản đã bị khóa do nhập sai quá 5 lần!");
    usernameInput.disabled = true;
    passwordInput.disabled = true;
    return;
  }

  // Kiểm tra username
  if (!usernameRegex.test(username)) {
    failCount++;

    alert(
      `Tên đăng nhập không hợp lệ! 
Yêu cầu: Tên đăng nhập phải bao gồm các chữ viết thường và kết thúc bằng @uit.com
Số lần sai: ${failCount}/${MAX_FAIL}`
    );
    return;
  }

  //Kiểm tra password
  if (!passwordRegex.test(password)) {
    failCount++;

    alert(
      `Mật khẩu không hợp lệ! Mật khẩu phải bao gồm: 
- Tối thiểu 6 ký tự
- Tối thiểu 1 chữ viết thường
- Tối thiểu 1 chữ viết hoa
- Tối thiểu 1 số
- Tối thiểu 1 ký tự đặc biệt
Số lần sai: ${failCount}/${MAX_FAIL}`
    );
    return;
  }

  alert("Đăng nhập thành công!");
  window.location.href = "home.html";
});
