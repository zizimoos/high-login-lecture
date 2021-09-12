const id = document.querySelector("#id");
const password = document.querySelector("#password");
const logButton = document.querySelector("button");

const login = () => {
  const req = {
    id: id.value,
    password: password.value,
  };

  console.log(req, JSON.stringify(req));

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((error) => {
      console.error(new Error("로그인 중 에러 발생"));
    });
};

logButton.addEventListener("click", login);
