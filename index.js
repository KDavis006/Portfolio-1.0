

let slideIndex = 1;
// startide for the projects page slideshow
showSlides(slideIndex);

// adds one when you press the next button then runs the function showSlides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// when you press the do it takes you to that dots number slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// main function for the slideshow to move 
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// function for it to send the email on the contact me page
// doesn't work yet sorry 
function sendEmail() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "sender@email_address.com",
        Password: "Enter your password",
        To: 'mygmail@gmail.com',
        From: document.getElementById("fname").innerHTML,
        Subject: "Sending Email from Portfolio",
        Body: document.getElementById("subject").innerHTML,
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
    }