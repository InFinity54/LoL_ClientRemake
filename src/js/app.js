import { startLoginScreenVideo } from "./containers/client_login/video";
import { startLoginScreenMusic } from "./containers/client_login/music";
import { initSettingsDisplay } from "./modals/settings_modal/settings";
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
    autoCrashReport: true,
    windowSize: "1280x720",
    newsLanguage: "fr"
  },
  notifications: {
    disableEsportNotification: false,
    onlyFriendsInvites: false,
    disableNewIconInCollection: false
  },
  messages: {
    enableLanguageFilter: true,
    enableClickLinkAdvert: true,
    enableMoreUnreadBar: true,
    displayMessagesFromFriendInvites: false
  },
  audio: {
    enableAudio: true,
    audioGlobalVolume: 100,
    enableSfx: true,
    sfxVolume: 100,
    enableAmbientSounds: true,
    enableChampSelectionSounds: true,
    enableBanSounds: true,
    enableMusic: true,
    musicVolume: 100,
    enableChampSelectMusic: true,
    enableLobbyMusic: true
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
    initializeLoginScreenSettings();
    initSettingsDisplay();
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

function initializeLoginScreenSettings() {
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
}
