$(document).ready(function() {
	$("img").fadeIn("slow");
	$(".name").fadeIn("slow");
	$(".projects").fadeIn("slow");
	$(".photography").fadeIn("slow");
	$(".resume").fadeIn("slow");

	$(".projects").click(function() {
		window.location.href="projects.html";
	});

	$(".photography").click(function() {
		window.location="https://500px.com/ScottBrenner";
	});

	$(".resume").click(function() {
		window.location.href="resume.html";
	});
});