// show password
document.getElementById("clicky").addEventListener("click", () => {
  var val = document.getElementById("pass");
  if (val.type == "password") {
    val.type = "text";
  } else {
    val.type = "password";
  }
});
