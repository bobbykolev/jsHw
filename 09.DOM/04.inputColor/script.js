window.onload = function() {
	document.getElementById('area').innerHTML = "Lorem ipsum amet...";

	document.getElementById("col1").onchange = function() {
		var color = document.getElementById('col1').value;
		document.getElementById('area').style.color = color;
	}
	document.getElementById("col2").onchange = function() {
		var bgColor = document.getElementById('col2').value;
		document.getElementById('area').style.backgroundColor = bgColor;
	}
}