// setp  Varibles
var // slider Images 
    sliderImages = Array.from(document.images),
    // number the Images slide
    sliderImagesNumber = sliderImages.length,
    // set Defolte the Image slider
    defolteSlider = 1,
    // show the Number to slide
    sliderNumber = document.querySelector("header .slider-number"),
    // the preves Button And next Button
    prevesButton = document.querySelector("footer .preves"),
    nextButton = document.querySelector("footer .next"),
    // the contener Number of sliders
    ContenerBults = document.getElementsByClassName("contener-bults")[0];

// create the unorder list => list Itmes
var unorderList = document.createElement("ul");  // create Ul
// add the id to UL
unorderList.setAttribute("id", "un-list")

// create the list iteme by for loop 
for (var i = 1; i <= sliderImagesNumber; i++) {
    // create list items 
    var listStyle = document.createElement("li");
    // add cstum attribute  ==> data-slide
    listStyle.setAttribute("data-slide", i)
    // create text Node the list item
    var textListItem = document.createTextNode(i);
    // Add the text Node to list iteme 
    listStyle.appendChild(textListItem);
    // Add the list iteme to UL
    unorderList.appendChild(listStyle);
}
// Add the unorder list to the contener Number
ContenerBults.appendChild(unorderList);
// get the unorder list by vrible 
var contenerUl = document.getElementById("un-list");
// get the all list itemes (li) by vrible
var allListIteme = Array.from(document.querySelectorAll("#un-list li"));

// setp Fuction 

// Function testing sliders   ||   Mian Functions
function testingSliders() {
    "use strict";
    // set the Number slider
    sliderNumber.textContent = "slide #" + defolteSlider + " of " + sliderImagesNumber;
    // remove class Active to All image and list iteme
    removeActive()
    //set the Image slider  (Add class active)
    sliderImages[defolteSlider - 1].classList.add("active");
    // set the Number List Iteme (Add class active)
    contenerUl.children[defolteSlider - 1].classList.add("active")
    // change opacity to preves button and next button
    opacityButtons()
}

// Function remove class active to All image and list iteme
function removeActive() {
    "use strict";
    // remove class active to All Images sliders
    for (var img = 0; img < sliderImagesNumber; img++) {
        sliderImages[img].classList.remove("active")
    }

    // remove class active to All list iteme
    allListIteme.forEach(function (itm) {
       itm.classList.remove("active");
    });
}

// Function change opacity to preves button and next button 
function opacityButtons() {
    "use strict";
    // checked in preves button 
    if (defolteSlider === 1) {
        prevesButton.classList.add("finsh");
    } else {
        prevesButton.classList.remove("finsh");
    }

    // checked in next button 
    if (defolteSlider === sliderImagesNumber) {
        nextButton.classList.add("finsh");
    } else {
        nextButton.classList.remove("finsh");
    }
}



// Function the Next Button 
function nextSlide() {
    "use strict";
    if (nextButton.classList.contains("finsh")) {
        // No Action
    } else {
        // defole Number slider minas one => (-1)
        defolteSlider += 1;
        // trun on the function testing sliders
        testingSliders();
    }
}

// Function the preves Button 
function prevesSlide() {
    "use strict";
    if (defolteSlider > 1) {
        // defole Number slider minas one => (-1)
        defolteSlider--;
        // trun on the function testing sliders
        testingSliders();
    }
}

// Function the click bults (list Iteme)
function clickBults() {
    defolteSlider = parseInt(this.getAttribute("data-slide"));
    // trun on the function testing sliders
    testingSliders();
}

//   the   futuser 

// On click the preves Button 
nextButton.onclick = nextSlide;
// On click the preves Button
prevesButton.onclick = prevesSlide;
// on click bults
for (var b = 0; b < allListIteme.length; b++) {
    allListIteme[b].onclick = clickBults;
}
// trun on the function testing sliders
testingSliders();