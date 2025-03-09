function firstrandom(number)
{
	var andomize = ((Math.floor(Math.random() * 8)) + 1);
	
	while (andomize == number)
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

	if (andomize != 1) 
	{
		document.getElementById("reseter").href = andomize + ".html";
	}
	else
	{
		document.getElementById("reseter").href = "index.html";
	}
}