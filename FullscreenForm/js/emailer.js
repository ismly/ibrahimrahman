/* global $,document,console,Parse */
$(document).ready(function() {
	
	var parseAPPID = "GaKSqlLwsgjvXoQfv6pqcyUqPMLd9Re7U98PYpLy";
	var parseJSID = "SsE4vB7TZi3C4nRm5aogs5ewG9adS0FSLl5t2pWP";
	
	Parse.initialize(parseAPPID, parseJSID);
	var emailObject = Parse.Object.extend("emailObject");
	
 
	$("#commentForm").on("submit", function(e) {
		e.preventDefault();
 
		console.log("Handling the submit");
		//add error handling here
		//gather the form data
 
		var data = {};
		data.name = $("#name").val();
		data.email = $("#email").val();
		data.comments = $("#comments").val();
 
		var comment = new emailObject();
		comment.save(data, {
			success:function() {
				console.log("Success");
				$('#response').html('Email successful!').addClass('success').fadeIn('fast');
			},
			error:function(e) {
				console.dir(e);
				$('#response').html('Error! Email unsuccessful!').addClass('error').fadeIn('fast');
			}
		});
	});
});

