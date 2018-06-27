$(document).ready(function(){
	
	$("#registartion_form").submit(function(ev){
		ev.preventDefault();
		let obj = {};
		let name = $('#f_name').val().concat(" ",$('#l_name').val());
		let email = $('#reg_email').val();
		let date = $('#dob').val();
		let mob = $('#mob_no').val();
		let address = $('#reg_address').val();
		let city = $('#city').val();
		let pincode = $('#pincode').val();
		let state = $('#state').val();
		let country = $('#country').val();	
		let education = {
			secondary : {
				board : $("#qua_10_board").val(),
				percentage : $("#qua_10_per").val(),
				year : $("#qua_10_year").val()			
			},
			higherSecondary : {
				board : $("#qua_12_board").val(),
				percentage : $("#qua_12_per").val(),
				year : $("#qua_12_year").val()				
			},
			bachelor : {
				board : $("#qua_grad").val(),
				percentage : $("#qua_grad_per").val(),
				year : $("#qua_grad_year").val()				
			}
		};
		
		checkNumberLength($('#mob_no'),mob.length) && checkNumberLength($('#pincode'),pincode.length) ? 
		submitForm() : null;
				
		function submitForm(){
			obj = {
			name : name,
			email : email,
			date : date,
			mobile : mob,
			address : address,
			city : city,
			pincode : pincode,
			state : state,
			country : country,
			education : education,
			gender : sessionStorage.getItem("gender"),
			hobbies : sessionStorage.getItem("hobbies"),
			course : sessionStorage.getItem("course")
			
		};	
		alert("obj:"+JSON.stringify(obj));
		alert("Success");
		}
	});
	
	function checkNumberLength(arg,length){
		console.log("arg:",arg)
		if(arg[0].id == "mob_no"){			
				return length != 10 ? alert("Mobile Number should have 10 digit number.") : true;
			}
			else{
				return length != 6 ? alert("Pincode Number should have 6 digit number.") : true;
			}
	}
		
	$(".course-container input[type=radio]").click(function(){
		sessionStorage.setItem("course",undefined);
		let course = document.getElementById("registartion_form").elements.namedItem("reg_course").value;
		sessionStorage.setItem('course',course);
		console.log("course",sessionStorage.getItem("course"));
	});
	
	$(".gender-container input[type=radio]").click(function(){
		sessionStorage.setItem("gender",undefined);
		let gender = document.getElementById("registartion_form").elements.namedItem("gender").value;
		sessionStorage.setItem('gender',gender);
	});
	
	$("input[type=checkbox]").click(function(){
		sessionStorage.setItem("hobbies",undefined);
		let hobbyArray = [];
		let hobbies = document.getElementById("registartion_form").elements.namedItem("hobby");
		hobbies.forEach(x=>{
			x.checked ? hobbyArray.push(x.value): null;
		});		
		sessionStorage.setItem("hobbies",hobbyArray);
	});
});