// let largeGif = document.getElementById('largeGif');
let largeVideo = document.getElementById('largeVideo');
let thumbsFirst = document.getElementById('thumbsFirst');
let thumbsSecond = document.getElementById('thumbsSecond');

// thumbs.onclick = thumbs.onmouseover = function (e) {
thumbsSecond.onclick = thumbsSecond.onmouseover = thumbsFirst.onclick = thumbsFirst.onmouseover = function (e) {
    let target = e.target;
    while (target != this) {

        if (target.nodeName == 'A') {
            showThumbnail(target.href, target.title);
            return false;
        }

        target = target.parentNode;
    }

};
// thumbsSecond.onclick = thumbsSecond.onmouseover = function (e) {
//     let target = e.target;
//     while (target != this) {
//
//         if (target.nodeName == 'A') {
//             showThumbnail(target.href, target.title);
//             return false;
//         }
//
//         target = target.parentNode;
//     }
//
// };


let modal = document.querySelector(".modal-wtf");

let firstVideo = document.querySelector(".firstVideo");
let secondVideo = document.querySelector(".secondVideo");
let thirdVideo = document.querySelector(".thirdVideo");
let forthVideo = document.querySelector(".forthVideo");
let fifthVideo = document.querySelector(".fifthVideo");
let sixthVideo = document.querySelector(".sixthVideo");

let seventhVideo = document.querySelector(".seventhVideo");
let eighthVideo = document.querySelector(".eighthVideo");
let ninthVideo = document.querySelector(".ninthVideo");
let tenthVideo = document.querySelector(".tenthVideo");
let eleventhVideo = document.querySelector(".eleventhVideo");
let twelfthVideo = document.querySelector(".twelfthVideo");


let closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
    largeVideo.classList.toggle("hide");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();

    }
}


firstVideo.addEventListener("click", toggleModal);
secondVideo.addEventListener("click", toggleModal);
thirdVideo.addEventListener("click", toggleModal);
forthVideo.addEventListener("click", toggleModal);
fifthVideo.addEventListener("click", toggleModal);
sixthVideo.addEventListener("click", toggleModal);

seventhVideo.addEventListener("click", toggleModal);
eighthVideo.addEventListener("click", toggleModal);
ninthVideo.addEventListener("click", toggleModal);
tenthVideo.addEventListener("click", toggleModal);
eleventhVideo.addEventListener("click", toggleModal);
twelfthVideo.addEventListener("click", toggleModal);
//
// firstVideo.addEventListener("click", toggleModal);
// secondVideo.addEventListener("click", toggleModal);
// thirdVideo.addEventListener("click", toggleModal);
// forthVideo.addEventListener("click", toggleModal);
// fifthVideo.addEventListener("click", toggleModal);
// sixthVideo.addEventListener("click", toggleModal);



closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

function showThumbnail(href) {
    largeVideo.src = href;
}