// chapter 84: Form validation: radio-button

// validaion function
function validateRadios(groupName) {
    var radio = document.getElementsByName(groupName);
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked){
            return true;// At least one option is selected
        }
    }
    alert("Please check one.");
        return false; // Prevents form submission
}




