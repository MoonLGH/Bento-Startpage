// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

window.onload = displayClock();
function displayClock() {
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var d = new Date();
	var mm = monthNames[d.getMonth()];
	var dd = d.getDate();
	var min = (mins = ('0' + d.getMinutes()).slice(-2));
	var hh = d.getHours();
	var ampm = '';

	if (CONFIG.twelveHourFormat) {
		ampm = hh >= 12 ? ' pm' : ' am';
		hh = hh % 12;
		hh = hh ? hh : 12;
	}

	document.getElementById('Times').innerText = `${mm} ${dd}, ${hh} : ${min+ampm}`;

	setTimeout(displayClock, 1000);
}
