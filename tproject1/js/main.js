

var imgCnt = 0;
var myImg = document.querySelector('img');
var clicked = false;
var myInterval;

myImg.onclick = function() {
	
	if( clicked ==  false )
	{
		myInterval = setInterval(function () 
				{
					if( ++imgCnt == 17 )
					{
						imgCnt = 1;
					}
					var imgStr = 'images/p' + imgCnt + ".jpg";
					myImg.setAttribute('src', imgStr);
				}, 100);
		clicked = true;
	}
	else
	{
		clearInterval(myInterval);
		clicked = false;
	}

}


var myButton = document.querySelector('button[id="change-user"]');
var myHeading = document.querySelector('h1');

function setUserName() {
	  var myName = prompt('Please enter your name.');
	  localStorage.setItem('name', myName);
	  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}