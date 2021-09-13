const id = document.querySelector("#id");
const userName = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const registerButton = document.querySelector("button");

const register = (event) => {
  event.preventDefault();
  const req = {
    id: id.value,
    name: userName.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };

  console.log(req, JSON.stringify(req));

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((error) => {
      console.error(new Error("회원가입 중 에러 발생"));
    });
};

registerButton.addEventListener("click", register);
