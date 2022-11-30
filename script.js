const password = document.getElementById("password")
const confirm_password = document.getElementById("confirmpassword")

confirm_password.addEventListener("input", (event) => {
    if (confirm_password.value != password.value) {
        confirm_password.setCustomValidity("the two passwords must be equals");
        confirm_password.reportValidity();
    } else {
        confirm_password.setCustomValidity("");
    }
});
