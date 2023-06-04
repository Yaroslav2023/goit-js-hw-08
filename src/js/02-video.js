import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
    id: 23,
    width: 640
});

function onPlay(seconds) {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
       });};

let secondSaved = localStorage.getItem("videoplayer-current-time");

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(secondSaved).then();
