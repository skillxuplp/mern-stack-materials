// access all the required items
const form = document.getElementById("form");

const username = document.getElementById("username");
const emailaddress = document.getElementById("emailaddress");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList = "form-control error";

    const small = formControl.querySelector("small");
    small.innerText = message;
}

// show input success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList = "form-control success";
}

// check required of all inputs
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

// check input length of all inputs
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at-least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} should be with in ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// check username is valid
function checkUsername(input) {
    const regex = /^[A-Za-z][A-Za-z0-9_]{6,17}$/;
    if (regex.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `${getFieldName(input)} is not a valid input`);
    }
}

// check emailaddress is valid
function checkEmailaddress(input) {
    const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if (regex.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `${getFieldName(input)} is not a valid input`);
    }
}

// check password is valid
function checkPassword(input) {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (regex.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `${getFieldName(input)} is not a valid input`);
    }
}

// check confirm_password is valid
function checkConfirmPassword(input) {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (regex.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `${getFieldName(input)} is not a valid input`);
    }
}

// check password match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, `${getFieldName(input2)} is do not match`);
    }
}

// getFieldName - username: Username
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// event listeners
form.addEventListener("submit", function (event) {
    event.preventDefault();

    checkRequired([username, emailaddress, password, confirm_password]);
    
    checkLength(username, 6, 17);
    checkLength(emailaddress, 8, 19);
    checkLength(password, 7, 15);
    checkLength(confirm_password, 7, 15);

    checkUsername(username);
    checkEmailaddress(emailaddress);
    checkPassword(password);
    checkConfirmPassword(confirm_password);

    checkPasswordsMatch(password, confirm_password);
});