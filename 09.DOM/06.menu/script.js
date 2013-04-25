window.onload = function() {
	var listItems = document.getElementsByTagName('li');

	for (var i = 0, l = listItems.length; i < l; i++) {
		listItems[i].onclick = function() {
			if (typeof this.getElementsByTagName('ul')[0] == 'undefined'){ return 0;}

			if (this === event.target && this.getElementsByTagName('ul')[0].style.display == 'block') {
				this.getElementsByTagName('ul')[0].style.display = 'none';
			} else {
				this.getElementsByTagName('ul')[0].style.display = 'block';
			}
		}
	}
}