// const email2 = document.getElementById("email");
// const password2 = document.getElementById("password");
// const button2 = document.getElementById("btn");

// button2.addEventListener("click", () => {
//   fetch("http://localhost:8080/userData", {
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       //   data.map((element)=>{
//       for (let i = 0; i < data.length; i++) {
//         if (
//           //   email2.value === element.email &&
//           //   password2.value === element.password
//           email2.value === data[i].email &&
//           password2.value === data[i].password
//         ) {
//           alert("Login Successful");
//           window.location.href="/home-page/home.html";
//           // break;
//         }
//         else if(i === data.length-1) {
//           alert("Invalid Credentials");
//         }
//       }
//     });
// });

const email2 = document.getElementById("email");
const password2 = document.getElementById("password");
const button2 = document.getElementById("btn");
button2.addEventListener("click", () => {
  fetch("http://localhost:8080/userData", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i <= data.length; i++) {
        // if (
        //   email2.value !== data[i].email &&
        //   password2.value !== data[i].password
        // ) {
        //   alert("Invalid Credentials");
        //   break;
        // }
        if (
          email2.value === data[i].email &&
          password2.value === data[i].password
        ) {
          alert("Login Successful");
          localStorage.setItem("token", JSON.stringify(Date.now()));

          window.location.href = "/home-page/home.html";
        }
      }
      alert("Invalid Credentials");
    });
});
