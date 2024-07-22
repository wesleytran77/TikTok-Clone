// Handles zoom buttons
var phoneScreen = document.querySelector(".phoneScreen");
var zoomInButton = document.querySelector(".zoomIn");
var zoomOutButton = document.querySelector(".zoomOut");
var iphone = document.querySelector(".iphone");
let scale = 1;

zoomInButton.addEventListener('click', () => {
    scale += 0.5;
    startingScreen.style.transform = `translate(-50%, -50%) scale(${scale})`;
    friendsPage.style.transform = `translate(-50%, -50%) scale(${scale})`;
    profilePage.style.transform = `translate(-50%, -50%) scale(${scale})`;
    inboxPage.style.transform = `translate(-50%, -50%) scale(${scale})`;
    phoneScreen.style.transform = `translate(-50%, -50%) scale(${scale})`;
    iphone.style.transform = `translate(-50%, -50%) scale(${scale})`;
});

zoomOutButton.addEventListener('click', () => {
    scale = Math.max(0.1, scale - 0.5);
    startingScreen.style.transform = `translate(-50%, -50%) scale(${scale})`;
    friendsPage.style.transform = `translate(-50%, -50%) scale(${scale})`;
    profilePage.style.transform = `translate(-50%, -50%) scale(${scale})`;
    inboxPage.style.transform = `translate(-50%, -50%) scale(${scale})`;
    phoneScreen.style.transform = `translate(-50%, -50%) scale(${scale})`;
    iphone.style.transform = `translate(-50%, -50%) scale(${scale})`;
});

// Handles follow button
const followButton = document.querySelectorAll(".followButton");

followButton.forEach(button => {
    button.addEventListener('click', function() {
        const plusSign = this.querySelector('.plusSign');
        const checkmark = this.querySelector('.checkmark');
        
        plusSign.style.display = "none";
        checkmark.style.display = "block";
        button.style.backgroundColor = "white";
    });
});

// Handles like button functionality
const likeButton = document.querySelectorAll(".heart");

likeButton.forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('white')) {
            this.classList.remove('white');
            this.classList.add('red');
        } else {
            this.classList.remove('red');
            this.classList.add('white');
        }
    });
});

// Handles favorite button functionality
const favoriteButton = document.querySelectorAll(".favorite");

favoriteButton.forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('white')) {
            this.classList.remove('white');
            this.classList.add('yellow');
        } else {
            this.classList.remove('yellow');
            this.classList.add('white');
        }
    });
});

// Handles switching tabs and switching screens
const friendsTab = document.querySelectorAll(".friendsTab");
const friendsPage = document.querySelector(".phoneScreen2");

const homeTab = document.querySelectorAll(".homeTab");
const homePage = document.querySelector(".phoneScreen");

const inboxTab = document.querySelectorAll(".inboxTab");
const inboxPage = document.querySelector(".phoneScreen3");

const profileTab = document.querySelectorAll(".profileTab");
const profilePage = document.querySelector(".phoneScreen4");

friendsTab.forEach(tab => {
    tab.addEventListener("click", function() {
        inboxPage.style.visibility = "hidden";
        profilePage.style.visibility = "hidden";
        friendsPage.style.display = "block";
        homePage.style.display = "none";
    });
});

homeTab.forEach(tab => {
    tab.addEventListener("click", function() {
        inboxPage.style.visibility = "hidden";
        profilePage.style.visibility = "hidden";
        friendsPage.style.display = "none";
        homePage.style.display = "block";
    });
});

inboxTab.forEach(tab => {
    tab.addEventListener("click", function() {
        homePage.style.display = "none";
        friendsPage.style.display = "none";
        inboxPage.style.visibility = "visible";
        profilePage.style.visibility = "hidden";
    });
});

profileTab.forEach(tab => {
    tab.addEventListener("click", function() {
        homePage.style.display = "none";
        friendsPage.style.display = "none";
        inboxPage.style.visibility = "hidden";
        profilePage.style.visibility = "visible";
    });
});

// Handles starting screen
var enableAudioButton = document.querySelector(".enableAudio");
var startingScreen = document.querySelector(".startingScreen");

enableAudioButton.addEventListener("click", function() {
    startingScreen.style.display = 'none';
    phoneScreen.style.display = "block";
});

// Handles playing next video
document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll("video");

    if ('IntersectionObserver' in window) {
        function handleIntersection(entries, observer) {
            entries.forEach(entry => {
                const video = entry.target;

                if (entry.isIntersecting) {
                    video.play(); // Play the video when it's visible
                    video.muted = false; // Unmute the video when it's visible
                } else {
                    video.pause(); // Pause the video when it's not visible
                    video.currentTime = 0; // Restart the video from the beginning
                }
            });
        }

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5 // Adjust the threshold as needed
        });

        videos.forEach(video => {
            observer.observe(video);
        });
    } else {
        console.log("IntersectionObserver is not supported by your browser.");
    }
});








