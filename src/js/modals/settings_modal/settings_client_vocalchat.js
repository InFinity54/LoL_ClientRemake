const autoJoinLeagueVoice = jQuery("#settingsModal_client_vocalChatSettings_autoJoinLeagueVoice");
const disableMicWhenAutoJoin = jQuery("#settingsModal_client_vocalChatSettings_disableMicWhenAutoJoin");
const listeningDeviceContainer = jQuery("#settingsModal_client_vocalChatSettings_listeningDeviceContainer");
const inputVolume = jQuery("#settingsModal_client_vocalChatSettings_inputVolume");
const vocalActivationThreshold = jQuery("#settingsModal_client_vocalChatSettings_vocalActivationThreshold");

autoJoinLeagueVoice.on("change", (event) => {
  window.appSettings.leagueVoice.groupJoin.autoJoinLeagueVoice = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

disableMicWhenAutoJoin.on("change", (event) => {
  window.appSettings.leagueVoice.groupJoin.disableMicWhenAutoJoin = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

listeningDeviceContainer.on("change", (event) => {
  window.appSettings.leagueVoice.listeningDevice = event.target.attributes["data-value"].value;
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

vocalActivationThreshold.on("input", (event) => {
  window.appSettings.leagueVoice.vocalActivationThreshold = event.target.value;
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("input[name='settingsModal_client_vocalChatSettings_inputMode']").on("change", (event) => {
  window.appSettings.leagueVoice.inputMode = jQuery("input[name='settingsModal_client_vocalChatSettings_inputMode']:checked").val();
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

inputVolume.on("input", (event) => {
  window.appSettings.leagueVoice.inputVolume = event.target.value;
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

function initVocalChatSettingsDisplay() {
  autoJoinLeagueVoice.prop("checked", window.appSettings.notifications.disableEsportNotification);
  disableMicWhenAutoJoin.prop("checked", window.appSettings.notifications.onlyFriendsInvites);
  inputVolume.val(window.appSettings.leagueVoice.inputVolume).trigger("input");
  vocalActivationThreshold.val(window.appSettings.leagueVoice.vocalActivationThreshold).trigger("input");

  if (window.appSettings.leagueVoice.inputMode === "2") {
    jQuery("#settingsModal_client_vocalChatSettings_inputMode_pushToTalk").click();
  } else {
    jQuery("#settingsModal_client_vocalChatSettings_inputMode_automaticDetection").click();
  }
}

function populateListeningDevicesList() {
  navigator.mediaDevices.enumerateDevices().then(r => {
    for (const deviceIndex in r) {
      if (r[deviceIndex].kind === "audiooutput" && r[deviceIndex].deviceId !== "default" && r[deviceIndex].deviceId !== "communications") {
        jQuery(listeningDeviceContainer.children()[2]).append(`<option class="form_select_option" data-value=${r[deviceIndex].groupId}>${r[deviceIndex].label}</option>`)
      }

      if (r[deviceIndex].kind === "audiooutput" && r[deviceIndex].deviceId === "default" && appSettings.leagueVoice.listeningDevice === "default") {
        appSettings.leagueVoice.listeningDevice = r[deviceIndex].groupId;
      }
    }

    determineSelectedListeningDevice();
  });
}

function determineSelectedListeningDevice() {
  for (let i = 0; i < jQuery(listeningDeviceContainer.children()[2]).children().length; i++) {
    const dataValue = jQuery(jQuery(listeningDeviceContainer.children()[2]).children()[i]).attr("data-value");

    if (appSettings.leagueVoice.listeningDevice === dataValue) {
      jQuery(jQuery(listeningDeviceContainer.children()[2]).children()[i]).addClass("selected");
      jQuery("#settingsModal_client_generalSettings_listeningDevice").html(jQuery(jQuery(listeningDeviceContainer.children()[2]).children()[i]).html()).attr("data-value", dataValue);
    }
  }
}

export { initVocalChatSettingsDisplay, populateListeningDevicesList }