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
if (pathName === "index.html") {      
    startEventListeners();
}

function startEventListeners() {
    console.log('EventListeners online');

    const btn1 = document.getElementById('a1');
    btn1.addEventListener('click', function(event){
        console.log('Button Clicked');
    });

    const btn2 = document.getElementById('a2');
    btn2.addEventListener('click', function(event){
        console.log('Button Clicked');
    });
}