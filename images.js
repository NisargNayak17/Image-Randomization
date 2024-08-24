/**
		
		This file illustrates the functions and events for making images clickable,
		randomize.It includes functions for refreshing time when particular even 
		occurs.Most important. it also includes the counter and timer that increases
		and resets according to different events.
		
		@Author: Nisarg Nayak
		
	**/

// Add two events to the window - 'load' and 'change' 
 		
window.addEventListener("load", getRandomImages); // Get random images when page is loaded
window.addEventListener("load",clock);			  // Start clock counting when page is loaded
window.addEventListener("change",setRefresh);	  // Reset the time when changes occur

// Declaring and initialising the global variables

var refreshCount=0;			// The new count for images
var time2;					// The time of the clock counter			
var randomImg;				// The variable to get the random images 
var manualRefresh = 8000;	// To store the miliseconds to randomize images  

var images =['images/natureimage1.jpg','images/natureimage2.jpg','images/natureimage3.jpg',
			'images/parrotimage.jpg','images/peacockimage.jpg','images/sparrowimage.jpg',
			'images/burger1.jpg','images/pizza1.jpg','images/poutine1.jpg']		// Array to store nine images that are to be randomized


/**
*	Perform an animation when image is clicked
*	
*	@param	{event} Event
*
**/
function doAnimation(event)	{
	
	let updation = document.getElementById("text");	// Get and store the 'id' to increase the updation of images
	
	target = event.srcElement;
	target.classList.remove('rotation');
	setTimeout( () => {target.classList.add('rotation');},0);
	
	clearInterval(time2);		// clear interval of clock
	clock();					// Restart the clock 
	clearInterval(randomImg);	// clear interval of getting the random images function
	getRandomImages();			// Start again to get random images
	
	refreshCount= refreshCount+1;	// Increase the refreshCount by 1;
	
	updation.textContent = "Image has updated "+refreshCount+" time";	// Display the updated count
}

/**
*	Get random images and update the image counter
*
**/
function getRandomImages(){
	
		let image1= document.getElementById("pic1");
		let image2= document.getElementById("pic2");
		let image3= document.getElementById("pic3");
		
		let updation = document.getElementById("text");
		
		// Run a setInterval function every 8 seconds
		
		randomImg = setInterval(function(){
	
			image1.src = images[Math.floor(Math.random()*9)];
			image2.src = images[Math.floor(Math.random()*9)];
			image3.src = images[Math.floor(Math.random()*9)];
	
			refreshCount= refreshCount+3;	// Increase the image counter by 3
			
			updation.textContent= "Image has updated "+refreshCount+" time";
			
		},manualRefresh);
}

/**
*	Randomize images manually
*
**/
function randomizeImages(){
	
	let output = document.getElementById("randomize");	// Get and store the button 
	let updation = document.getElementById("text");
	
	// Get the instant random image 
	
	output.value = setInterval(function(){
		
		let image1 = document.getElementById("pic1");
		let image2 = document.getElementById("pic2");
		let image3 = document.getElementById("pic3");
		
		image1.src = images[Math.floor(Math.random()*9)];
		image2.src = images[Math.floor(Math.random()*9)];
		image3.src = images[Math.floor(Math.random()*9)];
		
		clearInterval(output.value);
		
		clearInterval(time2);
		clock();
		clearInterval(randomImg);
		getRandomImages();
		
	},0);
	
	refreshCount= refreshCount+3;
	updation.textContent= "Image has updated "+refreshCount+" time";
}

/**
*	Showing a box with an error message
*
**/
function showCustomAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.style.position = "fixed";
    alertBox.style.top = "40px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translate(-50%)";
    alertBox.style.backgroundColor = "white";
    alertBox.style.border = "10px solid red";
    alertBox.style.padding = "30px";
    alertBox.style.width = "250px"; // Fixed width for the alert box
    alertBox.style.textAlign = "center"; // Center-align text inside alert box
    alertBox.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)"; // Optional: Add shadow for better visibility
    
    // Create message element
    const messageElement = document.createElement("p");
    messageElement.style.margin = "0"; // Remove default margin
    messageElement.style.paddingBottom = "10px"; // Space between message and button
	messageElement.style.fontSize = "1em";
    messageElement.innerText = message;
    
    // Create button element
    const button = document.createElement("button");
	button.innerText = "OK";
    button.style.display = "block"; // Make button block-level to align below message
    button.style.margin = "5 auto"; // Center the button
    button.style.padding = "10px 20px";
    button.style.border = "1px solid black";
    button.style.backgroundColor = "#f0f0f0";
    button.style.cursor = "pointer";
    button.onclick = () => alertBox.remove(); 
    // Append message and button to alert box
    alertBox.appendChild(messageElement);
    alertBox.appendChild(button);
    
    // Append alert box to document body
    document.body.appendChild(alertBox);
}

/**
*	Input the miliseconds between 500-10000 and reset the clock counter
*
**/
function setRefresh(){
	
	let input = document.getElementById("refresh_input").value;	// Get and store the value from the inputbox
		
	// Check the condition for the input
	
	if(input<=10000 && input >=500){
		
		manualRefresh = input;	// Set the input to the manualRefresh
		
		clearInterval(time2);	
		clock();
		clearInterval(randomImg);
		getRandomImages();
	}
	else{
		showCustomAlert("Not in range");	// alert the user if condition is not satisfied
	}	
}

/**
*	Create the clock countdown from the 'manualRefresh' seconds to 'zero' seconds
*
**/
function clock(){
	
	let timecontent = document.getElementById("timer");	// Get the html element to display countdown
	
	let sec = (manualRefresh/1000);	// covert the miliseconds to seconds and store in 'sec' 
	
	// Get the count down by 1 every second and set the color appropriate to the seconds close to zero
	
	time2 = setInterval(function(){
		
		timecontent.innerHTML = sec;
		sec--;		// Decrease by 1;
		
		if(sec<=0){
			sec=(manualRefresh/1000);		// Restart the coundown from 'manualRefresh' value;
		}
		
		if(sec<= ((manualRefresh/1000)/2) && sec>= ((manualRefresh/1000)/3)){
			
			timecontent.style.backgroundColor= "yellow";
			timecontent.style.color = "black";
		}
		else if(sec<= ((manualRefresh/1000)/3) && sec>=1){
			
			timecontent.style.backgroundColor= "red";
			timecontent.style.color = "white";
		}
		else{
			
			timecontent.style.backgroundColor= "green";
			timecontent.style.color = "white";
		}
		
	},1000);
}