//Попытка превратить сайт в игру
var zergCounter = 0;
for(let i of document.querySelectorAll(".zerg")){
	zergCounter++;
} 
/*-------------------------------------------------------*/
function blast(){
	const blastAudio = new Audio('audio/blast.mp3');
	blastAudio.play();
}
function win(){
	const winAudio = new Audio('audio/win.mp3');
	winAudio.play();
}
/*-------------------------------------------------------*/
function reload() {
	document.location.reload();
}
//Вот он мой листенер
document.querySelector('#refresh').addEventListener('click', reload)
/*-------------------------------------------------------*/
//Листенер на клик
function deleteZerg(event){
	event.currentTarget.remove();
	zergCounter--
    if (zergCounter == 0) {
    	win();
    	document.getElementById("btnBack").innerHTML = "Come back in triumph!"; //меняет надпись на кнопке
    }else{
    	blast(); 
    }
}
const zerg = document.querySelectorAll('.zerg');
zerg.forEach(zergItem => {
	zergItem.addEventListener("click", deleteZerg);
});

//Методом онклик
/*document.onclick = function( e ) {
  var elm = e.target;
  if(elm.className.includes("zerg")) {
    elm.remove();
    zergCounter--
    if (zergCounter == 0) {
    	win();
    }else{
    	blast(); 
    }
	}
}*/
/*-------------------------------------------------------*/
//листенер на пресс


