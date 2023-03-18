import videoBackground from "../../../../mov/containers/client_login/loginscreen_videobackground.webm";
const videoPlayer = jQuery("#clientLogin_videoArea_player");
const videoSettings_disableVideo = jQuery("#clientLogin_videoArea_controls_videoSettings_disableVideo");

function startLoginScreenVideo() {
  videoPlayer.attr("src", videoBackground);
  videoPlayer[0].loop  = true;
  videoPlayer[0].play();
}

function stopLoginScreenVideo() {
  videoPlayer[0].pause();
  videoPlayer[0].currentTime = 0;
  videoPlayer.hide();
}

videoSettings_disableVideo.change(function() {
  if (this.checked) {
    stopLoginScreenVideo();
  } else {
    startLoginScreenVideo();
  }
});

export { startLoginScreenVideo, stopLoginScreenVideo };
