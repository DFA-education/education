$(document).ready(function() {
	$("#myCarousel").hide();
	$('#testBtn').click(function() {
		console.log('click');
		$("#myCarousel").show();
//		$("#myModal").modal('toggle');
	});
});