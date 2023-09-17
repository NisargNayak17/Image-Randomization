/**
		
		This file illustrates the functions and events for making images clickable,
		randomize.It includes functions for refreshing time when particular even 
		occurs.Most important. it also includes the counter and timer that increases
		and resets according to different events.
		
		@Author: Nisarg Nayak, 001231775
		
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
	
	/*refresher*/
	
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
		
		/* clear interval */
		
	},0);
	
	refreshCount= refreshCount+3;
	updation.textContent= "Image has updated "+refreshCount+" time";
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
		
		/* else*/
	}
	else{
		alert("Not in range");	// alert the user if condition is not satisfied
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