// menu header
function mobileMenu() {
	const windowWidth = $(window).width();
	const headerHeight = $('.header').height();
	let menuBox = $('.menu-items');

	$('.menu-hamburger').click(function () {
		$(this).siblings('.menu-overlay').addClass('active');
		$(this).siblings('.menu-items').addClass('active');
		$(this).addClass('menu-open');
		$('.menu-close').addClass('active');
	});

	$('.jsClose-mobileMenu').click(function () {
		$('.menu-items').removeClass('active');
		$('.menu-hamburger').removeClass('menu-open');
		$('.menu-close').removeClass('active');
	});

	if (windowWidth < 992) {
		menuBox.css('top', headerHeight);
		menuBox.css({ height: `calc(100% - ${headerHeight}px)` });

		$('.menu-parent i').click(function () {
			$(this)
				.toggleClass('active')
				.parent()
				.siblings('.menu-sub')
				.slideToggle();
		});
	}

	// $(document).mouseup(function (e) {
	// 	if (
	// 		!$('.menu-items').is(e.target) &&
	// 		$('.menu-items').has(e.target).length === 0
	// 	) {
	// 		$('.menu-items').siblings('.menu-overlay').removeClass('active');
	// 		$('.menu-items').removeClass('active');
	// 	}
	// });
}

function activeFixedHeader() {
	var headerHeight = $('.header').innerHeight();
	var windowWidth = $(window).width();

	$(window).scroll(function () {
		var windowScrollTop = $(window).scrollTop();
		var firstSection = $('main div,main section').first().innerHeight();
		var bannerCalc = firstSection - headerHeight;

		if (windowScrollTop) $('.header').addClass('active');
		else $('.header').removeClass('active');
	});

	if (windowWidth < 992) {
		$('main').css('margin-top', headerHeight);
	}
}

function scrollReveal() {
	const sr = ScrollReveal({
		distance: '100px',
		// delay: 500,
		duration: 1500,
		origin: 'bottom'
	});

	sr.reveal('.title-component', { origin: 'top' });

	sr.reveal('.section-banner', {
		distance: '0',
		duration: 1000,
		easing: 'ease'
	});

	sr.reveal('.section-introduce .row', {});

	sr.reveal('.section-introduce .title-component', {
		origin: 'bottom',
		scale: 0.8
	});

	sr.reveal('.section-product .row', {});

	sr.reveal('.js--gallery-slide', {});

	sr.reveal('.section--col .row', {
		scale: 0.8
	});

	sr.reveal('.news--list', {});

	sr.reveal('.swiperPartner', {
		scale: 0.8
	});
}

function scrollToTop() {
	$('#scrollToTop .event-onClick').click(function () {
		$([document.documentElement, document.body]).animate(
			{
				scrollTop: $('html,body').offset().top
			},
			1000
		);
	});
}

$(document).ready(function () {
	$(window).scrollTop(0);
	mobileMenu();
	activeFixedHeader();
	scrollToTop();
});
