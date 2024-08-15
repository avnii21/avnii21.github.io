
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("enlargedImage");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll('.view-button').forEach(button => {
    button.addEventListener('click', function() {
        const imgSrc = this.getAttribute('data-image');
        modal.style.display = "block";
        modalImg.src = imgSrc;
    });
});


closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
