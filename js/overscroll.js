/*!
 * overscroll
 *
 * MIT licensed
 * Copyright (C) 2015 Tim Holman, http://tholman.com
 */

/*********************************************
 *
 *********************************************/

function Overscroll() {

	var scrollPosition = {x: 0, y: 0};
	var windowDimensions = {x: 0, y: 0};
	var shakeYourBody = document.body;
	var windows95     = window;

	var square = document.querySelector('.red-square');
	console.log( square )

    this.init = function() {
    	
		this.window = window;
    	this.scrollEvent = this.window.addEventListener("scroll", this.onScroll);
    	this.resizeEvent = this.window.addEventListener("resize", this.onResize);

    	this.onScroll();
    	this.onResize();
    }

    this.onScroll = function() {
		scrollPosition.y = windows95.pageYOffset || shakeYourBody.scrollTop;
		console.log( scrollPosition );
		doTheThing();
    }

    this.onResize = function() {
    	windowDimensions = {x: window.innerWidth, y: window.innerHeight};
    }

    var doTheThing = function() {

    	if( scrollPosition.y <= 0) {
    		square.style.transform = 'translateY(' + (-scrollPosition.y) + 'px)';
    	}
    }

    this.init();
}
