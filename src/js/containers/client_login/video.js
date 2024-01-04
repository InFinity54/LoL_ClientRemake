import videoBackground from "../../../../mov/containers/client_login/loginscreen_videobackground.webm";
import leagueLogoLoop from "../../../../mov/containers/client_content/menu/leaguelogo_loop.webm";
const videoSettings_disableVideo = jQuery("#clientLogin_videoArea_controls_videoSettings_disableVideo");
const videoPlayer = jQuery("#clientLogin_videoArea_player");
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
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
});


function startLeagueLogoLoop() {
  const leagueLogoPlayer = jQuery("#clientContent_menu_leagueLogo");
  leagueLogoPlayer.attr("src", leagueLogoLoop);
  leagueLogoPlayer[0].loop = true;
  leagueLogoPlayer[0].currentTime = 0;
  leagueLogoPlayer[0].play();
}

export { startLoginScreenVideo, stopLoginScreenVideo, startLeagueLogoLoop };
