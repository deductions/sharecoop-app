/** Display: give URI instance (FOAF profile), and form specification URI (to set fields order, etc) */
function loadFormDisplay( subjectURI, formURI, displayDivId, actionURI ) {
	loadForm(
		'/form?displayuri=' + encodeURIComponent( subjectURI ) +
		'&formuri=' + encodeURIComponent( hformURI ),
		displayDivId );
};
/** Create: give form specification URI, and class of instance to create */
function loadFormCreate( classURI, formURI, displayDivId, actionURI ) {
	loadForm(
		'/create?uri=' + encodeURIComponent( classURI ) +
		'&formuri=' + encodeURIComponent( formURI ),
		displayDivId );
};
/** Edition: give URI instance (FOAF profile), and form specification URI */
function loadFormEdition(subjectURI, formURI, displayDivId, actionURI ) {
	loadForm(
		'/form?displayuri=' + encodeURIComponent( subjectURI ) +
		'&formuri=' + encodeURIComponent( formURI ) +
		'&Edit=yes',
		displayDivId );
};

function loadForm(uriToCall, displayDivId) {
	console.log('Calling URL: ' + uriToCall);
	$.ajax({
		url: uriToCall,
		context: document.body
	}).done(function(data) {
	    var formElem = document.getElementById(displayDivId);
	    formElem.innerHTML = data;
	});
};


