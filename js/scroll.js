(function ($) {
	$(function () {

		$('#up').click(function () {
			$('html, body').animate({
				scrollTop: 0
			}, 800);
			return false;
		})

	})
})(jQuery)
