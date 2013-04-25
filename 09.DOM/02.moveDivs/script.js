window.onload = function() {

	document.getElementById("enter").onclick = function() {

		document.getElementById('wrapper').innerHTML = "";//clear divs on execute
		for (var i = 0; i < 5; i++) {
			var div2 = document.createElement("div"),
				wrapper = document.getElementById("wrapper"),
				theDiv = wrapper.appendChild(div2);
			theDiv.style.position = "absolute";
			theDiv.style.borderRadius = "50%";
			theDiv.style.backgroundColor = getRandomColor();
			theDiv.style.width = "50px";
			theDiv.style.height = "50px";
			theDiv.style.marginTop = "200px"; 
			theDiv.style.marginLeft = "200px"; 
		}

		var divs = wrapper.childNodes,
			angle = 0,
			radius = 100;

		function animateDivs() {
			for (j = 0; j < 5; j++) {
				divs[j].style.left = Math.cos(angle + 2 * Math.PI / 5 * j) / radius * 10000 + 'px';
				divs[j].style.top = Math.sin(angle + 2 * Math.PI / 5 * j) / radius * 10000 + 'px';
			}
			if (angle == 360) {
				angle = 0;
			}
			angle = angle + 1;

			setTimeout(animateDivs, 100);
		}
		animateDivs();
	}

	function getRandomColor() {
		return "#" + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6); //random generator for color pattern "#rrggbb"
	}
}