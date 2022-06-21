// JavaScript pre DOM load

const windowLoc = window.location.pathname.split('/');
let lastElement = windowLoc[windowLoc.length - 1];
const pathName = lastElement;
function domReady() {
    switch (pathName) {
        case "p2_info.html": {
            const p2e1 = document.getElementById('p2');
            const p2e2 = document.getElementById('p2-1');
            const p2e3 = document.getElementById('p2-2');
            p2e1.style.animation = "generate 2s ease";
            p2e2.style.animation = "generate 1s ease";  
            p2e3.style.animation = "generate 1.5s ease";
        }
        break;

        case "index.html":
        case "": {
            const index = document.getElementById('index');
            const index2 = document.getElementById('index2');
            const index3 = document.getElementById('index3');
            const index4 = document.getElementById('index4');
            const index5 = document.getElementById('index5');
            index.style.animation = "generate 1.5s ease";
            index2.style.animation = "generate 3s normal none";
            index3.style.animation = "generate 3.25s normal none";
            index4.style.animation = "generate 3.5s normal none";
            index5.style.animation = "generate 3.75s normal none";
        }
        break;

        case "p3_wonder.html": {
            const p3 = document.getElementById('p3');
            const p31 = document.getElementById('p3-1');
            p3.style.animation = "generate 1.5s ease";
            p31.style.animation = "generate 2s ease";
        }
        break;

        default: {
            console.log('pathName error: cannot find page');
        }
    }
}

function fadeIn() {
    if (!window.AnimationEvent) { return; }
    let fader = document.getElementById('fader');
    fader.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', function() {
    if (!window.AnimationEvent) { return; }
    let anchors = document.getElementsByTagName('a');
    for (let idx=0; idx<anchors.length; idx+=1) {
        if (anchors[idx].hostname !== window.location.hostname ||
            anchors[idx].pathname === window.location.pathname) {
            continue;
        }
        anchors[idx].addEventListener('click', function(event) {
            let fader = document.getElementById('fader'),
                anchor = event.currentTarget;
            
            let listener = function() {
                window.location = anchor.href;
                fader.removeEventListener('animationend', listener);
            };
            fader.addEventListener('animationend', listener);
            
            event.preventDefault();
            fader.classList.add('fade-in');
        });
    }
});

window.addEventListener('pageshow', function (event) {
    if (!event.persisted) {
      return;
    }
    let fader = document.getElementById('fader');
    fader.classList.remove('fade-in');
  });