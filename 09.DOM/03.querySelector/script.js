window.onload = function() {
    document.getElementById("enter").onclick = function() {
    	
    	document.getElementById('wrapper').innerHTML = "";//clear divs on execute
        var wrapper = document.querySelectorAll('body>#wrapper.one')[0];
        var text = document.createTextNode(" It works... ");
        wrapper.appendChild(text);
        wrapper.style.color = "#FFFFFF";
        document.body.style.backgroundColor = "#000000";
    }
}