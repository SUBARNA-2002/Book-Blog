// const container = document.getElementById('dataContainer');

// fetch('http://localhost:9090/data')
//   .then(response => response.json())
//   .then(data => {
//     container.innerHTML = JSON.stringify(data);
//   })
//   .catch(error => {
//     console.log('Error:', error);
//   });
if (localStorage.getItem("token") === null) {
  window.location.href = "//book-list/list.html";
}
const button5 = document.getElementById("btn");
// button5.innerText="ADD";
fetch("http://localhost:8080/data", {
  method: "GET",
})
  .then((r) => r.json())
  .then((data) => {
    const food = document.getElementById("show");
    data.forEach((el) => {
      const div = document.createElement("div");
      div.id = "temp";
      const image = document.createElement("img");
      image.src = el.image;
      image.className = "pic";
      // const link = document.createElement("a");

      // const title = document.createElement("h3");
      // title.innerText = el.title;
      div.addEventListener("click", () => {
        window.location.href = "/book-list/list.html";//add your 
      });
      const title = document.createElement("span");
      title.innerText = el.title;
      const rating = document.createElement("p");
      rating.innerText = el.about;
      const button = document.createElement("button");
      button.innerText = "show recipe";
      const button2 = document.createElement("button");
      button2.innerText = "Hide";
      const button3 = document.createElement("button");
      button3.innerText = "update";
      const button4 = document.createElement("button");
      button4.innerText = "delete";
      button2.id = "butt";
      button.id = "butt";
      const show = document.createElement("p");
      show.id = "ani";
      button.addEventListener("click", () => {
        // alert("succes")
        show.innerText = el.about;
      });
      button2.addEventListener("click", () => {
        show.innerHTML = "";
      });

      button3.addEventListener("click", () => {
        alert(`Want to edit ${el.title} ?`);
        const updatedTitle = prompt("Enter new title");
        fetch(`http://localhost:8080/data/${el.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: updatedTitle,
            about: el.about,
            image: el.image,
          }),
        })
          .then((res) => {
            alert("Updated Title Successfully");
          })
          .catch((err) => {
            alert("Error occured while updating" + err);
          });
      });

      button4.addEventListener("click", () => {
        alert(`Want to delete ${el.title} ?`);
        fetch(`http://localhost:8080/data/${el.id}`, {
          method: "DELETE",
        })
          .then((res) => {
            alert("Deleted the item");
          })
          .catch((err) => {
            alert("Error occured while deleting");
          });
      });
      // button, button2,button3,button4,show
      div.append(title, image);
      food.append(div);
    });
  });
button5.addEventListener("click", () => {
  const addTitle = document.createElement("h2");
  const addImage = document.createElement("img");
  const addDesc = document.createElement("p");
  addTitle.innerText = prompt("Enter title");
  addImage.src = prompt("Enter image");
  addDesc.innerText = prompt("Enter description");
  fetch("http://localhost:8080/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: addTitle.innerText,
      image: addImage.src,
      about: addDesc.innerText,
    }),
  }).then((res) => {
    if (res.ok) {
      console.log(res);
      alert("Anime added successfully");
    } else {
      alert("Error");
    }
  });
});
