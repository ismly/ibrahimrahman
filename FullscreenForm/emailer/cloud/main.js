
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

var API = "Your MailGun API Key"
var Domain = "sandbox9a3dfe10d19f48b487cd88771cb89057.mailgun.org"
var Mailgun = require('mailgun');
Mailgun.initialize(Domain, API);
 
Parse.Cloud.beforeSave("emailObject", function(request, response) {
 
    var text = "Test form\n\n" + 
        "Name: "+request.object.get("q1") + "\n\n"+
        "Email: "+request.object.get("q2") + "\n\n"+
        "Message: \n"+request.object.get("q3");
 
     
    Mailgun.sendEmail({
            to: "ibrahim_rahman@outlook.com",
            from: request.object.get("email"),
            subject: "Submission Form ibrahimrahman.github.io from: " + request.object.get("name"),
            text: text
        }, {
        success: function(httpResponse) {
            response.success();
        },
        error: function(httpResponse) {
            console.error(httpResponse);
            response.error("Uh oh, something went wrong");
        }
    });
 
});
