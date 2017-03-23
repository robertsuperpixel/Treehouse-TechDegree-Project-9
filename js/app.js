/*----------  Close alert box  ----------*/
$(function() {
	$('#close-btn').click(function() {
		$(this).parent().parent().fadeOut('slow');
	});
});