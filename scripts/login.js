const SERVER_URL = "http://localhost:8085/users/login";

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const loginData = {
    email: email,
    password: password,
  };

  const response = await fetch(`${SERVER_URL}`, {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const userData = await response.json();
  console.log(userData);

  /* if(!userData.status){
        document.getElementById('msg').innerText = userData.message;
    } */

  if (userData.status) {
    document.getElementById("msg").innerText = "";
    window.location.href = "products.html";
  } else {
    document.getElementById("msg").innerText = userData.message;
  }
});
