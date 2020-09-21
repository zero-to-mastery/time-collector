function putDate(date){
var dateDisplay = document.querySelector(date);
        let options = {
          weekday: "long",
          day: "numeric",
          month: "long",    
        };
var dateValue = new Date().toLocaleDateString("en-US", options); 

dateDisplay.textContent = "Current date: " + dateValue;
}
putDate(".date");
putDate(".date-modal")

function putTime(time){
var timeDisplay = document.querySelector(time);
		let options = {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
		      hour: "numeric",
          minute: "2-digit",
		};

	var timeValue = new Date().toLocaleDateString("en-US", options); 

	timeDisplay.textContent = "Page Loaded: " + timeValue.slice(9,);
}
putTime(".time");

