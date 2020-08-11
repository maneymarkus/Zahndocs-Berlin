var Module = (function(window, document, undefined) {

	function init() {
		var logo = document.getElementById("logo-container");
		var nav = document.getElementById("main-nav");
		var header = document.getElementById("header");
		var aboveNav = document.getElementById("above-nav");
		var logoRect = logo.getBoundingClientRect();
		var navRect = nav.getBoundingClientRect();
		var logoTopOffset = Math.floor(logoRect.top);
		var logoLeftOffset = Math.floor(logoRect.left);
		var navTopOffset = Math.floor(navRect.top);
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
		var backToTop = document.getElementById("back-to-top");
		
		var w = window,
			d = document,
			e = d.documentElement,
			g = d.getElementsByTagName('body')[0];
		
		function checkSearch() {
			var w = window,
			d = document,
			e = d.documentElement,
			g = d.getElementsByTagName('body')[0],
			windowWidth = w.innerWidth || e.clientWidth || g.clientWidth;
			if (windowWidth <= 960) {
				header.appendChild(searchForm);
			} else {
				asideContent.insertBefore(searchForm, asideContent.childNodes[0]);
			}
		}
		
		document.addEventListener("scroll", function(e) {
			windowWidth = w.innerWidth || e.clientWidth || g.clientWidth;
			if (windowWidth <= 960) {
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
				relativeWidth = Math.floor(231 / 100 * relativeValue);
				logo.style.width = relativeWidth + "px";
				logo.style.left = Math.floor(leftOffset) + "px";
				lastScroll = scrollVar;
				lastOffset = window.pageYOffset;
			}
			if (scrollVar < logoTopOffset) {
				logo.style.left = "5%";
				logo.style.width = "231px";
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
				header.style.marginBottom = "5%";
			} else {
				nav.classList.remove("scroll-nav");
				aboveNav.appendChild(logo);
				logo.classList.remove("relative");
				header.style.marginBottom = "0";
			}
		});
		
		window.addEventListener("resize", function() {
			windowWidth = w.innerWidth || e.clientWidth || g.clientWidth;
			scrollVar = window.pageYOffset || document.documentElement.scrollTop;
			if (scrollVar < navTopOffset) {
				logoRect = logo.getBoundingClientRect();
				logoLeftOffset = Math.floor(logoRect.left);
			}
			checkSearch();
			if (windowWidth <= 960) {
				logo.removeAttribute("style");
			} else if (windowWidth > 960 && scrollVar < navTopOffset) {
				nav.classList.remove("sub-menu-1");
				nav.classList.remove("sub-menu-2");
				logo.style.left = "5%";
			}
		});
		
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
			e.preventDefault;
			if (windowWidth < 960 && target.getAttribute("href") == "#sub-menu-1") {
				nav.classList.add("sub-menu-1");
				toggleMenu.classList.add("go-back");
			} else if (windowWidth < 960 && target.getAttribute("href") == "#sub-menu-2") {
				nav.classList.add("sub-menu-2");
				toggleMenu.classList.add("go-back");
			}
		});
		
		checkSearch();
		
	}

	document.addEventListener("DOMContentLoaded", function() {
		init();
	});
	
})(window, document)