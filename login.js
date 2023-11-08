// show password
const show = document.getElementById("clicky").addEventListener("click", () => {
  var val = document.getElementById("pass");
  if (val.type == "password") {
    val.type = "text";
  } else {
    val.type = "password";
  }
});

// login button
const button = document.querySelector('#btnPost');
button.addEventListener('click', () => {
    
})