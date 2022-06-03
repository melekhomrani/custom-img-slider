// get slider items | array.from [es6 feature]
let sliderItems = Array.from(
  document.querySelectorAll(".slider-container img")
);

// get number of slider items
let sliderCount = sliderItems.length;

// set current slide index
let currentSlide = 1;

// slide number into string element
let slideNumberElemet = document.getElementById("slide-number");

// previous and next btn
let next = document.getElementById("next");
let prev = document.getElementById("prev");

// handle click on prev and next
next.onclick = nextSlide;
prev.onclick = prevSlide;

// create the main ul element
let paginationElemet = document.createElement("ul");

// set id on created ul elemenet
paginationElemet.setAttribute("id", "pagination-ul");

// create list items bsed on slides number
for (var i = 1; i <= sliderCount; i++) {
  let paginationitem = document.createElement("li");
  paginationitem.setAttribute("data-index", i);
  paginationitem.appendChild(document.createTextNode(i));
  paginationElemet.appendChild(paginationitem);
}

// add the created ul to the page
document.getElementById("indicators").appendChild(paginationElemet);

//get the new created ul
paginationElemet = document.getElementById("pagination-ul");

// get slider items | array.from [es6 feature]
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// change slide when press bullet
paginationBullets.forEach((element) => {
  element.onclick = () => {
    currentSlide = paginationBullets.indexOf(element) + 1;
    checker();
  };
});

//trigger the function
checker();

// next slide func
function nextSlide() {
  if (!next.classList.contains("disabled")) {
    currentSlide++;
    checker();
  }
}
function prevSlide() {
  if (!prev.classList.contains("disabled")) {
    currentSlide--;
    checker();
  }
}

// create the checker func
function checker() {
  // set slide number
  slideNumberElemet.textContent = currentSlide + " of " + sliderCount;

  // remove all active classes
  removeAllActive();

  // set active class on current slide
  sliderItems[currentSlide - 1].classList.add("active");

  // set active on current pagination item
  paginationElemet.children[currentSlide - 1].classList.add("active");

  // check if current lide is first one
  currentSlide === 1
    ? prev.classList.add("disabled")
    : prev.classList.remove("disabled");

  // check if current lide is last one
  currentSlide === sliderCount
    ? next.classList.add("disabled")
    : next.classList.remove("disabled");
}

// remove all active classes
function removeAllActive() {
  sliderItems.forEach((element) => {
    element.classList.remove("active");
  });

  paginationBullets.forEach((element) => {
    element.classList.remove("active");
  });
}
