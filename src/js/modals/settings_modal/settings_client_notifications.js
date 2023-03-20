jQuery("#settingsModal_client_notificationsSettings_disableEsportNotification").on("change", (event) => {
  window.appSettings.notifications.disableEsportNotification = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_notificationsSettings_onlyFriendsInvites").on("change", (event) => {
  window.appSettings.notifications.onlyFriendsInvites = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_notificationsSettings_disableNewIconInCollection").on("change", (event) => {
  window.appSettings.notifications.disableNewIconInCollection = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});
