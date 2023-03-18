import videoBackground from "../../../../mov/containers/client_login/loginscreen_videobackground.webm";
const videoPlayer = jQuery("#clientLogin_videoArea_player");
const videoSettings_disableVideo = jQuery("#clientLogin_videoArea_controls_videoSettings_disableVideo");
videoPlayer.attr("src", videoBackground);

function startLoginScreenVideo() {
  videoPlayer[0].loop  = true;
  videoPlayer[0].currentTime = 0;
  videoPlayer[0].play();
  videoPlayer.show();
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

  window.appSettings.loginScreen.videoEnabled = !this.checked;
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

export { startLoginScreenVideo, stopLoginScreenVideo };
