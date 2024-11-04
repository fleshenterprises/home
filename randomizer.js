function firstrandom(number)
{
	var andomize = ((Math.floor(Math.random() * 6)) + 1);
	
	while (andomize == number)
	{
		andomize = ((Math.floor(Math.random() * 6)) + 1);
	}

	andomize = andomize + ".html";

	if (andomize != "1.html") 
	{
		document.getElementById("reseter").href = andomize;
	}

	else
	{
		document.getElementById("reseter").href = "index.html";
	}
}