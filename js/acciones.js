// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	 $('#btnvibrar').on('tap',function(){
		 navigator.vibrate(1000);
	 });//tap a btnvibrar
	 
	 $('#btnbeep').on('tap',function(){
		 navigator.notification.beep(1);
	 });//tap a btnbeep
	 
	 
	 $('#izquierda').on('swipeleft',function(){
	 alert("barrio a la izquierda");
     })//tap a izquierda
	 
	  $('#derecha').on('swiperight',function(){
	 alert("barrio a la derecha");
     })//tap a derecha
	 
	 document.addEventListener("pause", function(){
     $('#listado').append("<p> se pauso </p>" );
 });
	
	 document.addEventListener("resume", function(){
     $('#listado').append("<p> se reinicio </p>" );
}); 
 
  $(window).on('orientationchange1',function(e){
  $('#listado').append("<p> orientacion:" + e.orientation +  "</p>" );
});
});
});
