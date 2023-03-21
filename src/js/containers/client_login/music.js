import musicBackground from "../../../../snd/containers/client_login/loginscreen_musicbackground.ogg";
const audioPlayer = new Audio(musicBackground);
const audioSettings_disableSound = jQuery("#clientLogin_videoArea_controls_videoSettings_disableVideoSound");

function startLoginScreenMusic() {
  audioPlayer.play();

  audioPlayer.addEventListener('ended', function() {
    audioPlayer.src = musicBackground;
    startLoginScreenMusic();
  });
}

function stopLoginScreenMusic() {
  audioPlayer.pause();
  audioPlayer.src = musicBackground;
}

audioSettings_disableSound.change(function() {
  if (this.checked) {
    stopLoginScreenMusic();
  } else {
    startLoginScreenMusic();
  }

  window.appSettings.loginScreen.soundEnabled = !this.checked;
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

export { startLoginScreenMusic, stopLoginScreenMusic };
