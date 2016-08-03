Template.index.onRendered(function () {
  $(".js-height-full").height($(window).height());
		$(window).resize(function(){
			$(".js-height-full").height($(window).height());
		});
   


        
});
Template.index.events({ 
}); 