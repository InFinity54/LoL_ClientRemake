const enableAudioCheckbox = jQuery("#settingsModal_client_audioSettings_enableAudio");
const audioGlobalVolumeContainer = jQuery("#settingsModal_client_audioSettings_audioGlobalVolumeContainer");
const audioGlobalVolumeInput = jQuery("#settingsModal_client_audioSettings_audioGlobalVolume");
const enableSfxContainer = jQuery("#settingsModal_client_audioSettings_enableSfxContainer");
const enableSfxCheckbox = jQuery("#settingsModal_client_audioSettings_enableSfx");
const sfxVolumeContainer = jQuery("#settingsModal_client_audioSettings_sfxVolumeContainer");
const sfxVolumeInput = jQuery("#settingsModal_client_audioSettings_sfxVolume");
const enableAmbientSoundsContainer = jQuery("#settingsModal_client_audioSettings_enableAmbientSoundsContainer");
const enableAmbientSoundsCheckbox = jQuery("#settingsModal_client_audioSettings_enableAmbientSounds");
const enableChampSelectionSoundsContainer = jQuery("#settingsModal_client_audioSettings_enableChampSelectionSoundsContainer");
const enableChampSelectionSoundsCheckbox = jQuery("#settingsModal_client_audioSettings_enableChampSelectionSounds");
const enableBanSoundsContainer = jQuery("#settingsModal_client_audioSettings_enableBanSoundsContainer");
const enableBanSoundsCheckbox = jQuery("#settingsModal_client_audioSettings_enableBanSounds");
const enableMusicContainer = jQuery("#settingsModal_client_audioSettings_enableMusicContainer");
const enableMusicCheckbox = jQuery("#settingsModal_client_audioSettings_enableMusic");
const musicVolumeContainer = jQuery("#settingsModal_client_audioSettings_musicVolumeContainer");
const musicVolumeInput = jQuery("#settingsModal_client_audioSettings_musicVolume");
const enableChampSelectMusicContainer = jQuery("#settingsModal_client_audioSettings_enableChampSelectMusicContainer");
const enableChampSelectMusicCheckbox = jQuery("#settingsModal_client_audioSettings_enableChampSelectMusic");
const enableLobbyMusicContainer = jQuery("#settingsModal_client_audioSettings_enableLobbyMusicContainer");
const enableLobbyMusicCheckbox = jQuery("#settingsModal_client_audioSettings_enableLobbyMusic");

enableAudioCheckbox.on("change", (event) => {
  window.appSettings.audio.enableAudio = jQuery(event.target).is(":checked");
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));

  if (jQuery(event.target).is(":checked")) {
    showAllSettings();
  } else {
    hideAllSettings();
  }
});

audioGlobalVolumeInput.on("input", (event) => {
  window.appSettings.audio.audioGlobalVolume = event.target.value;
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
});

enableSfxCheckbox.on("change", (event) => {
  window.appSettings.audio.enableSfx = jQuery(event.target).is(":checked");
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));

  if (jQuery(event.target).is(":checked")) {
    showSfxSettings();
  } else {
    hideSfxSettings();
  }
});

sfxVolumeInput.on("input", (event) => {
  window.appSettings.audio.sfxVolume = event.target.value;
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
});

enableAmbientSoundsCheckbox.on("change", (event) => {
  window.appSettings.audio.enableAmbientSounds = jQuery(event.target).is(":checked");
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
});

enableChampSelectionSoundsCheckbox.on("change", (event) => {
  window.appSettings.audio.enableChampSelectionSounds = jQuery(event.target).is(":checked");
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
});

enableBanSoundsCheckbox.on("change", (event) => {
  window.appSettings.audio.enableBanSounds = jQuery(event.target).is(":checked");
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
});

enableMusicCheckbox.on("change", (event) => {
  window.appSettings.audio.enableMusic = jQuery(event.target).is(":checked");
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));

  if (jQuery(event.target).is(":checked")) {
    showMusicSettings();
  } else {
    hideMusicSettings();
  }
});

musicVolumeInput.on("input", (event) => {
  window.appSettings.audio.musicVolume = event.target.value;
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
});

enableChampSelectMusicCheckbox.on("change", (event) => {
  window.appSettings.audio.enableChampSelectMusic = jQuery(event.target).is(":checked");
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
});

enableLobbyMusicCheckbox.on("change", (event) => {
  window.appSettings.audio.enableLobbyMusic = jQuery(event.target).is(":checked");
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
});

function initAudioSettingsDisplay() {
  // inputs init
  enableAudioCheckbox.prop("checked", window.appSettings.audio.enableAudio);
  audioGlobalVolumeInput.val(window.appSettings.audio.audioGlobalVolume).trigger("input");

  enableSfxCheckbox.prop("checked", window.appSettings.audio.enableSfx);
  sfxVolumeInput.val(window.appSettings.audio.sfxVolume).trigger("input");

  enableAmbientSoundsCheckbox.prop("checked", window.appSettings.audio.enableAmbientSounds);
  enableChampSelectionSoundsCheckbox.prop("checked", window.appSettings.audio.enableChampSelectionSounds);
  enableBanSoundsCheckbox.prop("checked", window.appSettings.audio.enableBanSounds);

  enableMusicCheckbox.prop("checked", window.appSettings.audio.enableMusic);
  musicVolumeInput.val(window.appSettings.audio.musicVolume).trigger("input");

  enableChampSelectMusicCheckbox.prop("checked", window.appSettings.audio.enableChampSelectMusic);
  enableLobbyMusicCheckbox.prop("checked", window.appSettings.audio.enableLobbyMusic);

  // display init
  if (!window.appSettings.audio.enableAudio) {
    hideAllSettings();
    hideSfxSettings();
    hideMusicSettings();
  }

  if (!window.appSettings.audio.enableSfx) {
    hideSfxSettings();
  }

  if (!window.appSettings.audio.enableMusic) {
    hideMusicSettings();
  }
}

function showAllSettings() {
  audioGlobalVolumeContainer.show();
  enableSfxContainer.show();
  enableMusicContainer.show();

  if (!window.appSettings.audio.enableSfx) {
    hideSfxSettings();
  } else {
    showSfxSettings();
  }

  if (!window.appSettings.audio.enableMusic) {
    hideMusicSettings();
  } else {
    showMusicSettings();
  }
}

function hideAllSettings() {
  audioGlobalVolumeContainer.hide();
  enableSfxContainer.hide();
  enableMusicContainer.hide();
  hideSfxSettings();
  hideMusicSettings();
}

function showSfxSettings() {
  sfxVolumeContainer.show();
  enableAmbientSoundsContainer.show();
  enableChampSelectionSoundsContainer.show();
  enableBanSoundsContainer.show();
}

function hideSfxSettings() {
  sfxVolumeContainer.hide();
  enableAmbientSoundsContainer.hide();
  enableChampSelectionSoundsContainer.hide();
  enableBanSoundsContainer.hide();
}

function showMusicSettings() {
  musicVolumeContainer.show();
  enableChampSelectMusicContainer.show();
  enableLobbyMusicContainer.show();
}

function hideMusicSettings() {
  musicVolumeContainer.hide();
  enableChampSelectMusicContainer.hide();
  enableLobbyMusicContainer.hide();
}

export { initAudioSettingsDisplay }
