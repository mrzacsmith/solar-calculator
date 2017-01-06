"use strict";
var annual_use_kw = 0, daily_use_kw = 0, i = 0, x = 0;
var months = document.getElementById('mpc').getElementsByTagName('input');
console.log(months);

for(i = 0; i < months.length; i++) {
	x = Number(months[i].value);
	annual_use_kw += x;
} // end loop

console.log(annual_use_kw);
