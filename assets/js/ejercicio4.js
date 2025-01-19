let color = "";

document.addEventListener("keydown", (event) => {
  const tecla = event.key.toLowerCase();
  switch (tecla) {
    case "a":
      color = "pink";
      break;
    case "s":
      color = "orange";
      break;
    case "d":
      color = "skyblue";
      break;
    case "q":
      const nuevoDiv = document.createElement("div");
      nuevoDiv.style.width = "200px";
      nuevoDiv.style.height = "200px";
      nuevoDiv.style.backgroundColor = "purple";
      document.body.appendChild(nuevoDiv);
      break;
    case "w":
      const nuevoDiv2 = document.createElement("div");
      nuevoDiv2.style.width = "200px";
      nuevoDiv2.style.height = "200px";
      nuevoDiv2.style.backgroundColor = "grey";
      document.body.appendChild(nuevoDiv2);
      break;
    case "e":
      const nuevoDiv3 = document.createElement("div");
      nuevoDiv3.style.width = "200px";
      nuevoDiv3.style.height = "200px";
      nuevoDiv3.style.backgroundColor = "brown";
      document.body.appendChild(nuevoDiv3);
      break;
  }
  document.getElementById("key").style.backgroundColor = color;
});
