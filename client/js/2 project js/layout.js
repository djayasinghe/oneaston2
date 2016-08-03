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
Template.layout.events({});

                         
Template.layout2.onRendered(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
   
});