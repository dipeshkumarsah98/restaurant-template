function showPassword() {
    var passoword = document.getElementById("password-field");

    if (passoword.type === "password") {
        passoword.type = "text";
    }
    else {
        passoword.type = "password";
    }
}