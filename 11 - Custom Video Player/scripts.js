const player = document.querySelector('.player');
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressbar = player.querySelector(".progress_filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? "▶" : "⏸";
    toggle.textContent = icon;
    console.log("Update the Button");
}

function skip() {
    console.log('this.dataset.skip');
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    // console.log(this.name);
    // console.log(this.value);

}

function handleProgress() {
    const percent = (video.currentTime/video.duration) * 100;
    progressbar.style.flexBasis = `${percent}%`;

}

// event listeners
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
toggle.addEventListener('click',togglePlay);
skipButtons.forEach(button => button.addEventListener("click",skip));
ranges.forEach(range => range.addEventListener("change",handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove",handleRangeUpdate));




