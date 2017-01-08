
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

var daily_use_kw = addMonths('monthly_power_consumption');
console.log(daily_use_kw);
