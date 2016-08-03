import { Meteor } from 'meteor/meteor';

//Meteor.settings.contactForm = {
//  emailTo: 'dilannadeesh@gmail.com'
//};
   Meteor.startup(() => {
       Meteor.methods({
  sendEmail: function () {
    check([text], [String]);

    this.unblock();

    Email.send({
      to: 'dilannadeesh@gmail.com',
      from: 'dilannadeesh@gmail.com',
      subject: 'New message from contact form',
      text: text
    });
  }
});
 });
//Meteor.settings.contactForm = {
//  emailTo: 'dilannadeesh@gmail.com',
//  emailSubject: function (params) {
//    'Message from ' + params.name + ' via contact form'
//  }
//};

