
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
	location.reload()
}

function updatePayment(uuid) {
	
	let data = {status: $('#payment').val(), typeValue: 'Payment Accepted', type: 'payed'};
	$.ajax({
		type: "POST",
		url: window.location.pathname,
		data: data,
		dataType: "json"
	});
	location.reload()
}
function updateSubmited(uuid) {
	
	let data = {status: $('#submited').val(), typeValue: 'Application Submitted', type: 'submited'};
	$.ajax({
		type: "POST",
		url: window.location.pathname,
		data: data,
		dataType: "json"
	});
	location.reload()
}
function updateReview(uuid) {
	
	let data = {status: $('#review').val(), typeValue: 'Reviewing Application', type: 'reviewed'};
	$.ajax({
		type: "POST",
		url: window.location.pathname,
		data: data,
		dataType: "json"
	});
	location.reload()
}