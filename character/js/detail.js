$(function () {
 
	var setting={zoomType:"reverse",
		zoomWidth:240,
		zoomHeight:240,
		lens:true,
		title:true,
		imageOpacity:0.5
	};
	$("#zoom").jqzoom(setting);
  	
	$(".pimg").click(function() {
		$("#mainImg").attr("src", $(this).attr("src"));
		$("#zoom").attr("href", $(this).attr("src"));
	});
});
