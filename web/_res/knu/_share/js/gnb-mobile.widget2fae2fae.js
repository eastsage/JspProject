$(function () {
	$(".btn-menu").click(function (e) {
		e.preventDefault();
		mMenuOpen();
		//$('.m-gnb ul li a').removeClass('active selected has-dep03-open');
		$(".dep1 > li > a.active").addClass('selected').next().show();
		$('.main .dep1 > li').first().children('a').addClass('selected').trigger('click');
	});

	$(".slide-close").click(function () {
		mMenuClose();
		$(".dep1 > li > a.selected").removeClass('selected');
	});

	$(window).resize(function () {
		if ($(window).width() > 1024) {
			$(".slideMenu").hide();
			$(".slide-close").hide();
			$("body").removeClass("over-hidden");
		}
	});

	function mMenuOpen() {
		$(".slideMenu").stop(true, true).animate({
			right: "0"
		}, 300);
		$(".slideMenu").show();
		$(".slide-close").show();
		$("body").addClass("over-hidden");
	};

	function mMenuClose() {
		$(".slideMenu").stop(true, true).animate({
			right: "-100%"
		});
		$(".slideMenu").hide(100);
		$(".slide-close").hide();
		$("body").removeClass("over-hidden");
	}

	$(".dep1 > li > a").click(function (e) {
		if($(this).next('.dep2').length > 0){
			e.preventDefault();
			if ($(this).next().is(':hidden')) {
				$(this).parent().find(".dep2").show().siblings(".dep2").hide();
				$(this).addClass("selected");
				$(this).next(".dep2").show();
				$(this).parent().siblings().find(".dep2").hide();
				$(this).parent().siblings().find(".selected").removeClass("selected");
			}
		}
	});

	$(".dep2 > li > a").click(function (e) {
		if($(this).next('.dep3').length > 0){
			e.preventDefault();
			if ($(this).next().is(':hidden')) {
				$(this).parent().siblings().find('.has-dep03-open').removeClass("has-dep03-open").addClass("has-dep03-close");
				$(this).removeClass("has-dep03-close").addClass("has-dep03-open");
				$(this).parent().find(".dep3").slideUp().siblings(".dep3").slideDown();
				$(this).addClass("selected");
				$(this).next(".dep3").slideDown();
				$(this).parent().siblings().find(".dep3").slideUp().siblings('a');
				$(this).parent().siblings().find("> a").removeClass("selected");
			} else {
				$(this).next(".dep3").slideUp();
				$(this).removeClass("has-dep03-open").addClass("has-dep03-close");
			}
		}
	});

	$(".dep3 > li > a").click(function () {
		$(".m-gnb .dep3 > li > a").removeClass('active');
		$(this).addClass('active');
	});

	$(function () {
		var hasDep = $(".m-gnb .dep3").parents(".dep2 > li").find("a:first");

		hasDep.addClass("has-dep03-close");

		$(".m-gnb .dep1 > li > a.active").parents(".dep1 > li").find(".dep2").show();
		$(".m-gnb .dep3 > li > a.active").parents(".dep2 > li").find('> a').addClass('has-dep03-open');
		$(".m-gnb .dep3 > li > a.active").parents(".dep2 > li").find(".dep3").show();
		$(".m-gnb .dep3 > li > a.active").parents(".dep2 > li").find("a:first").toggleClass("has-dep03-close", "has-dep03-open");

	});
});