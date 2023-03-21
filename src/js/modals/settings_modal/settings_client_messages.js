const enableLanguageFilterCheckbox = jQuery("#settingsModal_client_notificationsSettings_enableLanguageFilter");
const enableClickLinkAdvertCheckbox = jQuery("#settingsModal_client_notificationsSettings_enableClickLinkAdvert");
const enableMoreUnreadBarCheckbox = jQuery("#settingsModal_client_notificationsSettings_enableMoreUnreadBar");
const displayMessagesFromFriendInvitesCheckbox = jQuery("#settingsModal_client_notificationsSettings_displayMessagesFromFriendInvites");

enableLanguageFilterCheckbox.on("change", (event) => {
  window.appSettings.messages.enableLanguageFilter = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

enableClickLinkAdvertCheckbox.on("change", (event) => {
  window.appSettings.messages.enableClickLinkAdvert = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

enableMoreUnreadBarCheckbox.on("change", (event) => {
  window.appSettings.messages.enableMoreUnreadBar = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

displayMessagesFromFriendInvitesCheckbox.on("change", (event) => {
  window.appSettings.messages.displayMessagesFromFriendInvites = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

function initMessagesSettingsDisplay() {
  enableLanguageFilterCheckbox.prop("checked", window.appSettings.messages.enableLanguageFilter);
  enableClickLinkAdvertCheckbox.prop("checked", window.appSettings.messages.enableClickLinkAdvert);
  enableMoreUnreadBarCheckbox.prop("checked", window.appSettings.messages.enableMoreUnreadBar);
  displayMessagesFromFriendInvitesCheckbox.prop("checked", window.appSettings.messages.displayMessagesFromFriendInvites);
}

export { initMessagesSettingsDisplay }
