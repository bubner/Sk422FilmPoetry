// JavaScript post DOM load

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
    startEventListeners();
}

function startEventListeners() {
    console.log('Successfully started EventListeners');
    const close = document.getElementsByClassName("close")[0];
    const modal = document.getElementById("annotationModal");
    const a1t = document.getElementById('a1t');
    const a2t = document.getElementById('a2t');

    const btn1 = document.getElementById('a1');
    btn1.addEventListener('click', function(event){
        modal.style.animation = "fadeIn 0.25s, moveDown 0.4s, backgroundOpacity 1.25s";
        modal.style.display = "block";
        a1t.style.display = "block";
        a2t.style.display = "none";
    });

    const btn2 = document.getElementById('a2');
    btn2.addEventListener('click', function(event){ 
        modal.style.animation = "fadeIn 0.25s, moveDown 0.4s, backgroundOpacity 1.25s";
        modal.style.display = "block";
        a1t.style.display = "none";
        a2t.style.display = "block";
    });

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