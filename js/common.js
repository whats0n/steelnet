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

	//select
	//select
	 $(document).click(function() {
        $(".js-select").removeClass("is-active");
	      $(".js-select-list").slideUp(100);
    });
    
	// select list
    $("body").on("click",".js-select",function(event) {
        event.stopPropagation();
    });
    $("body").on("click",".js-select-text",function(event) {
    	var select = $(this).parents(".js-select");
        if (select.hasClass("is-active")) {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
        }
        else {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
            select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
        }
       
    });

    $("body").on("click",".js-select-list li",function() {
        var val = $(this).attr("data-val");
        var text = $(this).text();
        var select = $(this).parents(".js-select");
        var selectList = $(this).parents(".js-select-list");
        select.find(".js-select-text").text(text);
        select.find("option").removeAttr("selected");
        select.find('option[value="'+val+'"]').attr("selected", "selected");
        selectList.find("li").removeClass("is-active");
        $(this).addClass("is-active");
        select.removeClass("is-active");
        selectList.slideUp(100);
        return false;
        
    });

    //popup-form
    $('.js-popup-btn').on('click', function() {
    	$('.js-popup').addClass('is-active');
    	return false;
    });
    $('.js-popup').each(function() {
    	$('.overlay').on('click', function() {
    		$('.js-popup').removeClass('is-active');
    	});
    });
});