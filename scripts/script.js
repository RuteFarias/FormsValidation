var form = document.getElementById("form");

if (form.addEventListener){
    form.addEventListener("submit", validate);
} else if(form.attachEvent){
    form.attachEvent("onsubmit", validate);
}


function validate(){

        
    var  firstname  =  document.getElementById("first-name");
    var  lastname  =  document.getElementById("last-name");
    var  username  =  document.getElementById("validation-username");
    var  city  =  document.getElementById("validation-city");
    var  state  =  document.getElementById("validation-state");
    var  zip  =  document.getElementById("validation-zip");
    var  checkbox  =  document.getElementById("invalid-check");
   

    validation_first_name = document.querySelector(".first-name");
    if (firstname.value !== "") {
        validation_first_name.innerHTML = "Looks good!";
        firstname.style.borderColor = "#28a745";
    }else{
        firstname.style.borderColor = "#dc3545";
    }

    validation_last_name = document.querySelector(".last-name");
    if (lastname.value !== "") {
        validation_last_name.innerHTML = "Looks good!";
        lastname.style.borderColor = "#28a745";
    }else{
        lastname.style.borderColor = "#dc3545";
        
    }

    validation_username = document.querySelector(".username");
    if (username.value == "") {
        validation_username.innerHTML = "Please choose a username.";
        username.style.borderColor = "#dc3545";
    }
    
    validation_city = document.querySelector(".city");
    if (city.value == "") {
        validation_city.innerHTML = "Please provide a valid city.";
        city.style.borderColor = "#dc3545";
    }
        
    validation_state = document.querySelector(".state");
    if (state.value == "") {
        validation_state.innerHTML = "Please provide a valid state.";
        state.style.borderColor = "#dc3545";
    }

    validation_zip = document.querySelector(".zip");
    if (zip.value == "") {
        validation_zip.innerHTML = "Please provide a valid zip.";
        zip.style.borderColor = "#dc3545";
       
    }
    validation_checkbox = document.querySelector(".terms");
    if (checkbox.value == "") {
        validation_checkbox.innerHTML = "You must agree before submiting.";
        checkbox.style.borderColor = "#dc3545";
        
       
    }      
      
  }
