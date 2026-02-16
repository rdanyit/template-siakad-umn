// const togglePassword = document.getElementById("togglePassword");
// const passwordInput = document.getElementById("password");

// togglePassword.addEventListener("click", () => {
//   const isPassword = passwordInput.type === "password";

//   passwordInput.type = isPassword ? "text" : "password";
//   togglePassword.textContent = isPassword ? "👁" : "🙈";
// });

document.addEventListener("click", function (e) {
  const toggle = e.target.closest(".toggle-password");
  if (!toggle) return;

  const wrapper = toggle.closest(".input-password");
  const input = wrapper.querySelector(".password-input");

  if (!input) return;

  const isHidden = input.type === "password";
  input.type = isHidden ? "text" : "password";

  toggle.textContent = isHidden ? "👁" : "🙈";
});
