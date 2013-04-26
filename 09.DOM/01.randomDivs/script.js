window.onload = function() {

	document.getElementById("enter").onclick = function() {

		document.getElementById('wrapper').innerHTML = "";//clear divs on execute
		var randDivs = getRandomNumber(1, 30); //we choose the boundaries
		var wrapper = document.getElementById("wrapper");
		for (var i = 0; i < randDivs; i++) {
			var div2 = document.createElement("div"),
				theDiv = wrapper.appendChild(div2),
				strong = document.createElement("strong"),
				txt = document.createTextNode("div");
			theDiv.style.borderWidth = getRandomNumber(1, 20) + "px";
			theDiv.borderColor = getRandomColor();
			theDiv.style.borderStyle = "solid";
			theDiv.style.borderRadius = getRandomNumber(1, 20) + "px";
			theDiv.style.backgroundColor = getRandomColor();
			theDiv.style.color = getRandomColor();
			theDiv.style.marginTop = getRandomNumber(20, window.innerHeight) + "px"; //the strat is not zero because of the button
			theDiv.style.marginLeft = getRandomNumber(40, window.innerWidth) + "px"; //the strat is not zero because of the button
			theDiv.style.width = getRandomNumber(20, 100) + "px";
			theDiv.style.height = getRandomNumber(20, 100) + "px";
			theDiv.style.position = "absolute";
			strong.appendChild(txt);
			theDiv.appendChild(strong);
		}
	}

	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	function getRandomColor() {
		return "#" + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);//random generator for color pattern "#rrggbb"
	}
}