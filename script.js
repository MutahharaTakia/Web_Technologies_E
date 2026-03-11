console.log("Js connected");

let total = 0;
let virtual = 0;
let inperson = 0;

function collectData(){
   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;

    const attendance = document.getElementByName("attendence");

    let attendanceValue = "";

    for(let i =0; i< attendance.length; i++){
        if(attendance[i].checked){
            attendanceValue = attendance[i].value;
        }
    }

    if(name.length<6|| name.length>100){
        document.getElementById("nameErr").innerHTML = "Name must be between 6 and 100 characters.";
    } else{
        document.getElementById("nameErr").innerHTML = "";
    }
    if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("emailErr").innerHTML =
      "Please enter a valid professional email address.";
    } else {
    document.getElementById("emailErr").innerHTML = "";
     }

    if (company.length > 100) {
    document.getElementById("companyErr").innerHTML =
    "Maximum 100 characters allowed.";
     } else {
    document.getElementById("companyErr").innerHTML = "";
     }

    if (!attendanceValue) {
      document.getElementById("attendanceErr").innerHTML =
      "Please select your attendance type.";
     } else {
       document.getElementById("attendanceErr").innerHTML = "";
      }

    if (
    name.length >= 6 &&
    name.length <= 100 &&
    email.includes("@") &&
    email.includes(".") &&
    attendanceValue
     ) {
       total++;

    if (attendanceValue === "Virtual") {
      virtual++;
    } else {
      inperson++;
    }

    document.getElementById("total").innerHTML = total;
    document.getElementById("virtualCount").innerHTML = virtual;
    document.getElementById("inpersonCount").innerHTML = inperson;

    console.log("Form Submitted");
  }

  return false;

}

 function getEmail(){
    const email =document.getElementById("email").value;
    console.log("Email:",email);
}

function getName(){
    const name =document.getElementById("name").value;
    console.log("Name:",name);
}

function toggleAnalytics(){
    const panel = document.getElementById("analyticsPanel");
    const btn = document.getElementById("analyticsBtn");

     if (panel.style.display === "none") {
    panel.style.display = "block";
    btn.innerHTML = "Hide Event Analytics";
  } else{
    panel.style.display = "none";
    btn.innerHTML="Show Event Analytics";
  }
}



