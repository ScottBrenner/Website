$(document).ready(function() {
	$("img").fadeIn("slow");
	$(".name").fadeIn("slow");
	$(".code").fadeIn("slow");
	$(".photography").fadeIn("slow");
	$(".resume").fadeIn("slow");

	$(".code").click(function() {
		window.location="https://github.com/scottbrenner";
	});

	$(".photography").click(function() {
		window.location="https://500px.com/ScottBrenner";
	});

	$(".resume").click(function() {
		window.location.href="resume.html";
	});
});