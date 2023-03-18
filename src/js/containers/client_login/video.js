import videoBackground from "../../../../mov/containers/client_login/loginscreen_videobackground.webm";
const videoPlayer = jQuery("#clientLogin_videoArea_player");
const videoSettings_disableVideo = jQuery("#clientLogin_videoArea_controls_videoSettings_disableVideo");
const videoSettings_disableVideoSound = jQuery("#clientLogin_videoArea_controls_videoSettings_disableVideoSound");

videoPlayer.attr("src", videoBackground);
videoPlayer[0].loop  = true;
videoPlayer[0].play();

videoSettings_disableVideo.change(function() {
  if (this.checked) {
    videoPlayer[0].pause();
    videoPlayer[0].currentTime = 0;
    videoPlayer.hide();
  } else {
    videoPlayer[0].play();
    videoPlayer.show();
  }
});

// todo: choose music + play music + handle enabling/disabling music player
