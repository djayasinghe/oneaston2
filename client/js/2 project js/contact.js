Template.contactFormTemplate.events({
    'click #sda':function(e){
        var contactForm = $(e.currentTarget),
            fname = contactForm.find('#firstName').val(),
            lname = contactForm.find('#lastName').val(),
            email = contactForm.find('#email').val(),
            phone = contactForm.find('#phone').val(),
            message = contactForm.find("#message").val();

        //isFilled and isEmail are my helper methods, which checks if variable exists or is email address valid
//        if(isFilled(fname) && isFilled(lname) && isFilled(email) && isFilled(phone) && isFilled(message) && isEmail(email)){
//            var dataText = "Message from: " + fname + " " + lname + "\rEmail: " + email + "\rPhone: " + phone + "\rContent:</br>" + message;

            Meteor.call('sendEmail');
            //throwAlert is my helper method which creates popup with message
//            throwAlert('Email send.', 'success');
//        }else{
//            throwAlert('An error occurred. Sorry', 'error');
//            return false;
//        }
    }
});