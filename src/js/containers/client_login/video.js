import videoBackground from "../../../../mov/containers/client_login/loginscreen_videobackground.webm";
import leagueLogoLoop from "../../../../mov/containers/client_content/menu/leaguelogo_loop.webm";
import leaguePlayButtonEnabled from "../../../../mov/containers/client_content/menu/playbutton/playbutton_enabled.webm";
import leaguePlayButtonHoverIntro from "../../../../mov/containers/client_content/menu/playbutton/playbutton_hover_intro.webm";
import leaguePlayButtonHoverLoop from "../../../../mov/containers/client_content/menu/playbutton/playbutton_hover_loop.webm";
import leaguePlayButtonHoverOutro from "../../../../mov/containers/client_content/menu/playbutton/playbutton_hover_outro.webm";
import leaguePlayButtonRelease from "../../../../mov/containers/client_content/menu/playbutton/playbutton_release.webm";
import leaguePlayButtonMagicRelease from "../../../../mov/containers/client_content/menu/playbutton/playbutton_magicrelease.webm";
import { disablePlayButton } from "../client_content/menu/playbutton";

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

function startLeaguePlayButtonVideo() {
  const leaguePlayButtonContainer = jQuery("#clientContent_menu_playButtonContainer");
  const leaguePlayButtonPlayer = jQuery("#clientContent_menu_playButton");
  const leaguePlayButtonOverlayPlayer = jQuery("#clientContent_menu_playButtonOverlay");

  leaguePlayButtonPlayer.attr("src", leaguePlayButtonEnabled);
  leaguePlayButtonPlayer[0].loop = false;
  leaguePlayButtonPlayer[0].currentTime = 0;
  leaguePlayButtonPlayer[0].play();

  leaguePlayButtonContainer.on("mouseover", () => {
    leaguePlayButtonOverlayPlayer.attr("src", leaguePlayButtonHoverLoop);
    leaguePlayButtonOverlayPlayer[0].loop = true;
    leaguePlayButtonOverlayPlayer[0].currentTime = 0;
    leaguePlayButtonOverlayPlayer[0].play();
    leaguePlayButtonOverlayPlayer.fadeIn(500);
  });

  leaguePlayButtonContainer.on("mouseleave", () => {
    leaguePlayButtonOverlayPlayer.fadeOut(500);

    setTimeout(() => {
      leaguePlayButtonOverlayPlayer[0].pause();
    }, 500);
  });

  leaguePlayButtonContainer.on("click", () => {
    if (leaguePlayButtonPlayer.attr("src") !== leaguePlayButtonRelease) {
      leaguePlayButtonPlayer.attr("src", leaguePlayButtonRelease);
      leaguePlayButtonPlayer[0].loop = false;
      leaguePlayButtonPlayer[0].currentTime = 0;
      leaguePlayButtonPlayer[0].play();
      disablePlayButton();
    }
  });
}

export { startLoginScreenVideo, stopLoginScreenVideo, startLeagueLogoLoop, startLeaguePlayButtonVideo };
