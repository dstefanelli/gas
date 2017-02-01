$(function () {
		var $body = $('body'),
			$thirdM = $('.second-level-navigation.active .metro-menu > div > .column'),
			$titleM = $('.metro-menu > div > .column h3');
		$('.open-menu').on('click', function(){
			var $this = $(this);
			$this.parent().toggleClass('active').siblings('.nav-main').toggleClass('active');
			$body.toggleClass('hidde-scroll');
		});
		$('.first-level').on('click', function(e){
			e.preventDefault();
			var $this = $(this),
				query = $this.data('query');
				console.log(query)
			$this.parent().find('#' + query ).toggleClass("active");
			$this.parent().siblings().find(".second-level-navigation").removeClass("active");
		});
	
		$('.second-level').on('click', function(e){
			e.preventDefault();
			var $this = $(this),
				query = $this.data('query');
				console.log(query)
			$this.parent().find('#' + query ).slideToggle();
			$this.parent().siblings().find(".third-level-navigation").slideUp();
		});
		// EQUALIZE MENU COLUMNS
	    $(document).ready(function () {
		   equalheight( $thirdM );
		   equalheight( $titleM );
			console.log("entrando al equialize")
		});
		$(window).resize(function () {
			equalheight( $thirdM );
		    equalheight( $titleM );
			console.log("rezise al equialize")
		});
	    
});

/*var METROGAS = function(){
	
	init = function () {
		
    	var $body = $('body');
		
		$('.open-menu').on('click', function(){
			var $this = $(this);
			$this.parent().toggleClass('active').siblings('.nav-main').toggleClass('active');
			$body.toggleClass('hidde-scroll');
		});
		
		$('.first-level').on('click', function(e){
			e.preventDefault();
			var $this = $(this),
				query = $this.data('query');
				console.log(query)
			$this.parent().find('#' + query ).toggleClass("active");
			$this.parent().siblings().find(".second-level-navigation").removeClass("active");
		});
	
		$('.second-level').on('click', function(e){
			e.preventDefault();
			var $this = $(this),
				query = $this.data('query');
				console.log(query)
			$this.parent().find('#' + query ).slideToggle();
			$this.parent().siblings().find(".third-level-navigation").slideUp();
		});
    },
		
	equalheight = function (container) {

		var currentTallest = 0,
			currentRowStart = 0,
			rowDivs = new Array(),
			$el,
			topPosition = 0;
		$(container).each(function () {

			$el = $(this);
			$($el).height('auto')
			topPostion = $el.position().top;

			if (currentRowStart != topPostion) {
				for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
			} else {
				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			}
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
	}	
	
	return{
		init: init
	};
	$(function () {

    var breakpoint = $(window).width(),
        $body = $('body'),
        $ribbon = $('#s4-ribbonrow'),
        tempRibbonH = $ribbon.height(),
        $navMain = $('.nav-main'),
        $thirdM = $('.third-level-navigation.active .metro-menu > div > .column'),
		$titleM = $('.metro-menu > div > .column h3');

    //  POPUPS
    var Popup = function () {
        open = function (id, callback) {
            $("#" + id).addClass("active");
            $('body').addClass("hidde-scroll");
        }
        close = function (id, callback) {
            $("#" + id).removeClass("active");
            $('body').removeClass("hidde-scroll");
        }
    }

    //  OPEN MOBILE NAVIGATION
    $('.open-menu').on('click', function () {
        var $this = $(this);
        $this.parent().toggleClass('active').siblings('.nav-main').toggleClass('active');
        $body.toggleClass('hidde-scroll');
    });

    // OPEN FIRST LEVEL NAVIGATION
    $('.first-level').on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
				query = $this.data('query');

        equalheight($thirdM);
        equalheight($titleM);

        $this.parent().find('#' + query).toggleClass("active");
        $this.parent().siblings().find(".second-level-navigation").removeClass("active");
    });

    // OPEN SECOND LEVEL NAVIGATION
    $('.second-level').on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
				query = $this.data('query');

        equalheight($thirdM);
        equalheight($titleM);

        $this.parent().find('#' + query).slideToggle();
        $this.parent().siblings().find(".third-level-navigation").slideUp();
    });

    $(window).on("load resize", function (e) {

        // EQUALIZE MENU COLUMNS
        equalheight($thirdM);
        equalheight($titleM);

        // MOBILE MENU POSITION
        if (breakpoint >= 1110) {
            $navMain.css("top", "auto");
        }
        else if (breakpoint <= 1110 && $ribbon.length > 0) {
            $navMain.css("top", "94px");
        }
        else if (breakpoint <= 1110 && $ribbon.length < 0) {
            $navMain.css("top", "50px");
        }

    });
});
}();*/