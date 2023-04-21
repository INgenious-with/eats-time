/**
 * 
 */


let $mousepoint1 = $("#li-1");
let $mousepoint2 = $("#li-2");
let $mousepoint3 = $("#li-3");

let $point1 = $("use.point1");
let $point2 = $("use.point2");
let $point3 = $("use.point3");

$mousepoint1.on("mouseover", function() {

	$point1.css("stroke", "#ff4f32");

});



$mousepoint1.on("mouseout", function() {

	$point1.css("stroke", "#999");

});


$mousepoint2.on("mouseover", function() {

	$point2.css("stroke", "#ff4f32");

});


$mousepoint2.on("mouseout", function() {

	$point2.css("stroke", "#999");

});

$mousepoint3.on("mouseover", function() {

	$point3.css("stroke", "#ff4f32");

});

const inputmale = document.querySelector("#gender-man");
const inputfemale = document.querySelector("#gender-woman");
const inputnone = document.querySelector("#gender-none");




const spanmale = document.querySelector("#male");
const spanfemale = document.querySelector("#female");
const spannone = document.querySelector("#none");

const divmale = document.querySelector("#divmale");
const divfemale = document.querySelector("#divfemale");
const divnone = document.querySelector("#divnone");


 inputmale.addEventListener("click", () => {
        spanmale.style.background="#ff4f32";
		divmale.style.background="#fff";
		
		spanfemale.style.background="#fff";
		spanfemale.style.border="1px solid #dddddd";

		spannone.style.background="#fff";
		spanfemale.style.border="1px solid #dddddd";
		
		
		
    });


 inputfemale.addEventListener("click", () => {
        spanfemale.style.background="#ff4f32";
		divfemale.style.background="#fff";
		
		spanmale.style.background="#fff";
		spanmale.style.border="1px solid #dddddd";
		
		spannone.style.background="#fff";
		spannone.style.border="1px solid #dddddd";
    });


 inputnone.addEventListener("click", () => {
        spannone.style.background="#ff4f32";
		divnone.style.background="#fff";
		
		spanmale.style.background="#fff";
		spanmale.style.border="1px solid #dddddd";
		
		spanfemale.style.background="#fff";
		spanfemale.style.border="1px solid #dddddd";
    });



/*비밀번호 입력창 태그*/
let passwordVal = $("#originalPassword").value;

let password= $("#originalPassword");
let newPassword= $("#newPassword");
let rePassword= $("#newPasswordConfirm");


//에러1 : 현재 비밀번호 잘못 입력 
password.bind('focus', function() {

	password.blur(function(e) {

		if ($(e.target).val() == passwordVal) {
			$(".error1").text("");
		} else {
			$(".error1").text("현재 비밀번호를 확인해주세요");
		}

	})

})



newPassword.bind('focus', function() {

	newPassword.blur(function(e) {

		
		if ($(e.target).val() == ""){
			$(".error2").text("10자 이상 입력");
		} if($(e.target).val().length<10){
		
			$(".error2").text("10자 이상 입력");
		}
		if($(e.target).val().length>9){
			$(".error2").text("영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합");
		}
//		else{
//			$(".error2").text("");
//		}

		nowpassword=$(e.target).val();
	})

})

//새 비밀번호 재입력
rePassword.bind('focus', function() {

	rePassword.blur(function(e) {

		if ($(e.target).val() != nowpassword) {
			$(".error3").text("동일한 비밀번호를 입력해주세요.");
		} else {
			$(".error3").text("");
		}

	})

})




/*이름 입력창 태그*/
let name = $("#name");
let email = $("#email");


/*이메일 유효성검사 함수*/
function fn_emailChk(email) {
	let regExp = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{1,4}$/;
	if (!regExp.test(email)) {
		return false;
	}
	return true;
}


email.bind('focus', function() {

	email.blur(function(e) {

		if ($(e.target).val() == "") {
			$(".error5").text("이메일을 입력해주세요");
		} else if (!fn_emailChk($(e.target).val())) {
			$(".error5").text("올바른 이메일 형식을 입력해 주세요");
		} else {
			$(".error5").text("");
		}

	})

})

name.bind('focus', function() {

	name.blur(function(e) {

		if ($(e.target).val() == "") {
			$(".error4").text("이름을 입력해주세요");
		} else {
			$(".error4").text("");
		}

	})

})






















