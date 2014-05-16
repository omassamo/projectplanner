// O-M-A-S-S-A-M-O

$(document).ready(function()
{
	$("#button").click(function()
	{
		window.onPodioLogin();
	})
})
function onPodioLogin()
{

	var orig = location.origin;
	$.ajax({
		url: "https://podio.com/oauth/token/?grant_type=app&app_id=6075847&app_token=8210c97b3ff4479cb60a5455469be5d2&client_id=projectplanner&redirect_uri=http://localhost:8888&client_secret=LX6k53Q8oFf1e7eEOzCJ2KtKgELXrTiccsdjJoth4hA8O6wKuEjh8O8zoXmppaUV",
		dataType: 'html',
		type: "POST",
		success: onNewPageRequested,
		error: onPageRequestError
	});	
}

function onPageRequestError(e)
{
	console.log("Fejl.");
}

function onNewPageRequested(a)
{
	console.log("Sucess");
	console.log(a);

};
