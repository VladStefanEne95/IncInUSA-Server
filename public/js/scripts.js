function goToIncorporation(uuid) {
	window.location.href = window.location.pathname + "/" + uuid;	
}

function updateStatus(uuid) {
	
	let data = {status: $('#stats-list').val()};
	$.ajax({
		type: "POST",
		url: window.location.pathname,
		data: data,
		dataType: "json"
	});
}