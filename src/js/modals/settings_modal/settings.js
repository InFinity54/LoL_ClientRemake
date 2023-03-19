jQuery("#settingsModal_closeButton").on("click", (event) => {
  jQuery("#settingsModal").fadeOut(500);
});

jQuery(".settingsModal_settingsMenuItem").on("click", (event) => {
  jQuery(".settingsModal_settingsMenuItem").removeClass("active");
  jQuery(event.target).addClass("active");
  jQuery(".settingsModal_settingsArea_elementsList").hide();
  jQuery("#" + event.target.attributes["data-tab"].value).show();
});

/* CLIENT SETTINGS */
// Global tab
jQuery("#settingsModal_client_generalSettings_lowConfigMode").on("change", (event) => {
  window.appSettings.global.lowConfigMode = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_generalSettings_closeClientDuringGame").on("change", (event) => {
  window.appSettings.global.closeClientDuringGame = event.target.attributes["data-value"].value;
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_generalSettings_autoCrashReport").on("change", (event) => {
  window.appSettings.global.autoCrashReport = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_generalSettings_windowSizeContainer").on("change", (event) => {
  window.appSettings.global.windowSize = event.target.attributes["data-value"].value;
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_generalSettings_newsLanguageContainer").on("change", (event) => {
  window.appSettings.global.newsLanguage = event.target.attributes["data-value"].value;
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

// Notifications tab
jQuery("#settingsModal_client_notificationsSettings_disableEsportNotification").on("change", (event) => {
  console.log("disableEsportNotification: " + jQuery(event.target).is(":checked"));
  window.appSettings.notifications.disableEsportNotification = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_notificationsSettings_onlyFriendsInvites").on("change", (event) => {
  console.log("onlyFriendsInvites: " + jQuery(event.target).is(":checked"));
  window.appSettings.notifications.onlyFriendsInvites = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_notificationsSettings_disableNewIconInCollection").on("change", (event) => {
  console.log("disableNewIconInCollection: " + jQuery(event.target).is(":checked"));
  window.appSettings.notifications.disableNewIconInCollection = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});
