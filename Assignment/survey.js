function validateForm() {
    // Retrieve form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const male = document.getElementById("male").checked;
    const female = document.getElementById("female").checked;
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Perform basic form validation
    if (!firstName || !lastName || !dob || !country || (!male && !female) || !profession || !email || !mobile) {
        alert("Please fill in all required fields.");
        return false;
    }

    // Create a popup to display the form data
    const popup = document.getElementById("popup");
    const popupData = document.getElementById("popupData");
    popupData.innerHTML = "";

    popupData.innerHTML += `<li><strong>First Name:</strong> ${firstName}</li>`;
    popupData.innerHTML += `<li><strong>Last Name:</strong> ${lastName}</li>`;
    popupData.innerHTML += `<li><strong>Date of Birth:</strong> ${dob}</li>`;
    popupData.innerHTML += `<li><strong>Country:</strong> ${country}</li>`;
    popupData.innerHTML += `<li><strong>Gender:</strong> ${male ? "Male" : ""} ${female ? "Female" : ""}`;
    popupData.innerHTML += `<li><strong>Profession:</strong> ${profession}</li>`;
    popupData.innerHTML += `<li><strong>Email:</strong> ${email}</li>`;
    popupData.innerHTML += `<li><strong>Mobile Number:</strong> ${mobile}</li>`;

    popup.style.display = "block";

    return false;
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
    resetForm();
}
