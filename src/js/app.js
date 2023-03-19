import { startLoginScreenVideo } from "./containers/client_login/video";
import { startLoginScreenMusic } from "./containers/client_login/music";
const loadingProgressBar = jQuery("#clientLoading_currentProgress");
const loadingProgressText = jQuery("#clientLoading_progressText");

window.appSettings = {
  loginScreen: {
    videoEnabled: true,
    soundEnabled: true
  },
  global: {
    lowConfigMode: false,
    closeClientDuringGame: "off",
    autoCrashReport: false,
    windowSize: "1280x720",
    newsLanguage: "fr"
  }
};

window.appApi.noSettingsFile((event) => {
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

window.appApi.updateSettings((event, args) => {
  window.appSettings = JSON.parse(args);
});

window.updaterAPI.noUpdateAvailable((event) => {
  loadingProgressBar.css("width", "100%");

  setTimeout(() => {
    initializeUserSettings();
    jQuery("#clientLoading").fadeOut(500);
    jQuery("#clientLogin").css("display", "flex").hide().fadeIn(500);
  }, 500);

  setTimeout(() => {
    loadingProgressText.html("Chargement");
    loadingProgressBar.css("width", "0%");
  }, 1000);
});

window.updaterAPI.updateAvailable((event, args) => {
  loadingProgressText.html("Mise à jour");
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

function initializeUserSettings() {
  if (window.appSettings.loginScreen.videoEnabled) {
    startLoginScreenVideo();
  } else {
    jQuery("#clientLogin_videoArea_controls_videoSettings_disableVideo").attr("checked", "checked");
  }

  if (window.appSettings.loginScreen.soundEnabled) {
    startLoginScreenMusic();
  } else {
    jQuery("#clientLogin_videoArea_controls_videoSettings_disableVideoSound").attr("checked", "checked");
  }

  if (window.appSettings.global.lowConfigMode) {
    jQuery("#settingsModal_client_generalSettings_lowConfigMode").attr("checked", "checked");
  }

  jQuery("#settingsModal_client_generalSettings_closeClientDuringGameContainer .form_select_option[data-value='" + window.appSettings.global.closeClientDuringGame + "']").click();

  if (window.appSettings.global.autoCrashReport) {
    jQuery("#settingsModal_client_generalSettings_autoCrashReport").attr("checked", "checked");
  }

  jQuery("#settingsModal_client_generalSettings_windowSizeContainer .form_select_option[data-value='" + window.appSettings.global.windowSize + "']").click();
  jQuery("#settingsModal_client_generalSettings_newsLanguageContainer .form_select_option[data-value='" + window.appSettings.global.newsLanguage + "']").click();
}
