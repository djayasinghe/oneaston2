import { Meteor } from 'meteor/meteor';

//Meteor.settings.contactForm = {
//  emailTo: 'dilannadeesh@gmail.com'
//};
if (Meteor.isServer) {
   Meteor.startup(() => {
       Meteor.methods({
        sendEmail2: function (text) {
        check([text], [String]);
       // console.log("line 8");
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
}
//Meteor.settings.contactForm = {
//  emailTo: 'dilannadeesh@gmail.com',
//  emailSubject: function (params) {
//    'Message from ' + params.name + ' via contact form'
//  }
//};
// Meteor.methods({
//    'createPlayer': function(){
//        console.log("Hello world");
//    }
//});
