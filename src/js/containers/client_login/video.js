import videoBackground from "../../../../mov/containers/client_login/loginscreen_videobackground.webm";
import leagueLogoLoop from "../../../../mov/containers/client_content/menu/leaguelogo_loop.webm";
import leagueLobbyButtonHover from "../../../../mov/containers/client_content/menu/lobbybutton/lobbybutton_hover.webm";
import leagueLobbyButtonIntro from "../../../../mov/containers/client_content/menu/lobbybutton/lobbybutton_intro.webm";
import leagueLobbyButtonRelease from "../../../../mov/containers/client_content/menu/lobbybutton/lobbybutton_release.webm";

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
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});


function startLeagueLogoLoop() {
  const leagueLogoPlayer = jQuery("#clientContent_menu_leagueLogo");
  leagueLogoPlayer.attr("src", leagueLogoLoop);
  leagueLogoPlayer[0].loop = true;
  leagueLogoPlayer[0].currentTime = 0;
  leagueLogoPlayer[0].play();
}

function startLeagueLobbyButtonVideo() {
  const leagueLobbyButtonContainer = jQuery("#clientContent_menu_lobbyButtonContainer");
  const leagueLobbyButtonPlayer = jQuery("#clientContent_menu_lobbyButton");
  const leagueLobbyButtonOverlayPlayer = jQuery("#clientContent_menu_lobbyButtonOverlay");

  leagueLobbyButtonPlayer.attr("src", leagueLobbyButtonIntro);
  leagueLobbyButtonPlayer[0].loop = false;
  leagueLobbyButtonPlayer[0].currentTime = 0;
  leagueLobbyButtonPlayer[0].play();

  leagueLobbyButtonOverlayPlayer.attr("src", leagueLobbyButtonHover);
  leagueLobbyButtonOverlayPlayer[0].loop = true;
  leagueLobbyButtonOverlayPlayer[0].currentTime = 0;

  leagueLobbyButtonContainer.on("mouseover", () => {
    leagueLobbyButtonOverlayPlayer[0].currentTime = 0;
    leagueLobbyButtonOverlayPlayer[0].play();
    leagueLobbyButtonOverlayPlayer.fadeIn(500);
  });

  leagueLobbyButtonContainer.on("mouseleave", () => {
    leagueLobbyButtonOverlayPlayer.fadeOut(500);
  });
}

export { startLoginScreenVideo, stopLoginScreenVideo, startLeagueLogoLoop, startLeagueLobbyButtonVideo };
