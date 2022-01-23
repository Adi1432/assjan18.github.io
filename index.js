var imgs_ref = document.querySelectorAll(".posts");
var heart = document.querySelectorAll(".like");

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    heart[i].classList.toggle("red");
  });
}

for (let i = 0; i < imgs_ref.length; i++) {
  imgs_ref[i].addEventListener("dblclick", function () {
    heart[i].classList.add("red");
  });
}
