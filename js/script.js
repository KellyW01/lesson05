var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    cat.classList.remove("show");
    button.innerText = "Wait! Come back!";
    button.classList.add("disappear");
    // console.log("yes");
  } else {
    // console.log("no");
    cat.classList.add("show");
    button.innerText = "Just kidding, go away";
    button.classList.remove("disappear");
  }
});