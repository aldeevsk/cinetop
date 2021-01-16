

let track = document.querySelector('.slider-track');
let step = 0;

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

next.addEventListener('click', function Next () {
    step = step+100;
    if (track.style.left=='-500%') {
        track.style.left = '0';
        step = 0;
    } else {
    track.style.left = `-${step}%`;
    }
    console.log(step);
});

prev.addEventListener('click', function Prev () {
    step = step-100;
    if (track.style.left == '' || track.style.left >'0') {
        track.style.left = '-500%';
        step = 500;
    } else {
    track.style.left = '-' + step + '%';
    }
    console.log(step);
});
