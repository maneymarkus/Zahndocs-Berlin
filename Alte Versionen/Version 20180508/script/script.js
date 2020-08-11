var Module = (function(window, document, undefined) {

	function init() {
		var logo = document.getElementById("logo-container");
		var nav = document.getElementById("main-nav");
		var header = document.getElementById("header");
		var main = document.getElementsByTagName("main")[0];
		var wrapper = document.getElementById("wrapper");
		var aboveNav = document.getElementById("above-nav");
		var logoRect = logo.getBoundingClientRect();
		var navRect = nav.getBoundingClientRect();
		var logoTopOffset = (Math.floor(logoRect.top) < 30) ? 50 : Math.floor(logoRect.top);
		var logoLeftOffset = (Math.floor(logoRect.left) < 50) ? 100 : Math.floor(logoRect.left);
		var navTopOffset = (Math.floor(navRect.top) < 100) ? 200 : Math.floor(navRect.top);
		var lastScroll = 0;
		var lastOffset = 0;
		var leftOffset = 0;
		var absoluteValue = 0;
		var relativeValue = 0;
		var relativeWidth = 0;
		var spaceBetweenLogoNav = (navTopOffset - logoTopOffset) * 0.15;
		var navHeight = nav.offsetHeight;
		var scrollVar = 0;
		
		var toggleMenu = document.getElementsByClassName("toggle-menu")[0];
		var searchIcon = document.getElementsByClassName("search")[0];
		var searchForm = document.getElementById("search");
		var aside = document.getElementsByTagName("aside")[0];
		var asideIcon = document.getElementsByClassName("aside-icon")[0];
		var asideContent = document.getElementsByClassName("aside-content")[0];
		var bookingLink = document.getElementsByClassName("booking-link")[0];
		var bookingCounter = 0;
		var backToTop = document.getElementById("back-to-top");
		var cookieDiv = document.getElementsByClassName("cookie-div")[0];
		
		var cookieText = decodeURIComponent(document.cookie);
		if (cookieText.search("hasAlreadyVisited=true") != -1) {
			cookieDiv.style.display = "none";
		}
		
		var w = window,
			d = document,
			e = d.documentElement,
			g = d.getElementsByTagName('body')[0];
		
		
		function checkBooking() {
			windowWidth = w.innerWidth || e.clientWidth || g.clientWidth;
			if (windowWidth <= 960) {
				if (bookingCounter == 0) {
					bookingCounter++;
					return;
				}
				aboveNav.insertBefore(bookingLink, aboveNav.childNodes[2]);
			} else {
				wrapper.insertBefore(bookingLink, wrapper.childNodes[1]);
			}
		}
		
		function checkSearch() {
			windowWidth = w.innerWidth || e.clientWidth || g.clientWidth;
			if (windowWidth <= 960) {
				header.appendChild(searchForm);
			} else {
				asideContent.insertBefore(searchForm, asideContent.childNodes[0]);
			}
		}
		
		document.addEventListener("scroll", function(e) {
			windowWidth = w.innerWidth || e.clientWidth || g.clientWidth;
			windowHeight = w.innerHeight || e.clientHeight || g.clientHeight;
			if (windowWidth <= 960 || (document.body.scrollHeight - w.innerHeight) < 230) {
				return;
			}
			e = e || window.event;
			scrollVar = window.pageYOffset || document.documentElement.scrollTop;
			if (window.scrollY && scrollVar <= navTopOffset && scrollVar > logoTopOffset) {
				leftOffset = Math.floor(((scrollVar - logoTopOffset) / (navTopOffset - logoTopOffset + 10)) * 100);
				leftOffset = 100 - leftOffset;
				leftOffset = logoLeftOffset / 100 * leftOffset;
				absoluteValue = Math.floor(window.pageYOffset - logoTopOffset);
				absoluteValue = (navTopOffset + 10) - absoluteValue;
				relativeValue = absoluteValue / (navTopOffset + 20) * 100;
				relativeWidth = Math.floor(240 / 100 * relativeValue);
				logo.style.width = relativeWidth + "px";
				logo.style.left = Math.floor(leftOffset) + "px";
				lastScroll = scrollVar;
				lastOffset = window.pageYOffset;
			}
			if (scrollVar < logoTopOffset) {
				logo.style.left = "5%";
				logo.style.width = "240px";
			} else if (scrollVar > navTopOffset) {
				logo.style.width = "5%";
				logo.style.left = "0%";
			}
			if (scrollVar > logoTopOffset) {
				logo.classList.add("scroll-style");
			} else {
				logo.classList.remove("scroll-style");
			}
			if (scrollVar >= navTopOffset) {
				nav.classList.add("scroll-nav");
				nav.insertBefore(logo, nav.childNodes[0]);
				logo.classList.remove("scroll-style");
				logo.classList.add("relative");
				logo.style.left = "0%";
				header.style.marginBottom = "4%";
			} else {
				nav.classList.remove("scroll-nav");
				aboveNav.appendChild(logo);
				logo.classList.remove("relative");
				header.style.marginBottom = "0";
			}
		});
		
		window.addEventListener("resize", adjust);
		
		function adjust() {
			windowWidth = w.innerWidth || e.clientWidth || g.clientWidth;
			windowHeight = w.innerHeight || e.clientheight || g.clientHeight;
			var wrapperRect = document.getElementById("wrapper").getBoundingClientRect();
			var wrapperLeftOffset = wrapperRect.left;
			scrollVar = window.pageYOffset || document.documentElement.scrollTop;
			if (navTopOffset < 0) {
				navTopOffset = 200;
			}
			if (scrollVar < navTopOffset) {
				logoRect = logo.getBoundingClientRect();
				logoLeftOffset = Math.floor(logoRect.left);
				navRect = nav.getBoundingClientRect();
				navTopOffset = Math.floor(navRect.top);
				if (navTopOffset < 0) {
					navTopOffset = 200;
					logoLeftOffset = wrapperLeftOffset + 30;
				}
			}
			checkSearch();
			checkBooking();
			if (windowWidth <= 960) {
				logo.removeAttribute("style");
				aboveNav.insertBefore(logo, aboveNav.childNodes[2]);
			} else if (windowWidth > 960 && scrollVar < navTopOffset) {
				nav.classList.remove("sub-menu-1");
				nav.classList.remove("sub-menu-2");
				logo.style.left = "5%";
			}
		}
		
		toggleMenu.addEventListener("click", function() {
			if (toggleMenu.classList.contains("go-back")) {
				toggleMenu.classList.remove("go-back");
				nav.classList.remove("sub-menu-1");
				nav.classList.remove("sub-menu-2");
			} else {
				toggleMenu.classList.toggle("open");
				nav.classList.toggle("open");
			}
		});
		
		searchIcon.addEventListener("click", function() {
			searchIcon.classList.toggle("searching");
			searchForm.classList.toggle("searching");
			logo.classList.toggle("searching");
		});
		
		asideIcon.addEventListener("click", function() {
			aside.classList.toggle("swipe");
		});
		
		document.addEventListener("click", function(e) {
			var e = e || window.event;
			var target = e.target || window.target;
			if (target.classList.contains("toggle-menu") || target.classList.contains("aside-icon") || target.classList.contains("bar") || target.classList.contains("aside") || target.parentNode.classList.contains("li")) {
				return;
			}
			if (toggleMenu.classList.contains("open")) {
				toggleMenu.classList.remove("open");
				toggleMenu.classList.remove("go-back");
				nav.classList.remove("open");
				nav.classList.remove("sub-menu-1");
				nav.classList.remove("sub-menu-2");
			} 
			if (aside.classList.contains("swipe") && target.id != "s") {
				aside.classList.remove("swipe");
			}
		});
		
		backToTop.addEventListener("click", function() {
			window.scroll({top: 0, left: 0, behavior: "smooth"});
		});
		
		nav.addEventListener("click", function(e) {
			windowWidth = w.innerWidth || e.clientWidth || g.clientWidth;
			var e = e || window.event;
			var target = e.target || window.target;
			if (windowWidth < 960 && (target.getAttribute("title") == "sub-menu-1" || target.getAttribute("title") == "sub-menu-2")) {
				if (!nav.classList.contains("sub-menu-1") && !nav.classList.contains("sub-menu-2")) {
					e.preventDefault();
				}
			}
			if (windowWidth < 960 && target.getAttribute("title") == "sub-menu-1") {
				nav.classList.add("sub-menu-1");
				toggleMenu.classList.add("go-back");
			} else if (windowWidth < 960 && target.getAttribute("title") == "sub-menu-2") {
				nav.classList.add("sub-menu-2");
				toggleMenu.classList.add("go-back");
			}
		});
		
		cookieDiv.getElementsByClassName("got-it")[0].addEventListener("click", function() {
			cookieDiv.style.display="none";
			var now = new Date();
			var time = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 30);
			document.cookie = "hasAlreadyVisited=true; expires=" + time.toGMTString() + ";";
		});
		
		checkSearch();
		checkBooking();
		
	}

	document.addEventListener("DOMContentLoaded", function() {
		if (top != self) {
			alert("Sie haben nicht die Originalseite gesehen. Sollte das Problem immer noch bestehen (z.B. falsche Adresse (Original:http://www.zahndocs-berlin.de), die Seite wird nicht im gesamten Fenster dargestellt), dann rufen Sie die originale Website der Zahndocs Berlin bitte mit dieser Adresse auf: hhtp://www.zahndocs-berlin.de");
			top.location.replace(self.location.href);
		}
		init();
	});
	
})(window, document)