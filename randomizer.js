var pageArray;
var checkable;

function firstrandom(number)
{
	var andomize = ((Math.floor(Math.random() * 8)) + 1);

	if(sessionStorage.getItem("lastTwoPages") == null)
	{
		pageArray = new Array();
	}
	else
	{
		pageArray = JSON.parse(sessionStorage.getItem("lastTwoPages"));
	}

	switch(pageArray.length)
	{
		case 0:
			pageArray[0] = number;
			checkable = false;
			break;

		case 1:
			if(number != pageArray[0])
			{
				pageArray[1] = number;
				checkable = true;
			}
			else
			{
				checkable = false;
			}

			break;
		
		case 2:
			if(number != pageArray[1])
			{
				pageArray[0] = pageArray[1];
				pageArray[1] = number;
			}

			checkable = true;
			break;
		
		default:
			checkable = false;
			console.log("wrong page array length");
			break;
	}

	if(checkable == true)
	{
		secondLastPage = pageArray[0];

		while ((andomize == number) || (andomize == secondLastPage))
		{
			andomize = ((Math.floor(Math.random() * 8)) + 1);
		}

		if((number == 8) || (number ==  7))
		{
			while((andomize == 8) || (andomize == 7) || (andomize == secondLastPage))
			{
				andomize = ((Math.floor(Math.random() * 8)) + 1);
			}
		}
		else if((number == 1) || (number ==  2))
		{
			while((andomize == 1) || (andomize == 2) || (andomize == secondLastPage))
			{
				andomize = ((Math.floor(Math.random() * 8)) + 1);
			}
		}
	}
	else
	{
		while ((andomize == number))
		{
			andomize = ((Math.floor(Math.random() * 8)) + 1);
		}

		if((number == 8) || (number ==  7))
		{
			while((andomize == 8) || (andomize == 7))
			{
				andomize = ((Math.floor(Math.random() * 8)) + 1);
			}
		}
		else if((number == 1) || (number ==  2))
		{
			while((andomize == 1) || (andomize == 2))
			{
				andomize = ((Math.floor(Math.random() * 8)) + 1);
			}
		}
	}

	if(andomize != 1) 
	{
		document.getElementById("reseter").href = andomize + ".html";
	}
	else
	{
		document.getElementById("reseter").href = "index.html";
	}
	
	sessionStorage.setItem("lastTwoPages", JSON.stringify(pageArray));
}