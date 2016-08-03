
if (Meteor.isClient) {
  Template.layout.onRendered(function() {
    var waypoint = new Waypoint({
    element: document.getElementById('wp1'),
    handler: function() {
         
            $(".wp1").addClass("animated fadeIn"),
            $(".wp1-1").addClass("animated fadeInDown")
    },
        context: document.getElementById('wrapper'),
        offset: '75%'
});
 var waypoint = new Waypoint({
    element: document.getElementById('wp2'),
    handler: function() {
         
            $(".wp2").addClass("animated fadeIn"),
            $(".wp2-1").addClass("animated fadeInDown")
    },
        context: document.getElementById('wrapper'),
        offset: '75%'
});     
 var waypoint = new Waypoint({
    element: document.getElementById('wp3'),
    handler: function() {
         
            $(".wp3").addClass("animated fadeIn")
            
    },
        context: document.getElementById('wrapper'),
        offset: '75%'
});     
});      
}
if (Meteor.isClient) {
  Template.footer.onRendered(function() {
    var waypoint = new Waypoint({
    element: document.getElementById('wp4'),
    handler: function() {
         
            $(".wp4").addClass("animated fadeInDown"),
             $(".wp5").addClass("animated fadeInUp")
                
    },
        context: document.getElementById('wrapper'),
        offset: '75%'
});
 
});      
}