// JavaScript post DOM load

function cornerLoad() {
    window.open(
        'https://docs.google.com/document/d/1gfN-ipnPRoLUttZCLePkoXNLqsGI1PhLiNYJkapna7Y/edit?usp=sharing',
        '_blank' // <- This is what makes it open in a new window.
      );
}

const windowLoc = window.location.pathname.split('/');
// Generate array of all pathnames
let lastElement = windowLoc[windowLoc.length - 1];
// Assign lastElement to the final item
const pathName = lastElement;

// If current page is index.html, start the event listeners
if (pathName === "index.html" || pathName === "holo911.github.io") {      
    startEventListeners();
}

function startEventListeners() {
    console.log('EventListeners online');
    const close = document.getElementsByClassName("close")[0];
    const modal = document.getElementById("annotationModal");
    const a1t = document.getElementById('a1t');
    const a2t = document.getElementById('a2t');

    const btn1 = document.getElementById('a1');
    btn1.addEventListener('click', function(event){
        modal.classList.toggle('mfade');
        a1t.style.display = "block";
        a2t.style.display = "none";
    });

    const btn2 = document.getElementById('a2');
    btn2.addEventListener('click', function(event){ 
        modal.classList.toggle('mfade');
        a1t.style.display = "none";
        a2t.style.display = "block";
    });

    close.onclick = function() {
        modal.style.display = "none";
      }

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}