const resume_file_input = document.getElementById('resume');
document.getElementById('resume_box').style.display = 'none';
document.getElementById('cover_box').style.display = 'none';
const allowedextensions = ['pdf', 'docx', 'doc']


resume_file_input.addEventListener('change', () => {
    const resume_file = resume_file_input.files[0];
    const resume_file_name = resume_file.name;
    const resume_file_size = resume_file.size;
    const resumeSizeInKB = (resume_file_size/1024).toFixed(2);
    const resumeSizeInMB = (resumeSizeInKB/1024).toFixed(2);
    //upload validation
    const resume_extension = resume_file_name.split('.').pop().toLowerCase();
    if(!allowedextensions.includes(resume_extension)){
        document.getElementById('resume_alert').innerHTML = 'Invalid file type. Only PDF, DOCX, DOC, and PDF files are allowed.';
        
    }else{
        document.getElementById('resume_box').style.display = 'flex';
        document.getElementById('resume_name').innerHTML = resume_file_name;
        document.getElementById('resume_alert').innerHTML = "";
    // size display
        if (resume_file_size > 1024 && resume_file_size < 1048576){
        document.getElementById('resume_size').innerHTML = resumeSizeInKB + "KB";
        }else if (resume_file_size >= 1048576 && resume_file_size < 5242880){
        document.getElementById('resume_size').innerHTML = resumeSizeInMB + "MB";
        }
        if(resume_file_size > 5242880){
            document.getElementById('resume_alert').innerHTML = 'File size is too large. Maximum allowed size is 5MB.';
            document.getElementById('resume_box').style.display = 'none';
        }else{
            document.getElementById('resume_alert').innerHTML="";
        }
    }
    
    
});
resume_delete.addEventListener('click', ()=>{
    resume_file_input.value = '';
    document.getElementById('resume_box').style.display = 'none';   
});

const cover_file_input = document.getElementById('cover');

cover_file_input.addEventListener('change', () => {
    const cover_file = cover_file_input.files[0];
    const cover_file_name = cover_file.name;
    const cover_file_size = cover_file.size;
    const coverSizeInKB = (cover_file_size/1024).toFixed(2);
    const coverSizeInMB = (coverSizeInKB/1024).toFixed(2);
    const cover_extension = cover_file_name.split('.').pop().toLowerCase();
    if(!allowedextensions.includes(cover_extension)){
        document.getElementById('cover_alert').innerHTML = 'Invalid file type. Only PDF, DOCX, DOC, and PDF files are allowed.';
    }else{
        document.getElementById('cover_box').style.display = 'flex';
        document.getElementById('cover_name').innerHTML = cover_file_name;
        document.getElementById('cover_alert').innerHTML = "";
        if (cover_file_size > 1024 && cover_file_size < 1048576){
            document.getElementById('cover_size').innerHTML = coverSizeInKB + "KB";
        }else if (cover_file_size >= 1048576){
            document.getElementById('cover_size').innerHTML = coverSizeInMB + "MB";
        }
        document.getElementById('cover_name').innerHTML = cover_file_name;
        if (cover_file_size > 5242880){
            document.getElementById('cover_alert').innerHTML = 'File size is too large. Maximum allowed size is 5MB.';
            document.getElementById('resume_box').style.display = 'none';
        }else{
            document.getElementById('resume_alert').innerHTML="";
        }
    }
        
});
cover_delete.addEventListener('click',() => {
    cover_file_input.value = '';
    document.getElementById('cover_box').style.display = 'none';

});

document.getElementById("careerForm").addEventListener("submit", function(event) {
    clear();
    // Prevent the default form submission
    event.preventDefault();
    let fname = document.forms["careerForm"]["first-name"].value;
    let lname = document.forms["careerForm"]["last-name"].value;
    const nameRegex = /^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid = true;
    //first name validation
    if (fname === "" ||!nameRegex.test(fname)){
        // alert("First name must be filled out!")
        document.getElementById("fnameAlert").innerHTML="Please enter a valid first name!"
        isValid = false;
    }
    //last name validation
    if(lname ===""|| !nameRegex.test(lname)){
        document.getElementById("lnameAlert").innerHTML="Please enter a valid last name!"
        isValid = false;
    }
    //email validation
    let email = document.forms["careerForm"]["email"].value;
    if (email === "" ||!emailRegex.test(email)){
        document.getElementById("emailAlert").innerHTML="Please enter a valid email address!"
        isValid = false;
    }
    let phone = document.forms["careerForm"]["phone"].value;
    //COME BACK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!PUT REGEX INSTEAAD!!!!!!!!
    if(isNaN(phone)|| phone===""){
        document.getElementById("phoneAlert").innerHTML="Please enter a valid phone number!"
        isValid = false;
    }
    let address = document.forms["careerForm"]["address"].value;
    if(address===""){
        document.getElementById("addressAlert").innerHTML="Please enter your address!"
        isValid = false;
    }
    
    
    if (isValid){
        
        localStorage.setItem("username", fname);
       // window.location.href = "success.html";
    }else{
        
    }
    submitForm();
   
});
function clear(){
    document.getElementById("fnameAlert").innerHTML=""
    document.getElementById("lnameAlert").innerHTML=""
    document.getElementById("emailAlert").innerHTML=""
    document.getElementById("phoneAlert").innerHTML=""
}
async function submitForm() {
    // Store form inputs in variables
    let fname = document.forms["careerForm"]["first-name"].value;
    let lname = document.forms["careerForm"]["last-name"].value;
    let email = document.forms["careerForm"]["email"].value;
    let phone = document.forms["careerForm"]["phone"].value;
    let address = document.forms["careerForm"]["address"].value;
    const resume_file = resume_file_input.files[0];
    const cover_file = cover_file_input.files[0];
    let portfolio = document.forms["careerForm"]["portfolio_link"].value;
    let linkedIn = document.forms["careerForm"]["linkedIn"].value;
    let jobId = 1;
    submitBtn = document.getElementById("submit");

    submitBtn.innerHTML = "Submitting..."
    submitBtn.disabled = true;

    // Create FormData object
    const formData = new FormData();
    formData.append('jobId', jobId);
    formData.append('firstName', fname);
    formData.append('lasttName', lname);
    formData.append('email', email);
    formData.append('phoneNumber', phone);
    formData.append('permanentAddress', address);
    formData.append('CV', resume_file);
    formData.append('coverLetter', cover_file);
    formData.append('linkedinProfile', linkedIn);
    formData.append('portfolioWebsite', portfolio);

    try {
        // Send POST request using Fetch API
        const response = await fetch('https://api.hubuk.ng/api/JobApplicantion/Apply', {
            method: 'POST',
            body: formData
        });

        if (response.status === 200) {
            alert("successful")
            window.location.href = "success.html";
        }else if(response.status === 500){
            window.location.href = "error.html";
        }else if(response.status ===400){
            alert("Please check your inputs and try again.")
        }else{
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse and display the response
        const data = await response.json();
        //document.getElementById('data').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        console.error('Error:', error);

        // Display error message
        document.getElementById('data').innerHTML = '<span class="error">An error occurred while submitting the form.</span>';
    }finally{
        submitBtn.innerHTML = "Submit Your Application";
        submitBtn.disabled = false;
    }
}