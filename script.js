// Login button


// function login(){
// 	var username = document.getElementById("username").value;
// 	var password= document.getElementById("password").value;
// 	if(username=="admin@user.com"|| password=="123456"){
// 		// window.location.href = "home.html"
//         // success();
// alert("Login successful");
// window.location.href="landing.html";
// 	}else{
// 		alert("wrong email or password")
// 	}
// }




document.getElementById("login").onclick=function(){
	var username=document.getElementById("username").value ;
	var password=document.getElementById("password").value ;
	if(username=="admin@user.com"&& password=="123456"){
		window.location.href="home.html";
		alert("Login successful")

	}else{
		alert("Incorrect email or password")
	}
}