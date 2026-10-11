/* =========================
   OPEN BIRTHDAY GIFT
   ========================= */

function openGift() {

    const message =
        document.getElementById("message");

    message.classList.remove("hidden");


    /* Start birthday music */

    const song =
        document.getElementById("birthdaySong");

    const musicButton =
        document.getElementById("musicButton");

    song.volume = 0.35;

    song.play()
        .then(() => {

            musicButton.textContent = "🎶";

        })
        .catch(() => {

            console.log("Music could not start.");

        });


    message.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   MUSIC
   ========================= */

function toggleMusic() {

    const song =
        document.getElementById("birthdaySong");

    const button =
        document.getElementById("musicButton");


    if (song.paused) {

        song.volume = 0.35;

        song.play();

        button.textContent = "🎶";

    } else {

        song.pause();

        button.textContent = "🎵";

    }

}


/* =========================
   HERO BACKGROUND SLIDESHOW
   ========================= */

const backgroundImages =
    document.querySelectorAll(".bg-image");

let currentBackground = 0;


function changeBackground() {

    backgroundImages[currentBackground]
        .classList.remove("active");

    currentBackground++;

    if (currentBackground >= backgroundImages.length) {

        currentBackground = 0;

    }

    backgroundImages[currentBackground]
        .classList.add("active");

}


setInterval(changeBackground, 6000);


/* =========================
   PHOTO GALLERY
   ========================= */

const galleryImages =
    document.querySelectorAll(".gallery-item img");

const imageViewer =
    document.getElementById("imageViewer");

const viewerImage =
    document.getElementById("viewerImage");

let currentImage = 0;


/* =========================
   OPEN IMAGE
   ========================= */

galleryImages.forEach((image, index) => {

    image.parentElement.addEventListener("click", () => {

        currentImage = index;

        showImage();

        imageViewer.classList.remove("hidden");

        document.body.style.overflow = "hidden";

    });

});


/* =========================
   SHOW IMAGE
   ========================= */

function showImage() {

    viewerImage.src =
        galleryImages[currentImage].src;

}


/* =========================
   NEXT IMAGE
   ========================= */

function nextImage() {

    currentImage++;

    if (currentImage >= galleryImages.length) {

        currentImage = 0;

    }

    showImage();

}


/* =========================
   PREVIOUS IMAGE
   ========================= */

function previousImage() {

    currentImage--;

    if (currentImage < 0) {

        currentImage =
            galleryImages.length - 1;

    }

    showImage();

}


/* =========================
   CLOSE IMAGE VIEWER
   ========================= */

function closeViewer() {

    imageViewer.classList.add("hidden");

    document.body.style.overflow = "";

}


/* =========================
   FINAL SURPRISE
   ========================= */

function openSurprise() {

    const surprise =
        document.getElementById("surprise");

    const button =
        document.getElementById("surpriseButton");

    surprise.classList.remove("hidden");

    button.style.display = "none";

    surprise.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   KEYBOARD CONTROLS
   ========================= */

document.addEventListener("keydown", (event) => {

    if (
        imageViewer.classList.contains("hidden")
    ) {

        return;

    }


    if (event.key === "Escape") {

        closeViewer();

    }


    if (event.key === "ArrowRight") {

        nextImage();

    }


    if (event.key === "ArrowLeft") {

        previousImage();

    }

});