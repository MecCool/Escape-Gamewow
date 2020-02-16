function voleur(){
	if (document.getElementById("case5").checked){ 
		alert("Vous avez trouvé le voleur, maintenant préparez-vous..");  
		window.location.replace("file:///F:/Escape%20game/Salles/Jardin%20d%C3%A9truit/RuinesJardin.html");
	}
	else {
		alert("Mauvais choix..")
		window.location.replace("file:///F:/Escape%20game/Salles/GAME%20OVER/GameOver.html");
	}
}

