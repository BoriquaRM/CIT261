var user;
var ad;

function customerInfo(fname,lname,email,phone) {
    var user = {"firstname":fname,"lastname":lname,"emailaddress":email,"phonenumber":phone};
    var myJSON = JSON.stringify(user);
    storeCustomerInfo(myJSON);
    retrieveCustomerInfo();
}
    
function storeCustomerInfo(myJSON) {
    localStorage.setItem("testJSON", myJSON);
}

function retrieveCustomerInfo() {
    text = localStorage.getItem("testJSON");
    customerData = JSON.parse(text);
    document.getElementById("pID1").innerHTML = 
            customerData.firstname + " " + customerData.lastname + "<br>" +
            customerData.phonenumber + "<br>" +
			customerData.emailaddress;
}