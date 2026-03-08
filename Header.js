document.querySelector('#header');
window.addEventListener('load', function(){
	header.innerHTML = `
	<a href="index.html"><button class="B1">Home</button></a>
			<a href="About.html"><button class="B1">About</button></a>
			<div class="dropdown">
				<a href="Instullations.html"><button class="B1">Instullations</button></a>
				<div class="dropdown-content">
					<a href="digitalaviary.html">Digital Aviary</a>
					<a href="conversation.html">Conversation</a>
					<a href="Envrionmental Orchestra.html">Envrionmental Orchestra</a>
				</div>
			</div> 
					
			<div class="dropdown">
				<a href="Experiments.html"><button class="B1">experiments</button></a>
				<div class="dropdown-content">
					<a href="biodatasonification.html">Biodata Sonification</a>
					<a href="avgrec.html">Average Field Recording</a>
				</div>
			</div>
			<a href="About-the-site.html"><button class="B1">About This Website</button></a>
			<a href="https://youtube.com/@samrowesoundart?feature=shared"target="_blank"><button class="B1">Youtube</button></a>`;
			
	
});