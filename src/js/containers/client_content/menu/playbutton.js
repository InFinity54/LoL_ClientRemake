import { startLeaguePlayButtonVideo } from "../../client_login/video";
const leaguePlayButtonContainer = jQuery("#clientContent_menu_playButtonContainer");
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

export { enablePlayButton, disablePlayButton }