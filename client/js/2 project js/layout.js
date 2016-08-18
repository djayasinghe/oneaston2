//$(document).ready(function() {
//    $(".wp2").waypoint(function() {
//        console.log("dilan");
//        $(".wp2").addClass("animated fadeInDown")
//    }, {
//        offset: "75%"
//    });
//});

                         
Template.layout.onRendered(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});
Template.layout.events({
    'click .press-bt': function() {
        $( ".modal-backdrop").hide();
        console.log("DIlan2");
        $( ".modal" ).hide();
    }
});                        
Template.layout2.onRendered(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
   
});