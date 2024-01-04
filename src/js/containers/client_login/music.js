import musicBackground from "../../../../snd/containers/client_login/loginscreen_musicbackground.ogg";
import { playSound } from "../../global/audio";
let audioPlayer;
const audioSettings_disableSound = jQuery("#clientLogin_videoArea_controls_videoSettings_disableVideoSound");

function startLoginScreenMusic() {
  if (window.appSettings.audio.enableAudio) {
    audioPlayer = playSound(musicBackground, true);
  }
}

function stopLoginScreenMusic() {
  if (audioPlayer !== undefined) {
    audioPlayer.pause();
    audioPlayer.remove();
  }
}

audioSettings_disableSound.change(function() {
  if (this.checked) {
    stopLoginScreenMusic();
  } else {
    startLoginScreenMusic();
  }

  window.appSettings.loginScreen.soundEnabled = !this.checked;
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
});

export { startLoginScreenMusic, stopLoginScreenMusic };
