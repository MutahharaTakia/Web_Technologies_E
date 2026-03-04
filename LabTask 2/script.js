console.log("connected");

function collectData()
{
    alart("Login Form Submitted");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    console.log("Collected data from form");
    console.log(email);
    console.log(password);

    if(!email){
        document.getElementById("emailErr").innerHTML="Email is mendatoey";
    }else{
        document.getElementById("passwordErr").innerHTML="";
    }
    return false;
}

function getEmail(){
    const email = document.getElementById("email").value;
    console.log("Given email is...", email);
}

function getPassword(){
    const password = document.getElementById("password").value;
    console.log("Given password is...", password);
}