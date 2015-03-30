$(function() {

	function setTo(type) {
		console.log('setting to %s', type);
		$("li[data-value=" + type + "]").click();
	}

	$(document).keypress(function(e) {
		if (e.charCode === 111) {
			setTo('public');
		} else if (e.charCode === 117) {
			setTo('family');
		}
	});
});
