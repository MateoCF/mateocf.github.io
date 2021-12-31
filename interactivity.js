// Based off https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) { // Size down
    document.querySelector("header img").style.height = "100px";
  } else { // Size up 
    // Consult CSS to size up from original height
    document.querySelector("header img").style.height = "200px";
  }
}

// Toggles specific modal to be visible
function modalOn(currentElem) {
    // Fade out all current images in boxes
    document.querySelectorAll(".box").forEach((element) => {
        element.querySelector("img").classList.add("imgHidden");
    });
    // Fade in modal of selected element
    // First add class so displays as block, but still invisible
    currentElem.parentNode.querySelector(".modal").classList.add("modalSelected");
    // After CSS makes modal block, increase opacity to 1
    window.setTimeout(() => {
        currentElem.parentNode.querySelector(".modal").style.opacity = 1;
    }, 200);
    
}

// Toggles specific modal to be invisible
function modalOff(currentElem) {
    // Fade away modal
    // parentNode = modal | parentNode.parentNode = box
    currentElem.parentNode.parentNode.querySelector(".modal").style.opacity = 0;
    window.setTimeout(() => {
        currentElem.parentNode.parentNode.querySelector(".modal").classList.remove("modalSelected");
    }, 200);
    // Fade back images
    document.querySelectorAll(".box").forEach((element) => {
        element.querySelector("img").classList.remove("imgHidden");
    });
}


