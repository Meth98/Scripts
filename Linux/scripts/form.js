function checkForm() {
	let Zip = document.getElementById('inputZip');

	if (!Zip.value) {
		document.getElementById('zip_alert').innerHTML = '<b> Missed! </b>';
		document.getElementById('zip_alert').style.color = 'red';
		Zip.focus();
		return false;
	} else if (isNaN(Zip.value)) {
		document.getElementById('zip_alert').innerHTML = '<b> Put a number! </b>';
		document.getElementById('zip_alert').style.color = 'red';
		Zip.focus();
		return false;
	} else if (Zip.value.length != 5) {
		document.getElementById('zip_alert').innerHTML =
			'<b> Must be of 5 numbers! </b>';
		document.getElementById('zip_alert').style.color = 'red';
		Zip.focus();
		return false;
	}

	if (Zip.value) {
		alert('Fields filled correctly');
		return true;
	}
}