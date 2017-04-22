
function showCurrentTime() {var today = new Date();  
	var day = today.getDay();  
	var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];  
	console.log("Today is : " + daylist[day] + ".");  
	var hour = today.getHours();  
	var minute = today.getMinutes();  
	var second = today.getSeconds();  
	var prepand = (hour >= 12)? " PM ":" AM ";  
	hour = (hour >= 12)? hour - 12: hour;  
	if (hour===0 && prepand===' PM ')   
	{   
		if (minute===0 && second===0)  
		{   
			hour=12;  
			prepand=' Noon';  
		}   
		else  
		{   
			hour=12;  
			prepand=' PM';  
		}   
	}   
	if (hour===0 && prepand===' AM ')   
		{   
		if (minute===0 && second===0)  
		{   
			hour=12;  
			prepand=' Midnight';  
		}   
		else  
		{   
			hour=12;  
			prepand=' AM';  
		}   
	}   

	var myTime = daylist[day] + " " + hour + prepand + " : " + minute + " : " + second;
	console.log(myTime);  
	document.write(myTime);
	var iValue = document.getElementById("cTime").innerHTML;
	console.log(iValue);
}

function print_current_page()
{
	window.print();
}

function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

	setInterval(function () 
	{
 		text = text[text.length - 1] + text.substring(0, text.length - 1);
  		textNode.data = text;
	}, 500);
}

function isLeapYear()
{
	year = window.prompt("Input a Year : ");  
	x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);  
	var myMessage = year + " is " + (x ?"" : "not") + " a leap year";
	alert(myMessage);
}

function userNumberGuess()
{
	while(1)
	{
		userGuess = window.prompt("Guess a number between 1 and 10 : ");  
	
		if( userGuess == 0 )
		{
			break;
		}

		var chosen = Math.floor((Math.random() * 10) + 1);
		if( chosen == userGuess )
		{
			alert("Congrat!... Your guess (" + userGuess + ") was right.");
		}
		else
		{
			alert("Oops!... Your guess (" + userGuess + ") and chosen (" + chosen + ") Try again.");
		}
	}
}

function checkForSunday()
{
	//var = window.prompt("Input a Year : ");  
	var year = 2019;
	var myStr = "";
	for(year = 2014; year <= 2050; year++)
	{
		var myDate = new Date(year, 0, 1);
		//console.log(myDate.toString());
		var myDay  = myDate.getDay();
        if( !myDay )
        {
        	myStr += year + " ";
        }
	}

    if( myStr != null )
    {
    	myStr = "Following year(s) start(s) with Sunday: " + myStr;
    }
    else
    {
    	myStr = "Thers is no year in range";
    }
	alert(myStr);
}

function nextChristmas()
{
	var toDay = new Date();
	var toDaySec = toDay.getTime();
	var thisYear = toDay.getFullYear();
	if( toDay.getDate() == 25 && toDay.getMonth() == 11 )
	{
		thisYear++;
	}
	var cDay = new Date(thisYear, 11, 25);
	var cDaySec = cDay.getTime();

	var dayLeft = (cDaySec - toDaySec) / (1000 * 60 * 60 * 24)
	alert(Math.ceil(dayLeft));
}

function handleNumbers(m_mode)
{
	var fNum = document.getElementById("firstNum").value;
	var sNum = document.getElementById("secondNum").value;
	var res = 0;
	
	
	switch(m_mode)
	{
		case 0:
			res = fNum + sNum;
			break;
		case 1:
			res = fNum - sNum;
			break;
		case 2:
			res = fNum * sNum;
			break;
		case 3:
			res = fNum / sNum;
			break;
		default:
			return;
	}

	document.getElementById("f_result").innerHTML = res;
}

function convertTemprature()
{
	var temp = document.getElementById("tempratureID").value;
	var unit_types = document.getElementsByName('tempUnit');
	var unit, value;
	for (var i = 0; i < unit_types.length; i++) {
    	if (unit_types[i].type === 'radio' && unit_types[i].checked) {
        	unit = unit_types[i].id; 
        	break;      
    	}
	}
	var res = "";
	switch (unit) {
		case "Celsius":
			value = (temp - 32) / 1.8;
	 		res = temp + "\xB0F is " + value + "\xB0C";
			break;
		case "Fahrenheit":
			value = 32 + 1.8 * temp;
	 		res = temp + "\xB0C is " + value + "\xB0F";
			break;
		default:
			return;
	}
	document.getElementById("temp_result").innerHTML = res;
}

function openNewUrl()
{
	var uri = document.getElementById("new_urlID").value;
	console.log(uri);
	//window.open(uri, "_blank");
	alert(document.URL);
}

function check_palin()
{
  	var o_text = document.getElementById("palin_t_id").value;
  	var p_text =  o_text;
  	p_text = p_text.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');  

	if( p_text != null )
	{
  		var res = o_text + " is";
		var text_p = p_text.split("").reverse().join("");
		if( p_text != text_p )
		{
			res += " not";
		}
		res +=  " palindrome.";
	}
	document.getElementById("palin_result").innerHTML = res;
}

function getFiles(dir){
    fileList = [];
    var fs = require('fs');

    var files = fs.readdirSync(dir);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        if (!fs.statSync(name).isDirectory()){
            fileList.push(name);
        }
    }
    return fileList;
}
