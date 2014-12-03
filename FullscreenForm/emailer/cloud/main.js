
/* global Parse,console,require */

var Mailgun = require('mailgun');
Mailgun.initialize('andbox9a3dfe10d19f48b487cd88771cb89057.mailgun.org', 'key-be08724fb28a4bf6a1e3cbfb56374006');

Parse.Cloud.beforeSave("CommentObject", function(request, response) {

	var text = "Comment Email\n" + 
		"From: "+request.object.get("name") + "\n"+
		"Email: "+request.object.get("email") + "\n"+
		"Area: "+request.object.get("area") + "\n\n"+
		"Comments:\n" + request.object.get("comments");
	
	Mailgun.sendEmail({
			to: "ibrahim_rahman@outlook.com",
			from: request.object.get("email"),
			subject: "Comment Form - " + request.object.get("area"),
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
