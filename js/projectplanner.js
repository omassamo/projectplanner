// O-M-A-S-S-A-M-O

var appid = "6075847";
var apptoken = "8210c97b3ff4479cb60a5455469be5d2";
var clientid = "projectplanner"; 
var redirecturl = "http://localhost:8888";
var clientsecret = "LX6k53Q8oFf1e7eEOzCJ2KtKgELXrTiccsdjJoth4hA8O6wKuEjh8O8zoXmppaUV";

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
		url: "https://podio.com/oauth/token/?grant_type=app&app_id=" + appid + "&app_token=" + apptoken + "&client_id=" + clientid + "&redirectuli=" + redirecturl + "&client_secret=" + clientsecret,
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
