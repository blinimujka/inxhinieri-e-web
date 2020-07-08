

function changeForm(form) {
    let forms = document.querySelectorAll("form>div");
    if (form == 0) {
        forms[0].classList.remove("hidden");
        forms[0].classList.add("form-style");
        forms[1].classList.add("hidden");
        forms[1].classList.remove("form-style");
    } else {
        forms[1].classList.remove("hidden");
        forms[1].classList.add("form-style");
        forms[0].classList.add("hidden");
        forms[0].classList.remove("form-style");
    }
}
 



function validateForm(form) {
    
    var loginEmail = document.querySelectorAll("input").item(0);
    var loginPass = document.querySelectorAll("input").item(1);
    var regName =document.querySelectorAll("input").item(3);
    var regEmail =document.querySelectorAll("input").item(4);
    var regPassword = document.querySelectorAll("input").item(5);

    if(form == 0){
        if(loginEmail.value == "" || loginEmail.value == null){
    
            loginEmail.style.border = "1px solid red";
           
       }
       if(loginPass.value =="" ||loginPass.value == null){
      
        loginPass.style.border = "1px solid red";
    }
}

    if (form ==1){
        if(regName.value =="" ||regName.value == null){
            
            regName.style.border = "1px solid red";
           }
           if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(regEmail.value)){
             regEmail.style.border = "1px solid red";
        }
        if(!/(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.{8,})/.test(regPassword.value)){
            document.getElementById("pwd-req-display").style.visibility = "visible";
            regPassword.style.border = "1px solid red";
        }
    }
}

   

var display = document.getElementById("pwd-click").addEventListener("click",function(){
    document.getElementById("pwd-req-display").style.visibility = "visible";
    
    }) //e shfaq kriterin per password valid
    

