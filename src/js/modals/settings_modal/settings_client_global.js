const autoCrashReportCheckbox = jQuery("#settingsModal_client_generalSettings_autoCrashReport");

autoCrashReportCheckbox.on("change", (event) => {
  window.appSettings.global.autoCrashReport = jQuery(event.target).is(":checked");
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_generalSettings_windowSizeContainer").on("change", (event) => {
  window.appSettings.global.windowSize = event.target.attributes["data-value"].value;
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
});

jQuery("#settingsModal_client_generalSettings_newsLanguageContainer").on("change", (event) => {
  window.appSettings.global.newsLanguage = event.target.attributes["data-value"].value;
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
});

function initGlobalSettingsDisplay() {
  autoCrashReportCheckbox.prop("checked", window.appSettings.global.autoCrashReport);

  jQuery("#settingsModal_client_generalSettings_windowSizeContainer .form_select_option[data-value='" + window.appSettings.global.windowSize + "']").click();
  jQuery("#settingsModal_client_generalSettings_newsLanguageContainer .form_select_option[data-value='" + window.appSettings.global.newsLanguage + "']").click();
}

export { initGlobalSettingsDisplay }
