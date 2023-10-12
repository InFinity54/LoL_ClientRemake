const autoJoinLeagueVoice = jQuery("#settingsModal_client_vocalChatSettings_autoJoinLeagueVoice");
const disableMicWhenAutoJoin = jQuery("#settingsModal_client_vocalChatSettings_disableMicWhenAutoJoin");
const listeningDeviceContainer = jQuery("#settingsModal_client_vocalChatSettings_listeningDeviceContainer");

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

function initVocalChatSettingsDisplay() {
  autoJoinLeagueVoice.prop("checked", window.appSettings.notifications.disableEsportNotification);
  disableMicWhenAutoJoin.prop("checked", window.appSettings.notifications.onlyFriendsInvites);
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
    console.log(dataValue, appSettings.leagueVoice.listeningDevice);

    if (appSettings.leagueVoice.listeningDevice === dataValue) {
      jQuery(jQuery(listeningDeviceContainer.children()[2]).children()[i]).addClass("selected");
      jQuery("#settingsModal_client_generalSettings_listeningDevice").html(jQuery(jQuery(listeningDeviceContainer.children()[2]).children()[i]).html()).attr("data-value", dataValue);
    }
  }
}

export { initVocalChatSettingsDisplay, populateListeningDevicesList }