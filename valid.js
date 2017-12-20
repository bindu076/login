debugger;
var email_check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var errors = [];
var data_obj;

	
		function checkForm(form){
			var email = form.emailId.value;
			var password = form.pwd.value;
			if (!email_check.test(email)) {
				errors[errors.length] = "You must enter a valid email address.";
			 }

			 if (password =='') {
			  errors[errors.length] = "You must enter the password ";
			 }
			 
			 if (errors.length > 0) {        
			  reportErrors(errors);
			 }
			if(errors.length == 0){
					  alert("login success");
				 }

			}
		function reportErrors(errors){
			 var msg = "Please Enter Valide Data...\n";
			 for (var i = 0; i< errors.length; i++) {
			 var numError = i + 1;
			  msg += "\n" + numError + ". " + errors[i];
			}
			 alert(msg);
		}
		function check_form(form){
			var email = form.emailId2.value;
			var password = form.pwd2.value;
			var street_address = form.address.value;
			var city_address = form.city.value;
			var state_address = form.state.value;
			var zip_address = form.Zip.value;
			data_obj ={"name": email,"pwd": password};
			
			if (!email_check.test(email)) {
			errors[errors.length] = "You must enter a valid email address.";
			 }
			 if (password =='') {
			  errors[errors.length] = "You must enter the password ";
			 }
			if(street_address == ""){
					errors[errors.length] = "Enter Suite Address";
				}
			if(!city_address.match(/^[A-Z]/)){
				errors[errors.length] = "Enter the City in UpperCase";
			}
			if(state_address.length !== 2){
				errors[errors.length] = "Enter State";
			}
			if (zip_address.length !== 5 && !zip_address.match(/^[0-9]/)){
				errors[errors.length] = "Enter ZipCode"
			}
			 if (errors.length > 0) {        
			  reportErrors(errors);
			 }
			if(errors.length == 0){
					  window.open("login.html");
				 }

			}
			
			
	// (function(console){

	// console.save = function(data, filename){

		// if(!data) {
			// console.error('Console.save: No data')
			// return;
		// }

		// if(!filename) filename = 'console.json'

		// if(typeof data === "object"){
			// data = JSON.stringify(data, undefined, 4)
		// }

		// var blob = new Blob([data], {type: 'text/json'}),
			// e    = document.createEvent('MouseEvents'),
			// a    = document.createElement('a')

		// a.download = filename
		// a.href = window.URL.createObjectURL(blob)
		// a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
		// e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
		// a.dispatchEvent(e)
	 // }
	// })(console)
	
	
	// var fs = require('fs');

	// var obj = {
	   // table: []
	// };
	// fs.exists('data.json', function(exists){
		// if(exists){
			// console.log("yes file exists");
			// fs.readFile('data.json', function readFileCallback(err, data){
			// if (err){
				// console.log(err);
			// } else {
			// obj = JSON.parse(data); 
			// for (i=0; i<5 ; i++){
			// obj.table.push({id: i, square:i*i});
			// }
			// var json = JSON.stringify(data_obj); 
			// fs.writeFile('data.json', json); 
			// }});
		// } else {
			// console.log("file not exists")
			// for (i=0; i<5 ; i++){
			// data_obj.table.push({id: i, square:i*i});
			// }
			// var json = JSON.stringify(dat_obj);
			// fs.writeFile('data.json', json);
			// }
		// });
		