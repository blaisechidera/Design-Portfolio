//===========================================
// Declarations
let personalizedText = document.getElementById("confirmationText");
let focusAudio = document.getElementById("focusAudio");
let confirmationText = document.getElementById("confirmationText");
let burgerIcon = document.getElementById("burger");
let burgerMenu = document.getElementById("burgerMenu");
let close = document.getElementById("close");
let formInputs = document.querySelectorAll(".inputs");
let submitBTN = document.getElementById("submitBTN"); //When user clicks on the button prevent default and show a pop up message
let confirmationBox = document.getElementById("confirmation"); //Gain access to the element with the id confirmation
let closeBTN = document.getElementById("confirmationClose");

let navLinks = document.querySelectorAll(".navLinks");
let contactPage = document.getElementById("contact-section");
let aboutPage = document.getElementById("about");
let galleryPage = document.getElementById("gallery")

navLinks.forEach( thisLink => thisLink.addEventListener("click", function() {

//[about, gallery, Contact ; about, gallery, contact]
//[  0       1        2    ;   3       4        5   ]

  if (thisLink === navLinks [0] || thisLink === navLinks [3] ){ //if user clicks on About link [0] and [3]
    aboutPage.style.display = "flex"
    setTimeout(function(){
  //Show About Page
  aboutPage.classList.remove("slideOut");
  }, 100)
  //slide out all other pages
  galleryPage.classList.remove("slideIn");
  contactPage.classList.remove("slideIn");
  
  setTimeout( function(){
    galleryPage.style.display = "none";
    contactPage.style.display = "none";
  } , 300)

  } else if (thisLink === navLinks[1] || thisLink === navLinks[4]) {
    galleryPage.style.display = "flex"
    setTimeout(function(){
    //Show Gallery Page
    galleryPage.classList.add("slideIn");
  }, 100)
    //hide the other pages
    aboutPage.classList.add("slideOut");
    contactPage.classList.remove("slideIn");

    setTimeout( function(){
      aboutPage.style.display = "none";
      contactPage.style.display = "none";
    } , 300)


  } else if (thisLink === navLinks[2] || thisLink === navLinks[5]) {
    contactPage.style.display = "flex"
    setTimeout(function(){
    //Show Contact Page
    contactPage.classList.add("slideIn"); //Add the class "slideIn" to the contact page.
  }, 100)
    //To hide the other pages
    aboutPage.classList.add("slideOut");
    galleryPage.classList.remove("slideIn");

    setTimeout(function (){
      aboutPage.style.display = "none"
      galleryPage.style.display = "none"
    } ,300)

  }

}))


// Event Listeners
burgerIcon.addEventListener("click", function () {
  // Show the burger menu
  burgerMenu.style.display = "flex";
  // Show the close button
  close.style.display = "block";
  // Hide the burger icon
  burgerIcon.style.display = "none";
});

close.addEventListener("click", function () {
  // Close the burger menu
  burgerMenu.style.display = "none";
  // Hide the close button
  close.style.display = "none";
  // Show the burger icon
  burgerIcon.style.display = "block";
});

//go through the array "formInputs" for each one of the cell and do something
formInputs.forEach(function (thisInput) {
  // Focus and blur events for input fields
  thisInput.addEventListener("focus", function () {
    thisInput.classList.add("inputOnFocus");
    focusAudio.play();
  });

  thisInput.addEventListener("blur", function () {
    thisInput.classList.remove("inputOnFocus");
    // focusAudio.play();
  });
});

//Add shake animation
formInputs.forEach(function (input) {
  input.addEventListener("blur", function () {
    if (input.value.trim() === "") {
      // Add a CSS class to trigger the shake animation
      input.classList.add("shake");
      input.nextElementSibling.textContent = "This field cannot be empty!";
      // Remove the class after the animation duration (adjust the time based on your CSS)
      setTimeout(function () {
        input.classList.remove("shake");
      }, 500); // Adjust the time (in milliseconds) based on your CSS animation duration
    }
    else {
      input.nextElementSibling.textContent = ""; // Clear previous warnings
    }
  });
});


submitBTN.addEventListener("click", function (event) {
  event.preventDefault();

  // Check if all input fields are filled
  if (
    formInputs[0].value !== "" &&
    formInputs[1].value !== "" &&
    formInputs[2].value !== "" &&
    formInputs[3].value !== ""
  ) {
    // Populate personalized text for confirmation
    let personalizedText = `Hello ${formInputs[0].value}, <br style="line-height: 2em;"/>&nbsp;<br style="line-height: 2em;"/>
    Thanks for being awesome! <br style="line-height: 2em;"/>&nbsp;<br style="line-height: 2em;"/>
    I have received your message and would like to thank you for writing to me. <br/>
    I will reply by email to ${formInputs[2].value} as soon as possible. <br style="line-height: 2em;"/>&nbsp;<br style="line-height: 2em;"/>
    Talk to you soon. <br style="line-height: 2em;"/>&nbsp;<br style="line-height: 2em;"/> 
    Chidera Blaise.`;

    // Display the confirmation box
    confirmationText.innerHTML = personalizedText;
    confirmationBox.style.display = "block";
  } 
    });

closeBTN.addEventListener("click", function () {
  // Close the confirmation box
  confirmationBox.style.display = "none";
});


document.addEventListener('DOMContentLoaded', function() {
  // Get all software items
  const softwareItems = document.querySelectorAll('.software-item img');

  // Function to add glow effect
  function addGlow(item) {
      item.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))';
  }

  // Function to remove glow effect
  function removeGlow(item) {
      item.style.filter = 'none';
  }

  // Add event listeners to each software item
  softwareItems.forEach(function(item) {
      item.addEventListener('mouseenter', function() {
          // Add glow effect on mouse enter
          addGlow(item);
      });

      item.addEventListener('mouseleave', function() {
          // Remove the glow effect on mouse leave
          removeGlow(item);
      });
  });
});


