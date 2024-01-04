import { initGlobalSettingsDisplay } from "./settings_client_global";
import { initNotificationsSettingsDisplay } from "./settings_client_notifications";
import { initAudioSettingsDisplay } from "./settings_client_audio";

jQuery("#settingsModal_closeButton").on("click", (event) => {
  jQuery("#settingsModal").fadeOut(250);
});

jQuery("#settingsModal_reinitButton").on("click", (event) => {
  resetDefaultSettings();
});

jQuery(".settingsModal_settingsMenuItem").on("click", (event) => {
  jQuery(".settingsModal_settingsMenuItem").removeClass("active");
  jQuery(event.target).addClass("active");
  jQuery(".settingsModal_settingsArea_elementsList").hide();
  jQuery("#" + event.target.attributes["data-tab"].value).show();
  jQuery("#settingsModal_secondaryTitle").html(event.target.attributes["data-area"].value + " /");
  jQuery("#settingsModal_primaryTitle").html(jQuery(event.target).html());
});

function resetDefaultSettings() {
  window.appSettings.global = {
    autoCrashReport: true,
    windowSize: "1280x720",
    newsLanguage: "fr"
  };

  window.appSettings.notifications = {
    disableEsportNotification: false
  };

  window.appSettings.audio = {
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
  };

  window.appSettings.user = {
    nickname: "",
    region: ""
  };

  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
  initSettingsDisplay();
}

function initSettingsDisplay() {
  initGlobalSettingsDisplay();
  initNotificationsSettingsDisplay();
  initAudioSettingsDisplay();
}

export { initSettingsDisplay }
