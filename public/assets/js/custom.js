/****************************************************************************
 * Tickets.cd v1.0
 * Tickets.cd by Illicocash Powered By Holson Mp.
 * Copyright 2024 | Holson Mpangala | https://holsonmp.com
 * @package Holson Mpangala
 ****************************************************************************/

/*--- Tooltip Widget ---*/
var tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});

/*--- Bookmark Event ---*/
$(document).ready(function () {
	$(".bookmark-icon, .bookmark-button").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("bookmarked");
		$(this).children(".bookmark-icon").toggleClass("bookmarked");
	});
});

/*--- QTY JS ---*/
function getTicketPrice() {
    // Récupérer le prix à partir de la div .ticket-price
    const priceText = document.querySelector('.ticket-price').textContent;
    return parseFloat(priceText.replace('$', ''));
}

function updateDisplay(quantity) {
    // Mettre à jour la quantité de tickets dans la div .x-title
    document.querySelector('.x-title').textContent = `${quantity}x Ticket(s)`;

    // Récupérer le prix du ticket actuel
    const ticketPrice = getTicketPrice();

    // Calculer le nouveau prix total et mettre à jour le span dans le h4
    const totalPrice = ticketPrice * quantity;
    document.querySelector('h4 span').textContent = `$${totalPrice.toFixed(2)}`;
}

function updateTicketPrice() {
    // Récupérer la valeur du type de billet sélectionné dans le <select>
    const selectedType = document.getElementById('ticketType').value;
    
    // Mettre à jour la div .ticket-price avec la nouvelle valeur sélectionnée
    document.querySelector('.ticket-price').textContent = `$${parseFloat(selectedType).toFixed(2)}`;

    // Recalculer le prix total en fonction de la nouvelle valeur et de la quantité
    const quantity = parseInt(document.getElementById('qt').value, 10);
    updateDisplay(quantity);
}

function increaseCount(event, element) {
    var input = element.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 1 : value;
    value++;
    input.value = value;

    updateDisplay(value); // Mettre à jour l'affichage
}

function decreaseCount(event, element) {
    var input = element.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 1 : value;
        value--;
        input.value = value;

        updateDisplay(value); // Mettre à jour l'affichage
    }
}


/*--- Switch Buttons ---*/

// Early Bird Discount Switch Button

$(document).ready(function () {
	$("#bird-discount").on("change", function (e) {
		const isOn = e.currentTarget.checked;

		if (isOn) {
			$(".online-event-discount-wrapper").show();
		} else {
			$(".online-event-discount-wrapper").hide();
		}
	});
});

// Early Bird Discount Switch Button 2

$(document).ready(function () {
	$("#bird-discount2").on("change", function (e) {
		const isOn = e.currentTarget.checked;

		if (isOn) {
			$(".online-event-discount-wrapper2").show();
		} else {
			$(".online-event-discount-wrapper2").hide();
		}
	});
});

// Free Event Ticketing Switch Button

$(document).ready(function () {
	$("#free-event-ticketing").on("change", function (e) {
		const isOn = e.currentTarget.checked;

		if (isOn) {
			$(".disabled-action").hide();
		} else {
			$(".disabled-action").show();
		}
	});
});

// Booking Start Time Switch Button

$(document).ready(function () {
	$("#booking-start-time-btn").on("change", function (e) {
		const isOn = e.currentTarget.checked;

		if (isOn) {
			$(".booking-start-time-holder").hide();
		} else {
			$(".booking-start-time-holder").show();
		}
	});
});

// Booking End Time Switch Button

$(document).ready(function () {
	$("#booking-end-time-btn").on("change", function (e) {
		const isOn = e.currentTarget.checked;

		if (isOn) {
			$(".booking-end-time-holder").hide();
		} else {
			$(".booking-end-time-holder").show();
		}
	});
});

// Refund Policies Holder Switch Button

$(document).ready(function () {
	$("#refund-policies-btn").on("change", function (e) {
		const isOn = e.currentTarget.checked;

		if (isOn) {
			$(".refund-policies-holder").hide();
		} else {
			$(".refund-policies-holder").show();
		}
	});
});

