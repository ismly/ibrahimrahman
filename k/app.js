/* global $,document,console,Parse */
$(document).ready(function() {
	
	var parseAPPID = "GaKSqlLwsgjvXoQfv6pqcyUqPMLd9Re7U98PYpLy";
	var parseJSID = "SsE4vB7TZi3C4nRm5aogs5ewG9adS0FSLl5t2pWP";
	
	Parse.initialize(parseAPPID, parseJSID);
	var CommentObject = Parse.Object.extend("CommentObject");
	
	$("#commentForm").on("submit", function(e) {
		e.preventDefault();

		console.log("Handling the submit");
		//add error handling here
		//gather the form data

		var data = {};
		data.name = $("#name").val();
		data.email = $("#email").val();
		data.area = $("#area option:selected").val();
		data.comments = $("#comments").val();

		var comment = new CommentObject();
		comment.save(data, {
			success:function() {
				console.log("Success");
				//Alerts are lame - but quick and easy
				alert("Thanks for filling the form!");
			},
			error:function(e) {
				console.dir(e);
			}
		});
		
	});
	
});
