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
      "content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
};
logButton.addEventListener("click", login);
