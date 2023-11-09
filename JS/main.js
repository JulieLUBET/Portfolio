var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});





///////     pop-up image     ///////

// Fonction pour afficher l'image en grand
function showImage(src) {
  document.getElementById('popupImage').src = src;
  document.getElementById('popup').style.display = 'flex';
}

// Fonction pour cacher l'image en grand
function hideImage() {
  document.getElementById('popup').style.display = 'none';
}





///////     menue burger     ///////

/*
const hamburgerMenu = document.querySelector(".burgerMenu")

const navLinks = document.querySelector(".navigationLinks")

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('phoneMenu')
})*/






















// agrandissement image


const imageContainers = document.querySelectorAll('.image-container');

// Get the modal
var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


imageContainers.forEach((container) => {
  container.addEventListener('click', (image) => {
      document.getElementById("inner-modal").innerHTML = ""
      modal.style.display = "block";
      const img = document.createElement("img")
      img.src = image.target.src
      img.alt = image.target.alt
      img.style.width = "400px"
      document.getElementById("inner-modal").appendChild(img)

      const paragraph = document.createElement("p")
      paragraph.innerText = image.target.alt
      document.getElementById("inner-modal").appendChild(paragraph)
  });
});
