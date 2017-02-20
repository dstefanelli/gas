$(function () {

    var breakpoint = $(window).width(),
        $body = $('body'),
        isRibbon = $('#s4-ribbonrow:visible'),
        $navMain = $('.nav-main'),
		$secondNav = $('.second-level-navigation'),
		$secondLink = $('.second-level-navigation > li > a'),
        $thirdM = $('.third-level-navigation.active .metro-menu > div > .column'),
        Popup = {};

    //  POPUPS
    Popup.open = function (id) {
        $("#" + id).addClass("active");
        $('body').addClass("hidde-scroll");
    }
    Popup.close = function (id) {
        $("#" + id).removeClass("active");
        $('body').removeClass("hidde-scroll");
    }

    //  OPEN MOBILE NAVIGATION
    $('.open-menu').on('click', function () {
        var $this = $(this);
        $this.parent().toggleClass('active').siblings('.nav-main').toggleClass('active');
        $body.toggleClass('hidde-scroll');
    });

    // OPEN FIRST LEVEL NAVIGATION
    $('body').on('click', '.first-level', function (e) {
        e.preventDefault();
        var $this = $(this),
			query = $this.data('query');  
		//$secondLink.removeClass('active');
        $this.parent().find('#' + query).toggleClass("active");
		
        $this.parents().siblings().find($secondNav).removeClass("active");
        $this.parents().siblings().find($secondLink).removeClass("active");
    });

    // OPEN SECOND LEVEL NAVIGATION
    $('body').on('click', '.second-level', function (e) {
        e.preventDefault();
        var $this = $(this),
			query = $this.data('query');

        $this.addClass('active');
        $this.parent().find('#' + query).slideDown("fast");
		$this.parents().siblings().find('.second-level').removeClass('active');
        $this.parents().siblings().find(".third-level-navigation").slideUp("fast");
    });
	
    $(window).on("load resize", function (e) {

        // EQUALIZE MENU COLUMNS
        equalheight($thirdM);

        // MOBILE MENU POSITION
		if(isRibbon){
			if (breakpoint >= 1110) {
				$navMain.css("top", "auto");
			}
			else if (breakpoint <= 1109) {
				$navMain.css("top", "94px");
			}
		}else{
			if (breakpoint <= 1109) {
				$navMain.css("top", "50px");
			}else if(breakpoint >= 1110){
				$navMain.css("top", "auto");
			}
		}

    }); 
});