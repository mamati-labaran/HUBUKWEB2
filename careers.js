const resume_file_input = document.getElementById('resume');
// const resume_file_info = document.getElementById('resume_file_info');

resume_file_input.addEventListener('change', () => {
    const resume_file = resume_file_input.files[0];
    const resume_file_name = resume_file.name;
    const resume_file_size = resume_file.size;
    const resumeSizeInKB = (resume_file_size/1024).toFixed(2);
    const resumeSizeInMB = (resumeSizeInKB/1024).toFixed(2);

    document.getElementById('resume_name').innerHTML = resume_file_name;

    // size display
    if (resume_file_size > 1024 && resume_file_size < 1048576){
        document.getElementById('resume_size').innerHTML = resumeSizeInKB + "KB";
    }else if (resume_file_size >= 1048576){
        document.getElementById('resume_size').innerHTML = resumeSizeInMB + "MB";
    }
    
});
resume_delete.addEventListener('click', ()=>{
    document.getElementById('resume_name').innerHTML ="";
    document.getElementById('resume_size').innerHTML ="";
});

const cover_file_input = document.getElementById('cover');
// const cover_file_info = document.getElementById('cover_file_info');

cover_file_input.addEventListener('change', () => {
    const cover_file = cover_file_input.files[0];
    const cover_file_name = cover_file.name;
    const cover_file_size = cover_file.size;
    const coverSizeInKB = (cover_file_size/1024).toFixed(2);
    const coverSizeInMB = (coverSizeInKB/1024).toFixed(2);

    document.getElementById('cover_name').innerHTML = cover_file_name;
    if (cover_file_size > 1024 && cover_file_size < 1048576){
        document.getElementById('cover_size').innerHTML = coverSizeInKB + "KB";
    }else if (cover_file_size >= 1048576){
        document.getElementById('cover_size').innerHTML = coverSizeInMB + "MB";
    }
    
    document.getElementById('cover_name').innerHTML = cover_file_name;
});
cover_delete.addEventListener('click',() => {
    document.getElementById('cover_name').innerHTML ="";
});

document.getElementById("careerForm").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();
    let fname = document.forms["careerForm"]["first-name"].value;

    // Run the validation function
    if (validateForm()) {
        // If validation passes, redirect to another page with the name as query parameter
        window.location.href = "success.html?name=" + encodeURIComponent(fname);
    }
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
    
    return true;
}