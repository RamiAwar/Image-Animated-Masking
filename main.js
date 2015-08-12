$(".face").hover(
	function(){ $(this).find(".info").addClass('hoverInfo');
				$(this).find(".mask").addClass('hoverMask'); },
	function(){ $(this).find(".info").removeClass('hoverInfo');
				$(this).find(".mask").removeClass('hoverMask'); }
);