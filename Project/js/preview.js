// Image
let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("upload");

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    //console.log(uploadButton.files[0]);
    reader.onload = () => {
        upload.src = URL.createObjectURL(uploadButton.files[0]);
        var preview = document.getElementById("upload").style.opacity = 1;
    }
}