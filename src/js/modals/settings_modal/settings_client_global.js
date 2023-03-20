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
