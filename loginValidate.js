

function loginValidate()
{
    var contactFormObj = document.getElementById("login");
    var username = contactFormObj.username.value;
    var password = contactFormObj.password.value;
    var everythingOK = true;

    if (!validateUsername(username))
    {
        alert("Error: Invalid username.");
        everythingOK = false;
        return false;
    }
    
    if (!validatePassword(password))
    {
        alert("Error: Invalid password.");
        everythingOK = false;
        return false;
    }
    
    
    if (everythingOK)
    {
        
        alert("All the information looks good.\n");
        return true;
    }
    else
        return false;
}
function signupValidate()
{
    var contactFormObj = document.getElementById("signup");
    var firstName = contactFormObj.firstname.value;
    var lastName = contactFormObj.lastname.value;
    var username = contactFormObj.username.value;
    var password = contactFormObj.password.value;
    var cpassword = contactFormObj.cpassword.value;
    var affiliate = contactFormObj.affiliatecompany.value;
    var email = contactFormObj.email.value;
    var everythingOK = true;

    if (!validateName(firstName))
    {
        alert("Error: Invalid first name.");
        everythingOK = false;
    //    return false;
    }
    
    if (!validateName(lastName))
    {
        alert("Error: Invalid last name.");
        everythingOK = false;
    //    return false;
    }
    
    if (!validateUsername(username))
    {
        alert("Error: Invalid username.");
        everythingOK = false;
    //    return false;
    }
    
    if (!validatePassword(password))
    {
        alert("Error: Invalid password.");
        everythingOK = false;
    //    return false;
    }
    
    if (!validateCPassword(cpassword,password))
    {
        alert("Error: Invalid Confirm password.");
        everythingOK = false;
    //    return false;
    }
    
    if (!validateAffiliate(affiliate))
    {
        alert("Error: Invalid affiliate company name.");
        everythingOK = false;
    //    return false;
    }
    
    if (!validateEmail(email))
    {
        alert("Error: Invalid e-mail address.");
        everythingOK = false;
    //    return false;
    }
    
    if (everythingOK)
    {
        
        alert("All the information looks good.\nThank you!");
        return true;
    }
    else
        return false;
}
function validateUsername(name)
{
    var p = name.search(/^[-'\w\s]+$/);
    if (p == 0)
        return true;
    else
        return false;
}

function validatePassword(password)
{
    
    if (password != '')
        return true;
    else
        return false;
}
function validateCPassword(password,cp)
{
    
    if (password == cp)
        return true;
    else
        return false;
}
function validateName(name)
{
    var p = name.search(/^[-'\w\s]+$/);
    if (p == 0)
        return true;
    else
        return false;
}


function validateEmail(address)
{
    var p = address.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
    if (p == 0)
        return true;
    else
        return false;
}
function validateAffiliate(affiliate)
{
    
    if (affiliate != '')
        return true;
    else
        return false;
}

