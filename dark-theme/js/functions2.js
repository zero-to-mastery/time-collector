const all_drop_down_icons = document.querySelectorAll('.chevron-arrow');

/* Add custom drop down behaviour to all chevron-arrows used in page */
for (const arrow of all_drop_down_icons) {
  arrow.addEventListener('click', (e) => {
    e.target.parentNode.parentNode.classList.toggle('open');
  })
}

/* Adding clicking options for options in custom select class */
for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener('click', (e) => {
    var selectBox = e.target.parentNode.parentNode.querySelector('span');
    var parent_popup_container = e.target.parentNode.parentNode.parentNode;

    if (!e.target.classList.contains('selected')) {

      // remove former selected element and set current element as selected
      if (e.target.parentNode.querySelector('.custom-option.selected')) {
        e.target.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
      }
      e.target.classList.add('selected');
      selectBox.textContent = e.target.textContent;

      // remove faded-blue color
      selectBox.classList.remove('placeholder');
      selectBox.classList.add("active-option");

      // close list of options
      e.target.parentNode.parentNode.classList.toggle('open');

      // make save buttons default-blue color
      parent_popup_container.querySelector('.save-btn').classList.remove("faded-blue-bg");
      parent_popup_container.querySelector('.save-btn').classList.add("blue-bg");
    }
  })
}

// Close all custom select drop downs when user clicks outside element
// with custom select class
window.addEventListener('click', (e) => {
    for (const select of document.querySelectorAll('.custom-select-wrapper')) {
        if (!select.contains(e.target)) {
          select.classList.remove('open');
        }
    }
});
