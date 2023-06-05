const username = document.getElementById("name");
const email1 = document.getElementById("email");
const password1 = document.getElementById("password");
const phone = document.getElementById("phone");
const button1 = document.getElementById("btn");

button1.addEventListener("click", () => {
  if (
    username.value == "" ||
    email1.value == "" ||
    password1.value == "" ||
    phone.value == ""
  ) {
    alert("Please fill the form");
  } else {
    fetch("http://localhost:8080/userData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username.value,
        email: email1.value,
        password: password1.value,
        phone: phone.value,
      }),
    }).then((res) => {
      if (confirm("Account Created Successfully")) {
        window.location.href ="/login-page/login.html";
      }
      // window.location.href = "/login-page/login.html";
    });
  }
});
