// Returns a random Hex Color
function RandomColor()
	{
		var c = '#' + Math.floor(Math.random()*16777215).toString(16);
		return c;
	}
