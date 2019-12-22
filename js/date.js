function putDate(date){

var dateDisplay = document.querySelector(date);
        let options = {
          weekday: "long",
          day: "numeric",
          month: "long",    
        };
dateDisplay.textContent = new Date().toLocaleDateString("en-US", options); 
}
putDate(".date");

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
