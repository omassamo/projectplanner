function onPageRequestError(e)
{
	console.log("Fejl.");
}

function onNewPageRequested(module, html, css)
{
	var posphase1 = $(module).find("*phase1 element class*").text()
	var posphase2 = $(module).find("*phase2 element class*").text()
	var posphase3 = $(module).find("*phase3 element class*").text()
	var posphase4 = $(module).find("*phase4 element class*").text()
	var posphase5 = $(module).find("*phase5 element class*").text()
	
	var bodystr = $(module).find(".page-wrapper div.text-block > p").html()

	$(".col_1_header").text(posphase1)
	$(".col_2_header").text(posphase2)
	$(".col_3_header").text(posphase3)
	$(".col_4_header").text(posphase4)
	$(".col_5_header").text(posphase5)

};

// 	var start = 200;
// 	$(module).find("ul > li a").each(function(index, el)
// 	{

// 		$(".button-container").append($(el));
// 		$(el).attr("id", "pos"+(index+1))
// 		$(el).css("top", start)
// 		$(el).addClass("button")
// 		$(el).attr("target", "_blank")
// 		start += 80;
// 	});

// 	$("body").append($(module).find(".apply-button"));

// 	var h = $("body").find(".two-col").outerHeight(true) - 40
// 	h = Math.ceil(h / 40) * 40;
// 	$("body").find(".two-col").height(h)

// 	var applyTop = h + $("body").find(".two-col").position().top;
// 	applyTop = Math.ceil(applyTop / 40) * 40;

// 	$("body").find(".apply-button").css("top", applyTop + 80)
	

// 	//her kan du render indholdet ind i dine DOM elementer.
// };