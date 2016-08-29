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
        var waypoint = new Waypoint({
            element: document.getElementById('wp4'),
            handler: function() {

                $(".wp4").addClass("animated fadeIn")

            },
            context: document.getElementById('wrapper'),
            offset: '75%'
        });
        
    });
    Template.about.onRendered(function() {
        var waypoint = new Waypoint({
            element: document.getElementById('wpA1'),
            handler: function() {
                $(".wpA1").addClass("animated fadeInLeft")

            },
            context: document.getElementById('wrapper'),
            offset: '75%'
        });
        var waypoint = new Waypoint({
            element: document.getElementById('wpA2'),
            handler: function() {
                $(".wpA2").addClass("animated fadeInRight")

            },
            context: document.getElementById('wrapper'),
            offset: '75%'
        });
        var waypoint = new Waypoint({
            element: document.getElementById('wpA3'),
            handler: function() {
                $(".wpA3").addClass("animated fadeInLeft")

            },
            context: document.getElementById('wrapper'),
            offset: '75%'
        });
        var waypoint = new Waypoint({
            element: document.getElementById('wpA4'),
            handler: function() {
                $(".wpA4").addClass("animated fadeInRight")

            },
            context: document.getElementById('wrapper'),
            offset: '75%'
        });
        var waypoint = new Waypoint({
            element: document.getElementById('wpA5'),
            handler: function() {
                $(".wpA5").addClass("animated fadeInLeft")

            },
            context: document.getElementById('wrapper'),
            offset: '75%'
        });
        var waypoint = new Waypoint({
            element: document.getElementById('wpA6'),
            handler: function() {
                $(".wpA6").addClass("animated fadeInRight")

            },
            context: document.getElementById('wrapper'),
            offset: '75%'
        });
          var waypoint = new Waypoint({
            element: document.getElementById('wpA7'),
            handler: function() {
                $(".wpA7").addClass("animated fadeInRight")

            },
            context: document.getElementById('wrapper'),
            offset: '75%'
        });
          var waypoint = new Waypoint({
            element: document.getElementById('wpA8'),
            handler: function() {
                $(".wpA8").addClass("animated fadeInRight")

            },
            context: document.getElementById('wrapper'),
            offset: '75%'
        });
          var waypoint = new Waypoint({
            element: document.getElementById('wpA9'),
            handler: function() {
                $(".wpA9").addClass("animated fadeInRight")

            },
            context: document.getElementById('wrapper'),
            offset: '75%'
        });
    });
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
    Template.contactFormTemplate.events({
        'submit #contactForm': function(e) {
            var contactForm = $(e.currentTarget),
                fname = contactForm.find('#firstName').val(),
                lname = contactForm.find('#lastName').val(),
                email = contactForm.find('#email').val(),
                phone = contactForm.find('#phone').val(),
                message = contactForm.find("#message").val();

            //isFilled and isEmail are my helper methods, which checks if variable exists or is email address valid
            //        if(isFilled(fname) && isFilled(lname) && isFilled(email) && isFilled(phone) && isFilled(message) && isEmail(email)){
            var dataText = "Message from: " + fname + " " + lname + "\rEmail: " + email + "\rPhone: " + phone + "\rContent:</br>" + message;
            //   Meteor.call('createPlayer');
            Meteor.call('sendEmail2', dataText);
            //throwAlert is my helper method which creates popup with message
            //            throwAlert('Email send.', 'success');
            //        }else{
            //            throwAlert('An error occurred. Sorry', 'error');
            //            return false;
            //        }
        }
    });
}