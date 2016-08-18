Template.index.onRendered(function () {
  $(".js-height-full").height($(window).height());
		$(window).resize(function(){
			$(".js-height-full").height($(window).height());
		});
   


        
});
Template.index.events({ 
//    
//   'click .news_1': function () {
//       console.log("DIlan");
////    BootstrapModalPrompt.prompt({
////      dialogTemplate: Template.news_1
////    });
//       
//       var bModal = BModals.showNew('news_1', function () {
//    return MyCollection.findOne(colectionId);
//});
//  }
}); 