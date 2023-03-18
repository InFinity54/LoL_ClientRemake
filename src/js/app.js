const loadingProgressBar = jQuery("#clientLoading_currentProgress");
const loadingProgressText = jQuery("#clientLoading_progressText");

window.appSettings = {
  loginScreen: {
    videoEnabled: true,
    soundEnabled: true
  }
};

window.appApi.noSettingsFile((event) => {
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

window.appApi.updateSettings((event, args) => {
  window.appSettings = JSON.parse(args);

  if (!window.appSettings.soundEnabled) {
    jQuery("#settings_audio_enablesound_input").removeAttr("checked");
  }
});

window.updaterAPI.noUpdateAvailable((event) => {
  loadingProgressBar.css("width", "100%");

  setTimeout(() => {
    jQuery("#clientLoading").fadeOut(500);
    jQuery("#clientLogin").fadeIn(500);
  }, 500);

  setTimeout(() => {
    loadingProgressText.html("Chargement");
    loadingProgressBar.css("width", "0%");
  }, 1000);
});

window.updaterAPI.updateAvailable((event, args) => {
  loadingProgressText.html("Chargement");
});

window.updaterAPI.updateDownloading((event, args) => {
  loadingProgressBar.css("width", args.percent + "%");
});

window.updaterAPI.updateDownloaded((event) => {
  loadingProgressText.html("Préparation");

  setTimeout(() => {
    loadingProgressBar.css("width", "33%");
  }, 1000);

  setTimeout(() => {
    loadingProgressBar.css("width", "66%");
  }, 2000);

  setTimeout(() => {
    loadingProgressBar.css("width", "100%");
  }, 3000);
});
