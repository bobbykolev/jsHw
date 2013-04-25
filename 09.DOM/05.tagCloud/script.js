window.onload = function() {

	document.getElementById("enter").onclick = function() {
		document.getElementById('wrapper').innerHTML = "";
		var arr = [];
		var counter = 0;
		var input = document.getElementById("area").value;
		if (input) {
			 arr = input.split(",");
		}else{
			 arr = ["wordpress", "joomla", "sitefinity", "drupal", "wordpress", "wordpress", "joomla", "sitefinity", "wordpress"];
		}
	
		arr = arr.sort();
		for (var i = 0, l = arr.length; i < l; i++) {
			if (arr[i] === arr[i + 1]) {
				counter += 2;
			} else {
				var listItem = document.createElement("li"),
					anchor = document.createElement("a"),
					wrapper = document.getElementById("wrapper"),
					li = wrapper.appendChild(listItem),
					a = li.appendChild(anchor)
					txt = document.createTextNode(arr[i]);
				a.appendChild(txt);
				a.style.fontSize = (14 + counter) + "px";
				a.style.color = getRandomColor();
				a.setAttribute('href','#');
				counter = 0;
			}
		}
	}

	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	function getRandomColor() {
		return "#" + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6); //random generator for color pattern "#rrggbb"
	}
}