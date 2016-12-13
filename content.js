$(document).ready(function(){
	chrome.runtime.sendMessage({method: "getLocal"}, function(response) {
		if(response.autoConvert == "yes") {
			if(response.using == "wage") {
				var workingWage = response.wage;
				if(response.totalExpenses != undefined) {
					var expensesPerHour = response.totalExpenses / 160;
					workingWage -= expensesPerHour;
				}
				if(!isNaN(workingWage)) {
					if(workingWage > 0) {
						if(response.currency == "USD") {
							$("body *").replaceText(/^((\$|USD)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2})?|([0-9]([0-9,]))((\.|\,)\d{2}))$/, convert);
						} else if(response.currency == "EUR") {
							$("body *").replaceText(/^((\€|EUR)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2})?|([0-9]([0-9,]))((\.|\,)\d{2}))$/, convert);
						} else if(response.currency == "GBP") {
							$("body *").replaceText(/^((\£|GBP)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2})?|([0-9]([0-9,]))((\.|\,)\d{2}))$/, convert);
						} else if(response.currency == "CAD") {
							$("body *").replaceText(/^((\$|CDN|CAD|C)(\s{0,2}?)((\$|CDN|CAD|C)?)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2}))$/, convert);
						} else {
							$("body *").replaceText(/^((\$|AUD)(\s{0,2}?)((\$|AUD)?)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2}))$/, convert);
						}
					}
					else {
						if(response.currency == "USD") {
							$("body *").replaceText(/^((\$|USD)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2})?|([0-9]([0-9,]))((\.|\,)\d{2}))$/, "TOO MUCH");
						} else if(response.currency == "EUR") {
							$("body *").replaceText(/^((\€|EUR)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2})?|([0-9]([0-9,]))((\.|\,)\d{2}))$/, "TOO MUCH");
						} else if(response.currency == "GBP") {
							$("body *").replaceText(/^((\£|GBP)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2})?|([0-9]([0-9,]))((\.|\,)\d{2}))$/, "TOO MUCH");
						} else if(response.currency == "CAD") {
							$("body *").replaceText(/^((\$|CDN|CAD|C)(\s{0,2}?)((\$|CDN|CAD|C)?)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2}))$/, "TOO MUCH");
						} else {
							$("body *").replaceText(/^((\$|AUD)(\s{0,2}?)((\$|AUD)?)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2}))$/, "TOO MUCH");
						}
					}
				}

			} else if(response.using == "salary") {
				var workingWage = response.salary;
				workingWage = workingWage/52/40;
				if(response.totalExpenses != undefined) {
					var expensesPerHour = response.totalExpenses / 160;
					workingWage -= expensesPerHour;
				}
				if(!isNaN(workingWage)) {
					if(workingWage > 0) {
						if(response.currency == "USD") {
							$("body *").replaceText(/^((\$|USD)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2})?|([0-9]([0-9,]))((\.|\,)\d{2}))$/, convert);
						} else if(response.currency == "EUR") {
							$("body *").replaceText(/^((\€|EUR)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2})?|([0-9]([0-9,]))((\.|\,)\d{2}))$/, convert);
						} else if(response.currency == "GBP") {
							$("body *").replaceText(/^((\£|GBP)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2})?|([0-9]([0-9,]))((\.|\,)\d{2}))$/, convert);
						} else if(response.currency == "CAD") {
							$("body *").replaceText(/^((\$|CDN|CAD|C)(\s{0,2}?)((\$|CDN|CAD|C)?)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2}))$/, convert);
						} else {
							$("body *").replaceText(/^((\$|AUD)(\s{0,2}?)((\$|AUD)?)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2}))$/, convert);
						}
					} else {
						if(response.currency == "USD") {
							$("body *").replaceText(/^((\$|USD)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2})?|([0-9]([0-9,]))((\.|\,)\d{2}))$/, "TOO MUCH");
						} else if(response.currency == "EUR") {
							$("body *").replaceText(/^((\€|EUR)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2})?|([0-9]([0-9,]))((\.|\,)\d{2}))$/, "TOO MUCH");
						} else if(response.currency == "GBP") {
							$("body *").replaceText(/^((\£|GBP)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2})?|([0-9]([0-9,]))((\.|\,)\d{2}))$/, "TOO MUCH");
						} else if(response.currency == "CAD") {
							$("body *").replaceText(/^((\$|CDN|CAD|C)(\s{0,2}?)((\$|CDN|CAD|C)?)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2}))$/, "TOO MUCH");
						} else {
							$("body *").replaceText(/^((\$|AUD)(\s{0,2}?)((\$|AUD)?)(\s{0,3}?)([0-9]([0-9,])*)((\.|\,)\d{2}))$/, "TOO MUCH");
						}
					}
				}
			}
		}

		function convert(str) {
			newStr = str.trim();
			newStr = newStr.replace(/\,(\d\d)$/g, '.$1')
			newStr = newStr.replace(/[^\d.]/g, '');
			var time = parseFloat(newStr) / workingWage;
			if(isNaN(time)) { return str; }
			var hours = Math.floor(time);
			var minutes = Math.ceil(60 * (time - hours));
			if(minutes == 60) { hours += 1; minutes = 0; }
			if(response.showDollars == "yes") {
				var msg = str + " (";
			} else {
				var msg = " ";
			}

			if(response.convertWeeks == "yes") {
				var weeks = Math.floor(hours / 40);
				if(weeks > 0) {
					hours = Math.ceil(hours - weeks * 40);
					minutes = 0;
				}
				if(weeks == 0) { }
				else if(weeks == 1) {
					msg += weeks.toString() + " wk";
				} else {
					msg += weeks.toString() + " wks";
				}
				if(hours != 0 && weeks > 0) { msg += " "; }
			}

			if(hours == 0) { }
			else if(hours == 1) {
				msg += hours.toString() + " hr";
			} else {
				msg += hours.toString() + " hrs";
			}
			if(minutes != 0 && hours > 0) { msg += " "; }

			if(minutes == 0) { }
			else if(minutes == 1) {
				msg += minutes + " min";
			} else {
				msg += minutes + " mins";
			}

			if(response.showDollars == "yes") {
				msg += ") ";
			} else {
				msg += " ";
			}

			return msg;
		}

	});
	// replaceText jQuery function
	(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);
});
