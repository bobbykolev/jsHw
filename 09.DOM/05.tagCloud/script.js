window.onload = function() {

	document.getElementById("enter").onclick = function() {
		document.getElementById('theUl').innerHTML = "";
		//document.getElementsByTagName('section')[0].innerHTML = "";
		if (document.getElementsByTagName('section')[0]) {
			document.getElementsByTagName('section')[0].parentNode.removeChild(document.getElementsByTagName('section')[0]);
		}
		var arr = [];
		var counter = 0;
		var input = document.getElementById("area").value;
		if (input) {
			arr = input.split(",");
		} else {
			//arr = ["wordpress", "joomla", "sitefinity", "drupal", "wordpress", "wordpress", "joomla", "sitefinity", "wordpress"];
			arr = ["cms", "javascript", "js", "ASP.NET MVC", ".net", ".net", "css", "wordpress", "xaml", "js", "http", "web", "asp.net", "asp.net MVC", "ASP.NET MVC", "wp", "javascript", "js", "cms", "html", "javascript", "http", "http", "CMS"];
		}

		arr = arr.sort();
		for (var i = 0, l = arr.length; i < l; i++) {
			if (arr[i].toLowerCase() === arr[i + 1].toLowerCase()) {
				counter += 3;
			} else {
				var listItem = document.createElement("li"),
					anchor = document.createElement("a"),
					theUl = document.getElementById("theUl"),
					li = theUl.appendChild(listItem),
					a = li.appendChild(anchor),
					txt = document.createTextNode(arr[i]);
				a.appendChild(txt);
				a.style.fontSize = (14 + counter) + "px";
				a.style.color = getRandomColor();
				a.setAttribute('href', '#');
				a.style.marginLeft = getRandomNumber(5, 20) + "px";
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