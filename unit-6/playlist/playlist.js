/* playlist.js */

window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;


	//loadPlaylist();

	
}



function handleButtonClick() {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	var tem = document.createElement("li");
	    tem.setAttribute=("id", "songName");
		tem.innerHTML = songName;
		//var mm=document.getElementById("songName");
if (songName == "") {
	 	alert("Please enter a song");
	 }
	 else {
	 	alert("Adding " + songName);
	 }
		

		
		var ul = document.getElementById("playlist");
		ul.appendChild(tem);
		//save(songName);
}

	 





		// // for Ready Bake
		


