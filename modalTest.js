$(document).ready(function() {
	$("#ACvsDCQuestion").hide();
	
	$('#testBtn').click(function() {
		console.log('click');
		$("#ACvsDCQuestion").show();
//		$("#myModal").modal('toggle');
	});
	
	$('#close-btn').click(function() {
		$("#ACvsDCQuestion").hide();
	});
	
	$("ACvsDCQuestionModal").on("hidden.bs.modal", function() {
		$("#ACvsDCQuestion").hide();
	});
});