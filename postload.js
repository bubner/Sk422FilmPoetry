// JavaScript post DOM load
// Lucas Bubner, 2022

function cornerLoad() {
    window.open(
        'https://docs.google.com/document/d/1gfN-ipnPRoLUttZCLePkoXNLqsGI1PhLiNYJkapna7Y/edit?usp=sharing',
        '_blank'
      );
}

function kidsHelplineLoad() {
    window.open(
        'https://kidshelpline.com.au/',
        '_blank'
    )
}

function headspaceLoad() {
    window.open(
        'https://headspace.org.au/',
        '_blank'
    )
}

function eSafetyReportLoad() {
    window.open(
        'https://www.esafety.gov.au/report',
        '_blank'
    )
}

function beyondBlueLoad() {
    window.open(
        'https://www.beyondblue.org.au/',
        '_blank'
    )
}


// If current page is index.html, or is nothing, start the event listeners
if (pathName === "index.html" || pathName === "") {      
    var allAnnotations = document.getElementsByClassName("annotation");
    var allAnnotationText = document.getElementsByClassName("annotationText");
    startEventListeners();
}

function startEventListeners() {
    console.log('Successfully started EventListeners');
    const close = document.getElementsByClassName("close")[0];
    const modal = document.getElementById("annotationModal");


    // Thing that took me forever to make because I named a variable wrong. Good times.
    for (var i = 0; i < allAnnotations.length; i++) { 
        allAnnotations[i].addEventListener('click', function(){
            modal.style.animation = "fadeIn 0.15s, moveDown 0.5s, backgroundOpacity 1s";
            modal.style.display = "block";
            hideRequiredModalText(0);
        });
    }

    close.onclick = function() {
        modal.style.animation = "fadeOut 0.3s";
        setTimeout(function(){
            modal.style.display = "none";
        }, 230);
      }

        // 70ms gap for browser to transition smoothly

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.animation = "fadeOut 0.3s";
            setTimeout(function(){
                modal.style.display = "none";
            }, 230);
        }
      }
}

// Assumes event listeners are already started
function hideRequiredModalText(r) {
    for (var count = 0; count < allAnnotationText.length; count++) { 
        allAnnotationText[count].style.display = "none";
    }
    allAnnotationText[r].style.display = "block";
}