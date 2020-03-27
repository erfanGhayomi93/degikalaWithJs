let email = document.getElementById('username');
let mobile = document.getElementById('mobile');
let meli_num = document.getElementById('meli_num');
let password = document.getElementById('password');
let form_register = document.getElementById('form_register');

let regextest = "";
let regexMob = "";
let val = "";
let patternMob = /^(0|0098|\+98)9\d{9}$/g;
var patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let error = "";
let flag = false;

function validItem(e) {
    error = e.target.nextElementSibling.nextElementSibling;
    error.style.display = "block";
    error.innerHTML = `<span>${e.target.name} را وارد نمایید</span>`;
}

function invalid(e) {
    error = e.target.nextElementSibling.nextElementSibling;
    error.style.display = "none";
}

function regex(val, pattern) {
    regexMob = new RegExp(pattern);
    regextest = regexMob.test(val);
    return regextest;
}

function handleRegex() {
    if (email.value) {
        regex(this.value, patternEmail);
        if (!regextest) {
            error = this.nextElementSibling.nextElementSibling;
            error.style.display = "block";
            error.innerHTML = `<span>${this.name} را اشتباه وارد کردید</span>`;
            flag = false
        }
    }

}


let handleKeyup = (e) => {
    let value = e.target.value;

    if (!value.length >= 1) {
        validItem(e);
    } else {
        invalid(e);
    }

};

let handelForm = (e) => {
    e.preventDefault();
    if (email.value < 1) {
        flag = false;
        let error_user = email.nextElementSibling.nextElementSibling;
        error_user.style.display = "block";
    } else if (mobile.value < 1) {
        flag = false;
        let error_mob = mobile.nextElementSibling.nextElementSibling;
        error_mob.style.display = "block";
    } else if (meli_num.value < 1) {
        flag = false;
        let error_meli = meli_num.nextElementSibling.nextElementSibling;
        error_meli.style.display = "block";
    } else if (password.value < 1) {
        flag = false;
        let error_pass = password.nextElementSibling.nextElementSibling;
        error_pass.style.display = "block";
    } else if (flag == true) {
        flag = true;
        alert('با موفقیت در سایت ثبت نام کردید')
    }
};

email
    .addEventListener('keyup', handleKeyup);
email
    .addEventListener('blur', handleRegex);
mobile
    .addEventListener('keyup', handleKeyup);
mobile
    .addEventListener('blur', handleRegex);
meli_num
    .addEventListener('keyup', handleKeyup);
password
    .addEventListener('keyup', handleKeyup);
form_register
    .addEventListener('submit', handelForm);

email.focus();