// Ticket Instructions Switch Button

$(document).ready(function () {
	$("#ticket-instructions-btn").on("change", function (e) {
		const isOn = e.currentTarget.checked;

		if (isOn) {
			$(".ticket-instructions-holder").hide();
		} else {
			$(".ticket-instructions-holder").show();
		}
	});
});

// Tags Switch Button

$(document).ready(function () {
	$("#tags-btn").on("change", function (e) {
		const isOn = e.currentTarget.checked;

		if (isOn) {
			$(".tags-holder").hide();
		} else {
			$(".tags-holder").show();
		}
	});
});

// Single Ticket Per Level Switch Button

$(document).ready(function () {
	$("#is-restrict-total-ticket").on("change", function (e) {
		const isOn = e.currentTarget.checked;

		if (isOn) {
			$(".total_ticket_per_level").hide();
		} else {
			$(".total_ticket_per_level").show();
		}
	});
});

// Single Ticket Per User Switch Button

$(document).ready(function () {
	$("#is-restrict-ticket-per-user").on("change", function (e) {
		const isOn = e.currentTarget.checked;

		if (isOn) {
			$(".total_ticket_per_user").hide();
		} else {
			$(".total_ticket_per_user").show();
		}
	});
});

// Group Ticket Per Level2 Switch Button

$(document).ready(function () {
	$("#is-restrict-total-ticket2").on("change", function (e) {
		const isOn = e.currentTarget.checked;

		if (isOn) {
			$(".total_ticket_per_level2").hide();
		} else {
			$(".total_ticket_per_level2").show();
		}
	});
});

// Group Ticket Per User2 Switch Button

$(document).ready(function () {
	$("#is-restrict-ticket-per-user2").on("change", function (e) {
		const isOn = e.currentTarget.checked;

		if (isOn) {
			$(".total_ticket_per_user2").hide();
		} else {
			$(".total_ticket_per_user2").show();
		}
	});
});

/*--- Payment Method Accordion ---*/
$('input[name="refund_policy_id"]').on("click", function () {
	var $value = $(this).attr("value");
	$(".refund-input-content").slideUp();
	$('[data-method="' + $value + '"]').slideDown();
});

/*--- Add tags ---*/
$(".tags-container").each(function () {
	var keywordInput = $(this).find(".tags-input");
	var keywordsList = $(this).find(".tags-list");

	// adding tags
	function addKeyword() {
		var $newKeyword = $(
			"<span class='tag'><span class='tag-remove'></span><span class='tag-text'>" +
				keywordInput.val() +
				"</span></span>"
		);
		keywordsList.append($newKeyword).trigger("resizeContainer");
		keywordInput.val("");
	}

	// add via enter key
	keywordInput.on("keyup", function (e) {
		if (e.keyCode == 13 && keywordInput.val() !== "") {
			addKeyword();
		}
	});

	// removing tags
	$(document).on("click", ".tag-remove", function () {
		$(this).parent().addClass("tag-removed");

		function removeFromMarkup() {
			$(".tag-removed").remove();
		}
		setTimeout(removeFromMarkup, 500);
		keywordsList.css({ height: "auto" }).height();
	});

	// animating container height
	keywordsList.on("resizeContainer", function () {
		var heightnow = $(this).height();
		var heightfull = $(this)
			.css({ "max-height": "auto", height: "auto" })
			.height();

		$(this).css({ height: heightnow }).animate({ height: heightfull }, 200);
	});

	$(window).on("resize", function () {
		keywordsList.css({ height: "auto" }).height();
	});

	// Auto Height for tags that are pre-added
	$(window).on("load", function () {
		var keywordCount = $(".tags-list").children("span").length;

		// Enables scrollbar if more than 3 items
		if (keywordCount > 0) {
			keywordsList.css({ height: "auto" }).height();
		}
	});
});

/*--- Initialize and add the map ---*/
// The following example creates a marker in Stockholm, Sweden using a DROP
// animation. Clicking on the marker will toggle the animation between a BOUNCE
// animation and no animation.
let marker;

