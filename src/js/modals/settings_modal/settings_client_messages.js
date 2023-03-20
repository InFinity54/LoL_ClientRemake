jQuery("#settingsModal_client_notificationsSettings_enableLanguageFilter").on("change", (event) => {
  console.log("enableLanguageFilter: " + jQuery(event.target).is(":checked"));
  window.appSettings.messages.enableLanguageFilter = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_notificationsSettings_enableClickLinkAdvert").on("change", (event) => {
  console.log("enableClickLinkAdvert: " + jQuery(event.target).is(":checked"));
  window.appSettings.messages.enableClickLinkAdvert = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_notificationsSettings_enableMoreUnreadBar").on("change", (event) => {
  console.log("enableMoreUnreadBar: " + jQuery(event.target).is(":checked"));
  window.appSettings.messages.enableMoreUnreadBar = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_notificationsSettings_displayMessagesFromFriendInvites").on("change", (event) => {
  console.log("displayMessagesFromFriendInvites: " + jQuery(event.target).is(":checked"));
  window.appSettings.messages.displayMessagesFromFriendInvites = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});
