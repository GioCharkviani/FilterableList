var allLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var names = ["Harry", "Alex", "Ben", "Cara", "Demi", "Emma", "jim", "Oscar"];

var textInput = document.querySelector(".search");
var containerAlpDiv = document.querySelector("h3");
var containerDiv = document.getElementById("container");
var addButton = document.getElementById("add-btn");
var addInput = document.getElementById("add-input");

for(var i = 0; i < allLetters.length; i++) {

    var newDiv = document.createElement("div");
    newDiv.classList.add("containerAlp");

    var alp = document.createElement("h3");
    alp.innerHTML = allLetters[i];

    var li = document.createElement("li");

    var name = selectName(allLetters[i]);

    var ul = document.createElement("ul");
    li.textContent = name;

    if(name.length > 1) {
        ul.appendChild(li);
        newDiv.appendChild(alp);
        newDiv.appendChild(ul);
        containerDiv.appendChild(newDiv);
    }
    else {
        newDiv.appendChild(alp);
        newDiv.appendChild(ul);
        containerDiv.appendChild(newDiv);
        document.querySelectorAll(".containerAlp")[i].classList.add("hide");
    }



}

// ------ search ----
textInput.addEventListener("input", function() {
  var enteredText = textInput.value;
  liFilter(enteredText);
});


function liFilter(enteredText) {
    var contactsLi = document.querySelectorAll("li");
    for(var i = 0; i < contactsLi.length; i++) {
        if(contactsLi[i].textContent.toLocaleLowerCase().includes(enteredText)) {
        contactsLi[i].className = "";
        }
        else {
            contactsLi[i].className = "hide";
        }
        divFilter(contactsLi[i]);
    }
}

// ------------------
function divFilter(filtLi) {
    var countUlsChild = filtLi.parentElement.childElementCount;
    var filtUl = filtLi.parentElement;
    var ulsChild = filtLi.parentElement.children;
    var countHide = 0;
    for(var i = 0; i < countUlsChild; i++) {
        if(ulsChild[i].className === "hide") {
            countHide++;
        }
    }
    if(countHide === countUlsChild) {
        filtUl.parentElement.classList.add("hide");
    }
    else {
        filtUl.parentElement.classList.remove("hide");
    }

}

// -------------------------------

function selectName(letter) {
    for(var i = 0; i < names.length; i++) {
        if(letter == (names[i])[0]) {
            return names[i];
        }
    }
    return "";
}
// --------------------------------


// -------------------------------

addButton.addEventListener("click", function() {
    var newName = addInput.value;
    names.push(newName);
    var number = addLisName(newName);
    var li = document.createElement("li");
    li.textContent = (newName[0].toUpperCase() + newName.slice(1));
    document.querySelectorAll("ul")[number].appendChild(li);
    addInput.value = "";
});
// -------------------------------

// --------------------
function addLisName(name) {
    for(var i = 0; i < allLetters.length; i++) {
        if(allLetters[i] === name[0].toUpperCase()) {
            document.querySelectorAll(".containerAlp")[i].classList.remove("hide");
            return i;
        }
    }
}
// -----------------------