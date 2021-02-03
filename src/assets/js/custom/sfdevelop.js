// основной слайдер
$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 6000
	});
});

// слайдер переваг
$(document).ready(function () {
	$('.slider_clients').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		pauseOnHover: true,
		autoplay: false,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 567,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
	});
});
$(document).ready(function () {
	$('.slider_advantages').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		pauseOnHover: true,
		autoplay: false,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 567,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
	});
});
