// array of names
const NAMES = ["Jules", "Mary", "Christian", "Rosita", "Jay"];

// new array copy to avoid modifying original array
const NEW_ARRAY = [...NAMES];

// grab the ul elem
const ul = document.querySelector(".names-list");

// grab input elem
const inputElem = document.querySelector("input");

//grab error elem ( h3)
const errElem = document.getElementById("error");

// check for values in array function
const checkForArrayValue = (val) => {
  let includedLength = "";
  let xToRepeat = "";

  NEW_ARRAY.forEach((value, index, array) => {
    if (val === array[index]) {
      includedLength = array[index].length;
      for (let i = 0; i < includedLength; i++) {
        xToRepeat += "X";
      }
      errElem.textContent = "";
      return array.splice(index, 1, xToRepeat);
    }
  });
  // remove li from ul
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  displayNames();
};

const replaceNames = (e) => {
  if (inputElem.value.length === 0) {
    e.preventDefault();
    errElem.textContent = "Please enter a name to be replaced!!";
  } else {
    errElem.textContent = "";
    const inputValue = inputElem.value;
    checkForArrayValue(inputValue);
  }
};

// grab btn submit
const form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  replaceNames(e);
});

// displaynames function
const displayNames = () => {
  //clear input
  inputElem.value = "";
  NEW_ARRAY.map((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);
  });
};

displayNames();
