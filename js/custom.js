function firstNameCheck() {
    var firstNaveLangth = $('#firstName').val().length;
    if(firstNaveLangth >=6 && firstNaveLangth<=15){
        $('#firstNameError').text(' ');
        return true;
    }else {
        $('#firstNameError').text('First name should be between 6 to 15 character');
        return false;
    }
};

$('#firstName').click(function () {
    firstNameCheck();
});
$('#firstName').blur(function () {
    firstNameCheck();
});

$('#firstName').keyup(function () {
    firstNameCheck();
});

//LAST NAME CHECK

function lastNameCheck() {
    var firstNaveLangth = $('#lastName').val().length;
    if(firstNaveLangth >=6 && firstNaveLangth<=15){
        $('#lastNameError').text(' ');
        return true;
    }else {
        $('#lastNameError').text('Last name should be between 6 to 15 character');
        return false;
    }
};

$('#lastName').click(function () {
    lastNameCheck();
});
$('#lastName').blur(function () {
    lastNameCheck();
});

$('#lastName').keyup(function () {
    lastNameCheck();
});
//CHECK EMAIL ADDRESS

function checkEmailAddress() {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    var testEmail = $('#emailAddress').val();

    if(pattern.test(testEmail)){
        $('#emailError').text(' ');
        return true;
    }else {
        $('#emailError').text(' Email address is invalid ');
        return false;
    }
};

$('#emailAddress').blur(function () {
    checkEmailAddress();
});

$('#emailAddress').keyup(function () {
    checkEmailAddress();
});

//CHECK PASSWORD

function checkPassword() {
    var passwordLength = $('#password').val().length;

    if (passwordLength >=6 && passwordLength<=15){
        $('#passwordError').text(' ');
        return true;
    }else {
        $('#passwordError').text('Password at least 6 characters');
        return false;
    }
};
$('#password').keyup(function () {
    checkPassword();
});
$('#password').blur(function () {
    checkPassword();
});

//CONFIRM PASSWORD
function checkConfirmPassword() {
   var passwordValue = $('#password').val();
   var confirmPasswordValue = $('#confirmPassword').val();

   if(passwordValue == confirmPasswordValue){
       $('#confirmPasswordError').text(' ');
       return true;
   }else {
       $('#confirmPasswordError').text('Password does not match ');
       return false;
   }
};
$('#confirmPassword').keyup(function () {
    checkConfirmPassword();
});
$('#confirmPassword').blur(function () {
    checkConfirmPassword();
});
// SHOW HIDE PASSWORD
$('#check').click(function () {
    if(this.checked){
        $('#password').attr('type','text');

    }else {
        $('#password').attr('type','password');

    }
});

$('#check').click(function () {
    if(this.checked){
        $('#confirmPassword').attr('type','text');

    }else {
        $('#confirmPassword').attr('type','password');

    }
});
//GENDER
function checkGender() {
    var genderValue =$('input[type="radio"]:checked').val() ;
    if(genderValue){
        $('#genderError').text(" ");
        return true;
    }else{
        $('#genderError').text('Please select your gender ');
        return false;
    }
};
$('input[type="radio"]:checked').blur(function () {
    checkGender();
});
//District Name valid

function checkDistrictName() {
    var districtNameValue = $('#districtName').val();

    if(districtNameValue == " "){
        $("#districtNameError").text('Select your district address')
        return false;
    }else {
        $("#districtNameError").text(' ')
        return true;
    }
};

$('#districtName').change(function () {
    checkDistrictName();
});


///IMAGE UPLOAD
function imgUpload(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageUpload').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


$("#inputFile").change(function () {
    imgUpload(this);
});






$('#registrationForm').submit(function () {
   if(firstNameCheck() == true && lastNameCheck()== true && checkEmailAddress() == true && checkPassword() == true &&
       checkConfirmPassword()== true && checkGender() == true && checkDistrictName()== true ){
        return true;
   }else {
       return false;
   }
})