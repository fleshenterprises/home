function firstrandom(number)
{
	var andomize = ((Math.floor(Math.random() * 9)) + 1);
	
	while (andomize == number)
	{
		andomize = ((Math.floor(Math.random() * 9)) + 1);
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