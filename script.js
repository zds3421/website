// function openNav() {
// 	document.getElementById('sidenav').style.width = '160px';
// 	document.getElementById('content').style.marginLeft = '160px';
// }

function closeNav() {
	document.getElementById('sidenav').style.width = '0';
	document.getElementById('hamburger').style.marginLeft = '0';
	// document.getElementById('content').style.marginLeft = '0';
}
var isOut = false;
function myFunction() {
	var x = document.getElementById('sidenav');
	if (isOut === true) {
		document.getElementById('sidenav').style.width = '0';
		document.getElementById('hamburger').style.marginLeft = '0';
		// document.getElementById('content').style.marginLeft = '0';
	} else {
		document.getElementById('sidenav').style.width = '160px';
		document.getElementById('hamburger').style.marginLeft = '160px';
		// document.getElementById('content').style.marginLeft = '160px';
	}
	isOut = !isOut;
}
