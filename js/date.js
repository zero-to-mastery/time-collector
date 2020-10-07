function putDate(date) {
  const dateDisplay = document.querySelector(date);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const dateValue = new Date().toLocaleDateString("en-US", options);

  dateDisplay.textContent = "Current date: " + dateValue;
}

putDate(".date");
putDate(".date-modal");

function putTime(time) {
  const timeDisplay = document.querySelector(time);
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "numeric",
    minute: "2-digit",
  };

  const timeValue = new Date().toLocaleDateString("en-US", options);

  timeDisplay.textContent = "Page Loaded: " + timeValue.slice(9);
}

putTime(".time");
