const animatedCursor = document.querySelector(".animatedCursor");

document.addEventListener("mousemove", (event) => {
  console.log(event);
  
  let x = event.clientX;
  let y = event.clientY;

  animatedCursor.style.left = x + 5 + "px";
  animatedCursor.style.top = y + 5 + "px";
  animatedCursor.style.display = "block";
});

document.addEventListener("onmouseout", (event) => {
  animatedCursor.style.display = "none";
})