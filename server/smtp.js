
//var login = encodeURIComponent("oneaston2@gmail.com");
//var password = encodeURIComponent("0neAst0n");
//var domain = "smtp.gmail.com";
//var port = 465;
//process.env.MAIL_URL = "smtp://" + login + ":" + password + "@" + domain + ":" + port;
if (Meteor.isServer) {
Meteor.startup(function(){
    process.env.MAIL_URL = 'smtp://oneaston2%40gmail.com:0neAst0n@smtp.gmail.com:465/';
    console.log(process.env.MAIL_URL);
});
}
//Meteor.settings.contactForm = {
//  emailTo: 'dilannadeesh@gmail.com'
//};