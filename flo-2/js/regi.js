

function signUp_check(){

    var emailId = document.getElementById("regiId");
    var password = document.getElementById("regiPw1");
    var repassword = document.getElementById("regiPw2");
    var name = document.getElementById("regiName");
    var phone = document.getElementById("pn")

    if(emailId.value == ""){
        alert("아이디를 입력하세요.")
        emailId.focus();
        return false;
    }

    if(password.value == ""){
        alert("비밀번호를 입력하세요.")
        password.focus();
        return false;
    }

    if(password.value.length < 8){
        alert("8자리 이상 입력하세요.")
        password.focus();
        return false;
    }

    var passwordCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if(!passwordCheck.test(password.value)){
        alert("비밀번호는 숫자+영어+특수문자 조합으로 8~25자리 사용해야합니다.")
        password.focus();
        return false;
    }

    if(repassword.value !== password.value){
        alert("비밀번호가 일치하지 않습니다.")
        repassword.focus();
        return false;
    }

    if(name.value == ""){
        alert("이름을 입력하세요.")
        name.focus();
        return false;
    }

    var reg = /^[0-9]+/g;

    if(!reg.test(phone.value)){
        alert("전화번호는 숫자만 입력가능합니다.")
        phone.focus();
        return false;
    }

    document.signUp.submit();
}