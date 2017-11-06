function sellFormValidate() {
    
    var sellFormObj = document.getElementById("sell");
    var productName = sellFormObj.product.value;
    var productWeight = sellFormObj.amount.value;
    var productHarvestDate = sellFormObj.harvest.value;
    var sellerAddress = sellFormObj.shippingAddress.value;
    var sellerTown = sellFormObj.shippingTown.value;
    var validate = true;
    
    if(!validateName(productName)){
        alert("Error: The product name is not valid");
        validate = false;
        return false;
    }
    if(!validateWeight(productWeight)) {
        alert("Error: The product weight is not valid");
        validate = false;
        return false;
    }
    if(!validateDate(productHarvestDate)) {
        alert("Error: The product harvest date is not valid");
        validate = false;
        return false;
    }
    if(!validateAddress(sellerAddress, sellerTown)) {
        alert("Error: The shipping address is not valid");
        validate = false;
        return false;
    }
    if(validate)
    {
        alert("Thank you! A Silo Foods represenative will be in contact with you in 1-2 business days about your order!");
        return true;
    }
    else
    {
        return false;
    }
}

function validateName(productName) {
    var p = name.search(/^[-'\w\s]+$/);
    if (p === 0)
        return true;
    else
        return false;
}

function validateWeight(productWeight) {
    if(isNaN(productWeight) || productWeight < 0)
        return false;
    else
        return true;
}

function validateDate(productHarvestDate) {
    if (productHarvestDate.length !== 10) { 
        return false; 
    } 
    // third and sixth character should be '/' 
    if (productHarvestDate.substring(2, 3) !== '/' || productHarvestDate.substring(5, 6) !== '/') { 
        return false;
}
}
function validateAddress(address, town) {
    var valAd = true;
    if(",#-/ !@$%^*(){}|[]\\".indexOf(address)>=0)
        valAd=false;
    if(",#-/ !@$%^*(){}|[]\\".indexOf(town)>=0)
        valAd=false;
    return valAd;
}
