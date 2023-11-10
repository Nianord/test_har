//слайдер
let slider = document.querySelectorAll('.earnpage-slider');
if (!slider.length == 0 && window.innerWidth < 769) {
	$('.earnpage-slider').slick({
		dots: false,
		infinite: true,
		centerMode: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: "<div class='new-slick-prev harant-icon icon-6-icon-arrow-left'></div>",
		nextArrow: "<div class='new-slick-next harant-icon icon-7-icon-arrow-right'></div>",
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		],
	});
}

//pop up 1
/*
showModalHarant();
closeModalHarant();

function showModalHarant() {
	jQuery('*[data-toggle="modal"]').click(function (e) {
		e.preventDefault();
		let th = jQuery(this);
		let th_attr = th.attr('data-target');
		if (typeof th_attr !== 'undefined' && th_attr !== false) {
			let th_mod = jQuery(th_attr);
			if (th_mod.length > 0) {
				if (jQuery('.modal-backdrop.fade.show').length == 0) {
					jQuery('body').append('<div class="modal-backdrop fade show"></div>');
				}
				th_mod.fadeIn(50).addClass('show');
				$('body').addClass('_lock');
			}
		}
	});
};
function closeModalHarant() {
	jQuery('*.close[data-dismiss="modal"]').click(function (e) {
		e.preventDefault();
		let th_cl = jQuery(this);
		let th_box = th_cl.closest('.modal.fade');
		if (th_box.length > 0) {
			jQuery('.modal-backdrop.fade.show').remove();
			th_box.fadeOut(50).removeClass('show');
			$('body').removeClass('_lock');
		}
	});
	jQuery(document).on("click", function (event) {
		let op_modal = jQuery('.modal.fade.show');
		if (op_modal.length > 0) {
			if (event.target.id === op_modal.attr('id')) {
				jQuery('.modal-backdrop.fade.show').remove();
				op_modal.fadeOut(50).removeClass('show');
				$('body').removeClass('_lock');
			}
		}
	});
	jQuery(document).keyup(function (event) {
		if (event.key === "Escape") {
			let op_modal = jQuery('.modal.fade.show');
			jQuery('.modal-backdrop.fade.show').remove();
			op_modal.fadeOut(50).removeClass('show');
			$('body').removeClass('_lock');
		}
	});

};

(function ($) {
	$.fn.harantModal = function (param = 'show') {
		if (param === 'show') {
			$('body').append('<div class="modal-backdrop fade show"></div>');
			this.fadeIn(50).addClass('show');
			$('body').addClass('_lock');
		}
	};
	if (typeof $.fn.modal === 'undefined') {
		$.fn.modal = function () {
		};
	}
})(jQuery);
*/
//pop up 2

showModalHarant();
closeModalHarant();

function showModalHarant() {
	jQuery('*[data-toggle="modal"]').click(function (e) {
		e.preventDefault();
		let th = jQuery(this);
		let th_attr = th.attr('data-target');
		if (typeof th_attr !== 'undefined' && th_attr !== false) {
			let th_mod = jQuery(th_attr);
			if (th_mod.length > 0) {
				if (jQuery('.modal-backdrop.fade.show').length == 0) {
				}
				th_mod.addClass('show');
				$('body').addClass('_lock');
			}
		}
	});
};
function closeModalHarant() {
	jQuery('*.close[data-dismiss="modal"]').click(function (e) {
		e.preventDefault();
		let th_cl = jQuery(this);
		let th_box = th_cl.closest('.modal.fade');
		if (th_box.length > 0) {
			th_box.removeClass('show');
			$('body').removeClass('_lock');
		}
	});
	jQuery(document).on("click", function (event) {
		let op_modal = jQuery('.modal.fade.show');
		if (op_modal.length > 0) {
			if (event.target.id === op_modal.attr('id')) {
				op_modal.removeClass('show');
				$('body').removeClass('_lock');
			}
		}
	});
	jQuery(document).keyup(function (event) {
		if (event.key === "Escape") {
			let op_modal = jQuery('.modal.fade.show');
			op_modal.removeClass('show');
			$('body').removeClass('_lock');
		}
	});

};

(function ($) {
	$.fn.harantModal = function (param = 'show') {
		if (param === 'show') {
			$('body').append('<div class="modal-backdrop fade show"></div>');
			this.addClass('show');
			$('body').addClass('_lock');
		}
	};
	if (typeof $.fn.modal === 'undefined') {
		$.fn.modal = function () {
		};
	}
})(jQuery);

//спойлер новый
$(".item_faq .title_faq").click(function () {
	$(this).toggleClass("active");
	$(this).next(".text_faq").slideToggle();
	return false;
});
