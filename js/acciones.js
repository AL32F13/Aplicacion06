// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
$('#btnvibrar').on('tap', function(){	
  navigator.vibrate(1000);
}); //tap a btnvibrar 
$('#btnbeep').on('tap', function(){	
  navigator.beep(1);
$('#izquierda').on('swipe left' , 
  function () {
	  alert("barrio a la izquierda")
$('#derecha').on('swipe right' , 
  function () {
	  alert("barrio a la derecha")
});
});
});
});
});
