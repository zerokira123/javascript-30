const player = document.querySelector('.player');
const video = player.querySelector(".progresss");
const progressbar = player.querySelector(".progress_filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}