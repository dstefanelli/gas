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
	
}();*/