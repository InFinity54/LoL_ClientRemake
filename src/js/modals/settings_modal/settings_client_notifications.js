const disableEsportNotificationCheckbox = jQuery("#settingsModal_client_notificationsSettings_disableEsportNotification");

disableEsportNotificationCheckbox.on("change", (event) => {
  window.appSettings.notifications.disableEsportNotification = jQuery(event.target).is(":checked");
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
});

function initNotificationsSettingsDisplay() {
  disableEsportNotificationCheckbox.prop("checked", window.appSettings.notifications.disableEsportNotification);
}

export { initNotificationsSettingsDisplay }
