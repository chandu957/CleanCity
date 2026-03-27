function previewImage() {
    const file = document.getElementById("image").files[0];
    const preview = document.getElementById("preview");

    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    }
}

function submitReport() {
    let location = document.getElementById("location").value;
    let desc = document.getElementById("desc").value;
    let imageInput = document.getElementById("image");
    let imageFile = imageInput.files[0];

    if (location === "" || desc === "") {
        alert("Please fill all fields");
        return;
    }

    let reportDiv = document.createElement("div");
    reportDiv.className = "report";

    let imgTag = "";
    if (imageFile) {
        let imgURL = URL.createObjectURL(imageFile);
        imgTag = `<img src="${imgURL}" width="100%">`;
    }

    reportDiv.innerHTML = `
        <h3>📍 ${location}</h3>
        <p>${desc}</p>
        ${imgTag}
    `;

    document.getElementById("reports").appendChild(reportDiv);

    // Clear inputs
    document.getElementById("location").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("image").value = "";
    document.getElementById("preview").style.display = "none";
}
