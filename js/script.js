
function addMonths(el) {
	var annual_use_kw = 0, daily_use_kw = 0, i = 0, x = 0;
	var months = document.getElementById(el).getElementsByTagName('input');
	console.log(months);

		for(i = 0; i < months.length; i++) {
			x = Number(months[i].value);
			annual_use_kw += x;
		} // end loop

	daily_use_kw = annual_use_kw / 365;
	return daily_use_kw;
	// console.log(annual_use_kw);
	// console.log(daily_use_kw);

} // end of  addMonths function

function sun_hours() {
	var hours;
	var sun_zone = document.forms.solar_form.zone.selectedIndex;
	sun_zone += 1;

	switch (sun_zone) {
		case 1:
			hours = 6;
			break;
		case 2:
			hours = 5.5;
			break;
		case 3:
			hours = 5;
			break;
		case 4:
			hours = 4.5;
			break;
		case 5:
			hours = 4.2;
			break;
		case 6:
		 	hours = 3.5;
			break;
		default:
			hours = 0;
	} // End switch
	return hours;
} // End sun_hours function

var user_panel_choice = document.forms.solar_form.panels.selectedIndex;
var panel_options = document.forms.solar_form.panels.options;
var power = panel_options(user_panel_choice).value;
var name = panel_options[user_panel_choice].text;
var x = [power, name];
console.log(x);



function calculate_solar() {
	var daily_use_kw = addMonths('monthly_power_consumption');
	console.log(daily_use_kw);

	var sun_hours_per_day = sun_hours();
	console.log(sun_hours_per_day);

	var min_kw_needs = daily_use_kw / sun_hours_per_day;
	console.log(min_kw_needs);

	var real_kw_needs = min_kw_needs * 1.25;
	console.log(real_kw_needs);

	var real_watt_needs = real_kw_needs * 1000;
	console.log(real_watt_needs);
} // End calculate_solar function
