// Get elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// Select all thumbnails
const thumbnails = document.querySelectorAll(".thumbnail");

// Loop through each image and add click event
thumbnails.forEach(img => {
  img.addEventListener("click", function() {
    lightbox.style.display = "block";
    lightboxImg.src = this.src.replace("_small", "_large"); // assumes large version has _large in filename
    caption.textContent = this.alt;
  });
});

// Close lightbox when "x" clicked
closeBtn.addEventListener("click", function() {
  lightbox.style.display = "none";
});

// Also close when clicking outside image
lightbox.addEventListener("click", function(e) {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});