const allDropDownIcons = document.querySelectorAll(".chevron-arrow");

/* Add custom drop down behaviour to all chevron-arrows used in page */
for (const arrow of allDropDownIcons) {
  arrow.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.classList.toggle("open");
  });
}

const allCustomOptions = document.querySelectorAll(".custom-option");

/* Adding clicking options for options in custom select class */
for (const option of allCustomOptions) {
  option.addEventListener("click", (e) => {
    var selectBox = e.target.parentNode.parentNode.querySelector("span");
    var parent_popup_container = e.target.parentNode.parentNode.parentNode;

    if (!e.target.classList.contains("selected")) {
      // remove former selected element and set current element as selected
      if (e.target.parentNode.querySelector(".custom-option.selected")) {
        e.target.parentNode
          .querySelector(".custom-option.selected")
          .classList.remove("selected");
      }
      e.target.classList.add("selected");
      selectBox.textContent = e.target.textContent;

      // remove faded-blue color
      selectBox.classList.remove("placeholder");
      selectBox.classList.add("active-option");

      // close list of options
      e.target.parentNode.parentNode.classList.toggle("open");

      // make save buttons default-blue color
      parent_popup_container
        .querySelector(".save-btn")
        .classList.remove("faded-blue-bg");
      parent_popup_container
        .querySelector(".save-btn")
        .classList.add("blue-bg");
    }
  });
}

// Close all custom select drop downs when user clicks outside element
// with custom select class
window.addEventListener("click", (e) => {
  const allCustomSelectWrappers = document.querySelectorAll(
    ".custom-select-wrapper"
  );

  for (const select of allCustomSelectWrappers) {
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  }
});