function initMap() {
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 13,
		center: { lat: 59.325, lng: 18.07 },
	});

	marker = new google.maps.Marker({
		map,
		draggable: true,
		animation: google.maps.Animation.DROP,
		position: { lat: 59.327, lng: 18.067 },
	});
	marker.addListener("click", toggleBounce);
}

function toggleBounce() {
	if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}

window.initMap = initMap;

/*--- Owl Sliders


$(".engaging-slider").owlCarousel({
	items: 5,
	loop: true,
	margin: 20,
	nav: true,
	dots: true,
	navText: [
		"<i class='uil uil-angle-left'></i>",
		"<i class='uil uil-angle-right'></i>",
	],
	smartSpeed: 800,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 2,
		},
		1200: {
			items: 3,
		},
		1400: {
			items: 3,
		},
	},
}); ---*/
var HolduixConfig = {
	baseURL: window.location.origin,
	langBaseURL: window.location.origin,
	sysLangId: "1",
	thousandsSeparator: ".",
	chatUpdateTime: "3",
	textAll: "Tout",
	cartRoute: "",
	sliderFadeEffect: "1",
	isRecaptchaEnabled: "0",
	rtl: false,
};

/*
$(".testimonial-slider").owlCarousel({
	items: 10,
	loop: true,
	margin: 20,
	nav: false,
	dots: true,
	smartSpeed: 800,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 2,
		},
		1200: {
			items: 2,
		},
		1400: {
			items: 2,
		},
	},
});

// Organisations Slider
$(".organisations-slider").owlCarousel({
	items: 7,
	loop: true,
	margin: 20,
	nav: false,
	dots: false,
	smartSpeed: 800,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 2,
		},
		600: {
			items: 2,
		},
		1000: {
			items: 3,
		},
		1200: {
			items: 4,
		},
		1400: {
			items: 5,
		},
	},
});
 ---*/

/*--- Count Time JS ---*/

function makeTimer() {
	var endTime = new Date("december  30, 2022 17:00:00 PDT");
	var endTime = Date.parse(endTime) / 1000;
	var now = new Date();
	var now = Date.parse(now) / 1000;
	var timeLeft = endTime - now;
	var days = Math.floor(timeLeft / 86400);
	var hours = Math.floor((timeLeft - days * 86400) / 3600);
	var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
	var seconds = Math.floor(
		timeLeft - days * 86400 - hours * 3600 - minutes * 60
	);
	if (hours < "10") {
		hours = "0" + hours;
	}
	if (minutes < "10") {
		minutes = "0" + minutes;
	}
	if (seconds < "10") {
		seconds = "0" + seconds;
	}
	$("#days").html(days + "<span>Days</span>");
	$("#hours").html(hours + "<span>Hours</span>");
	$("#minutes").html(minutes + "<span>Minutes</span>");
	$("#seconds").html(seconds + "<span>Seconds</span>");
}
setInterval(function () {
	makeTimer();
}, 300);

/*--- Multi Dropdown JS ---*/

$(document).ready(function () {
	$(".dropdown-submenu a.submenu-item").on("click", function (e) {
		$(this).next("ul").toggle();
		e.stopPropagation();
		e.preventDefault();
	});
});

/*--- Multi Dropdown JS ---*/
$(document).ready(function () {
	$('input[type="radio"]').click(function () {
		var inputValue = $(this).attr("value");
		var targetBox = $("." + inputValue);
		$(".event-box").not(targetBox).hide();
		$(targetBox).show();
	});
});
$(document).ready(function () {
	$('.control').click(function () {
		var inputValue = $(this).attr("value");
		var targetBox = $("." + inputValue);
		$(".event-box").not(targetBox).hide();
		$(targetBox).show();
	});
});

/*--- Right Click Disable ---

window.oncontextmenu = function () {
	return false;
}
$(document).keydown(function (event) {
	if (event.keyCode == 123) {
		return false;
	}
	else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
		return false;
	}
});*/
