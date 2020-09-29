

let catall = document.querySelector(".cat0");
let cat1 = document.querySelector(".cat1");
let cat2 = document.querySelector(".cat2");
let cat3 = document.querySelector(".cat3");
let cat4 = document.querySelector(".cat4");

let dot1 = document.querySelectorAll(".one");
let dot2 = document.querySelectorAll(".two");
let dot3 = document.querySelectorAll(".three");
let dot4 = document.querySelectorAll(".four");

(catall).addEventListener("click", ()=> {
    dot1.forEach(el => el.style.visibility = "visible");
    dot2.forEach(al => al.style.visibility = "visible");
    dot3.forEach(el => el.style.visibility = "visible");
    dot4.forEach(el => el.style.visibility = "visible");
});

cat1.addEventListener("click", ()=> {
    dot1.forEach(el => el.style.visibility = "visible");
    dot2.forEach(el => el.style.visibility = "hidden");
    dot3.forEach(el => el.style.visibility = "hidden");
    dot4.forEach(el => el.style.visibility = "hidden");
});

cat2.addEventListener("click", ()=> {
    dot1.forEach(el => el.style.visibility = "hidden");
    dot2.forEach(el => el.style.visibility = "visible");
    dot3.forEach(el => el.style.visibility = "hidden");
    dot4.forEach(el => el.style.visibility = "hidden");
});

cat3.addEventListener("click", ()=> {
    dot1.forEach(el => el.style.visibility = "hidden");
    dot2.forEach(el => el.style.visibility = "hidden");
    dot3.forEach(el => el.style.visibility = "visible");
    dot4.forEach(el => el.style.visibility = "hidden");
});

cat4.addEventListener("click", ()=> {
    dot1.forEach(el => el.style.visibility = "hidden");
    dot2.forEach(el => el.style.visibility = "hidden");
    dot3.forEach(el => el.style.visibility = "hidden");
    dot4.forEach(el => el.style.visibility = "visible");
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav: true
});

$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".links").slideToggle(1000);
    });
});
