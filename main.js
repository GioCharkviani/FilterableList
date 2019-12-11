var contactsLi = document.querySelectorAll("li");
var textInput = document.querySelector("input");


textInput.addEventListener("input", function() {
  var enteredText = textInput.value;
  liFilter(enteredText);
});

function liFilter(enteredText) {
  for(var i = 0; i < contactsLi.length; i++) {
    if(contactsLi[i].textContent.toLocaleLowerCase().includes(enteredText)) {
      contactsLi[i].className = "";
    }
    else {
      contactsLi[i].className = "hide";
    }
}
}