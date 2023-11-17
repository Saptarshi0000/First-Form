let form1 = document.getElementById("form1");
let user = document.getElementById("user");
let pass = document.getElementById("pass");

form1.onsubmit = function validate(ev) {
    ev.preventDefault();
    if (user.value == '') {
        alert("Please Enter Your Email Id");
        return;
    }
    if (pass.value == '') {
        alert("Please Enter The Password");
        return;
    }
    form1.submit();
}

