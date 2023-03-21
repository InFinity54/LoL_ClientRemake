const disableEsportNotificationCheckbox = jQuery("#settingsModal_client_notificationsSettings_disableEsportNotification");
const onlyFriendsInvitesCheckbox = jQuery("#settingsModal_client_notificationsSettings_onlyFriendsInvites");
const disableNewIconInCollectionCheckbox = jQuery("#settingsModal_client_notificationsSettings_disableNewIconInCollection");

disableEsportNotificationCheckbox.on("change", (event) => {
  window.appSettings.notifications.disableEsportNotification = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

onlyFriendsInvitesCheckbox.on("change", (event) => {
  window.appSettings.notifications.onlyFriendsInvites = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

disableNewIconInCollectionCheckbox.on("change", (event) => {
  window.appSettings.notifications.disableNewIconInCollection = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

function initNotificationsSettingsDisplay() {
  disableEsportNotificationCheckbox.prop("checked", window.appSettings.notifications.disableEsportNotification);
  onlyFriendsInvitesCheckbox.prop("checked", window.appSettings.notifications.onlyFriendsInvites);
  disableNewIconInCollectionCheckbox.prop("checked", window.appSettings.notifications.disableNewIconInCollection);
}

export { initNotificationsSettingsDisplay }
