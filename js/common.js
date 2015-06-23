$(document).ready(function() {

	$('.js-slick').slick({
		slidesToShow: 3,
		slidesToScroll: 1
	});
	$('.js-box-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-box-small'
	});
	$('.js-box-small').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.js-box-big',
		arrows: false,
		dots: false,
		centerMode: false,
		focusOnSelect: true
	});
	$('.js-box-small .box__slide').on('click', function() {
		$('.box__slide').removeClass('is-active');
		$('.box__slide').removeClass('is-first');
		$(this).addClass('is-active');
	});
});