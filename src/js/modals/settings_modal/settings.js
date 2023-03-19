jQuery("#settingsModal_closeButton").on("click", (event) => {
  jQuery("#settingsModal").fadeOut(500);
});

// Global tab
jQuery("#settingsModal_client_generalSettings_lowConfigMode").on("change", (event) => {
  console.log("lowConfigMode: " + jQuery(event.target).is(":checked"));
  window.appSettings.global.lowConfigMode = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_generalSettings_closeClientDuringGame").on("change", (event) => {
  console.log("closeClientDuringGame: " + event.target.attributes["data-value"].value);
  window.appSettings.global.closeClientDuringGame = event.target.attributes["data-value"].value;
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_generalSettings_autoCrashReport").on("change", (event) => {
  console.log("autoCrashReport: " + jQuery(event.target).is(":checked"));
  window.appSettings.global.autoCrashReport = jQuery(event.target).is(":checked");
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_generalSettings_windowSizeContainer").on("change", (event) => {
  console.log("windowSize: " + event.target.attributes["data-value"].value);
  window.appSettings.global.windowSize = event.target.attributes["data-value"].value;
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_generalSettings_newsLanguageContainer").on("change", (event) => {
  console.log("newsLanguage: " + event.target.attributes["data-value"].value);
  window.appSettings.global.newsLanguage = event.target.attributes["data-value"].value;
  window.appApi.saveSettings(JSON.stringify(window.appSettings));
});
