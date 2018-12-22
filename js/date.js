function putDate(date){

var dateDisplay = document.querySelector(date);
        let options = {
          weekday: "long",
          day: "numeric",
          month: "long"
        };
dateDisplay.textContent = new Date().toLocaleDateString("en-US", options); 
}
putDate(".date");