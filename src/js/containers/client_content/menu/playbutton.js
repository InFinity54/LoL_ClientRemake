import leaguePlayButtonEnabled from "../../../../../mov/containers/client_content/menu/playbutton/playbutton_enabled.webm";
import leaguePlayButtonHoverIntro from "../../../../../mov/containers/client_content/menu/playbutton/playbutton_hover_intro.webm";
import leaguePlayButtonHoverLoop from "../../../../../mov/containers/client_content/menu/playbutton/playbutton_hover_loop.webm";
import leaguePlayButtonHoverOutro from "../../../../../mov/containers/client_content/menu/playbutton/playbutton_hover_outro.webm";
import leaguePlayButtonRelease from "../../../../../mov/containers/client_content/menu/playbutton/playbutton_release.webm";
import leaguePlayButtonMagicRelease from "../../../../../mov/containers/client_content/menu/playbutton/playbutton_magicrelease.webm";
import { playSound, playButtonClickSound, playButtonHoverSound } from "../../../global/audio";
const leaguePlayButtonContainer = jQuery("#clientContent_menu_playButtonContainer");
const leaguePlayButtonPlayer = jQuery("#clientContent_menu_playButton");
const leaguePlayButtonOverlayPlayer = jQuery("#clientContent_menu_playButtonOverlay");

function enablePlayButton() {
    startLeaguePlayButtonVideo();
}

function disablePlayButton() {
    leaguePlayButtonContainer.off("mouseover");
    leaguePlayButtonContainer.off("mouseleave");
    leaguePlayButtonContainer.off("click");
    leaguePlayButtonOverlayPlayer.fadeOut(500);
}

function startLeaguePlayButtonVideo() {
    leaguePlayButtonPlayer.attr("src", leaguePlayButtonEnabled);
    leaguePlayButtonPlayer[0].loop = false;
    leaguePlayButtonPlayer[0].currentTime = 0;
    leaguePlayButtonPlayer[0].play();

    leaguePlayButtonContainer.on("mouseover", () => {
        playSound(playButtonHoverSound);
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
            playSound(playButtonClickSound);
            leaguePlayButtonPlayer.attr("src", leaguePlayButtonRelease);
            leaguePlayButtonPlayer[0].loop = false;
            leaguePlayButtonPlayer[0].currentTime = 0;
            leaguePlayButtonPlayer[0].play();
            disablePlayButton();
        }
    });
}

export { enablePlayButton, disablePlayButton, startLeaguePlayButtonVideo }