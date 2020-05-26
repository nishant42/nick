function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var zip = document.getElementById("zip").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value; 
    var error_message = document.getElementById("error_message");
    var text;
    

     error_message.style.padding = "10px";
     if(name.length <5){
         text = " Please enter valid name" ;
         error_message.innerHTML = text;
         return false;
     }
   
     if(subject.length <10){
        text = " Please enter correct Subject" ;
        error_message.innerHTML = text;
        return false;
    }
    
    if(isNaN(phone) || phone.length != 10){
        text = " Please enter valid Phone number" ;
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(zip) || zip.length != 6){
        text = " Please enter valid zipcode number" ;
        error_message.innerHTML = text;
        return false;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(mailformat)){
        text = " Please enter valid Email" ;
        error_message.innerHTML = text;
        return false;
    }
    
    if(message.length <= 50){
        text = "please Enter more than 50 characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!")
     return true;
}
