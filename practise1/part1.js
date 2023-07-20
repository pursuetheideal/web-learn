document.querySelector(".change1").addEventListener("click", () => {
  document.querySelector("#icon").src = "dog1.jpg";
});

document.querySelector(".reset").addEventListener("click", () => {
  document.querySelector("#icon").src = "cat1.jpg";
});
