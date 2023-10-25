function pintar() {
  const myImage = new Image(1000, 700);
  myImage.src = "assets/img/21z.gif";
  document.body.appendChild(myImage);
  myImage.style.borderRadius = "50%";

  ele.style.backgroundColor = "green";

  if (ele.style.backgroundColor === "green") {
    ele.style.backgroundColor = "yellow";
  } else {
    ele.style.backgroundColor = "green";
  }
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);
