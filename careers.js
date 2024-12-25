const resume_file_input = document.getElementById('resume');
const resume_file_info = document.getElementById('resume_file_info');

resume_file_input.addEventListener('change', () => {
    const resume_file = resume_file_input.files[0];
    const resume_file_name = resume_file.name;
    const resume_file_size = resume_file.size;
    // const resume_file_type = resume_file.type;
    

    // resume_file_info.textContent = `File name: ${resume_file_name}, File type: ${resume_file_type}`;
    // document.getElementById('resume_file_info').innerHTML = resume_file_name + ' ' + resume_file_type;
    document.getElementById('resume_file_info').innerHTML = resume_file_name;
});
resume_delete.addEventListener('click', ()=>{
    document.getElementById('resume_file_info').innerHTML ="";
});

const cover_file_input = document.getElementById('cover');
const cover_file_info = document.getElementById('cover_file_info');

cover_file_input.addEventListener('change', () => {
    const cover_file = cover_file_input.files[0];
    const cover_file_name = cover_file.name;
    const cover_file_size = cover_file.size;
    // const cover_file_type = cover_file.type;

    // resume_file_info.textContent = `File name: ${resume_file_name}, File type: ${resume_file_type}`;
    document.getElementById('cover_file_info').innerHTML = cover_file_name;
});
cover_delete.addEventListener('click',() => {
    document.getElementById('cover_file_info').innerHTML ="";
});

function validateForm(){
    let fname = document.forms["careerForm"]["first-name"].value;
    let lname = document.forms["careerForm"]["last-name"].value;
    const nameRegex = /^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //first name validation
    if (fname === ""){
        // alert("First name must be filled out!")
        document.getElementById("fnameAlert").innerHTML="First Name must be filled out!"
        return false;
    }else if(!nameRegex.test(fname)){
        document.getElementById("fnameAlert").innerHTML="Invalid first name!"
        return false;
    }else{
        document.getElementById("fnameAlert").innerHTML=""
    }
    //last name validation
    if(lname ===""){
        document.getElementById("lnameAlert").innerHTML="Last Name must be filled out!"
        return false;
    }else if(!nameRegex.test(lname)){
        document.getElementById("lnameAlert").innerHTML="Invalid last name!"
        return false;
    }else{
        document.getElementById("lnameAlert").innerHTML=""
    }
    //email validation
    let email = document.forms["careerForm"]["email"].value;
    if (email === ""){
        document.getElementById("emailAlert").innerHTML="Email must be filled out!"
        return false;
    }else if(!emailRegex.test(email)){
        document.getElementById("emailAlert").innerHTML="Invalid email!"
        return false;
    }else{
        document.getElementById("emailAlert").innerHTML=""
    }
    //phone number validation
    let phone = document.forms["careerForm"]["phone"].value;
    if (phone === ""){
        document.getElementById("phoneAlert").innerHTML="Phone number must be filled out!"
        return false;
    }else if(isNaN(phone) || phone.length < 10 || phone.length > 15){
         document.getElementById("phoneAlert").innerHTML="Phone number must be 11 digits!"
         return false;
    }else{
         document.getElementById("phoneAlert").innerHTML=""
    }
    

}