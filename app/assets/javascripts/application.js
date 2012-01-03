// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).ready(function(){
	var egg_protein = "6.3"
	var egg_fat = "5.3"
	var egg_carbo = "0.56"
	var calories_of_1_egg = ((egg_protein * 4)+(egg_fat * 9)+(egg_carbo * 4))

	$("#find").click(function(){
		var no_eggs = $("#eggs").val();
		var total_calories = (no_eggs * calories_of_1_egg);
		var msg = "Total calores for "+no_eggs+" eggs : ";
		msg += total_calories.toFixed(2);
		$("#result").html(msg)
	});
});