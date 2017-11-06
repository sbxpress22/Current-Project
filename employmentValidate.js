

function employmentValidate()
{
    var employmentFormObj = document.getElementById("employment");
    var firstName = employmentFormObj.firstName.value;
    var lastName = employmentFormObj.lastName.value;
    var phone = employmentFormObj.phone.value;
    var email = employmentFormObj.email.value;
    var everythingOK = true;

    if (!validateName(firstName))
    {
        alert("Error: Invalid first name.");
        everythingOK = false;
        return false;
    }
    
    if (!validateName(lastName))
    {
        alert("Error: Invalid last name.");
        everythingOK = false;
        return false;
    }
    
    if (!validatePhone(phone))
    {
        alert("Error: Invalid phone number.");
        everythingOK = false;
        return false;
    }
    
    if (!validateEmail(email))
    {
        alert("Error: Invalid e-mail address.");
        everythingOK = false;
        return false;
    }
    
    if (everythingOK)
    {
        if (employmentFormObj.reply.checked)
            alert("Warning: The e-mail feature is currently not supported.");
        alert("All the information looks good.\nThank you!");
        return true;
    }
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

function validatePhone(phone)
{
    var p1 = phone.search(/^\d{3}[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/);
    var p2 = phone.search(/^\d{3}[-\s]{0,1}\d{4}$/);
    if (p1 == 0 || p2 == 0)
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

