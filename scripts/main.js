// alert("this is coming from external")

var l1btn = document.getElementById("lb");

l1btn.addEventListener("mouseenter", function (event) {
  l1btn.innerHTML = "<b> the mouse just enter</b>";
});

l1btn.addEventListener("mouseleave", function (event) {
  l1btn.innerHTML = "<b> this mouse as leave</b>";
});
