Template.layout.onRendered(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});
Template.layout.events({
    'click .press-bt': function() {
        $( ".modal-backdrop").hide();
        $( ".modal" ).hide();
    }
});                        
Template.layout2.onRendered(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
   
});



