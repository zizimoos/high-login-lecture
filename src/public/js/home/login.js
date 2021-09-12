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
    .then(console.log);
};

logButton.addEventListener("click", login);
