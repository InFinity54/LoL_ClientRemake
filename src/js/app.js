import { playSound, defaultButtonHoverSound, defaultButtonClickSound, checkboxClickSound } from "./global/audio";
import { startLoginScreenVideo } from "./containers/client_login/video";
import { startLoginScreenMusic } from "./containers/client_login/music";
import { initSettingsDisplay } from "./modals/settings_modal/settings";
import { enableLoginButton } from "./containers/client_login/login";
const loadingProgressBar = jQuery("#clientLoading_currentProgress");
const loadingProgressText = jQuery("#clientLoading_progressText");

window.riotApiKey = "RGAPI-9a0a803c-7b3e-42f8-943b-7d3356ccb6a5";

window.appData = {
  league: {
    referenceVersion: {
      short: "13.24",
      full: "13.24.547.5912"
    }
  },
  user: {
    gameName: "",
    tagLine: "",
    puuid: ""
  }
}

window.appSettings = {
  loginScreen: {
    videoEnabled: true,
    soundEnabled: true
  },
  global: {
    autoCrashReport: true,
    windowSize: "1280x720",
    newsLanguage: "fr"
  },
  notifications: {
    disableEsportNotification: false,
  },
  audio: {
    enableAudio: true,
    audioGlobalVolume: 100,
    enableSfx: true,
    sfxVolume: 100,
    enableAmbientSounds: true,
    enableChampSelectionSounds: true,
    enableBanSounds: true,
    enableMusic: true,
    musicVolume: 100,
    enableChampSelectMusic: true,
    enableLobbyMusic: true
  },
  user: {
    nickname: ""
  }
};

window.appAPI.noSettingsFile((event) => {
  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
});

window.appAPI.updateSettings((event, args) => {
  window.appSettings = JSON.parse(args);

  if (window.appSettings.user.region !== "" && window.appSettings.user.nickname !== "") {
    jQuery("#clientLogin_authArea_authForm_regionContainer .form_select_option[data-value=" + window.appSettings.user.region + "]").trigger("click");
    jQuery("#clientLogin_authArea_authForm_rememberMe").trigger("click");
    jQuery("#clientLogin_authArea_authForm_username").val(window.appSettings.user.nickname).trigger("input");
  }
});

window.updaterAPI.noUpdateAvailable((event) => {
  window.appAPI.onlineRequest({
    url: 'https://leaguestats.infinity54.fr/riot/lol/latest/manifest.json'
  }).then((result) => {
    let resultJson = JSON.parse(result);
    resultJson.content = JSON.parse(resultJson.content);
    jQuery("#clientLogin_version").html(`V${resultJson.content.v}`);
    jQuery("#clientContent_socialArea_footer_leagueVersion").html(`V${resultJson.content.v.substring(0, resultJson.content.v.length - 2)}`);
    loadingProgressBar.css("width", "100%");

    setTimeout(() => {
      initializeLoginScreenSettings();
      initSettingsDisplay();
      enableLoginButton();
      jQuery("#clientLoading").fadeOut(500);
      jQuery("#clientLogin").css("display", "flex").hide().fadeIn(500);
    }, 500);

    setTimeout(() => {
      loadingProgressText.html("Chargement");
      loadingProgressBar.css("width", "0%");
    }, 1000);
  });
});

window.updaterAPI.updateAvailable((event, args) => {
  loadingProgressText.html("Mise à jour");
});

window.updaterAPI.updateDownloading((event, args) => {
  loadingProgressBar.css("width", args.percent + "%");
});

window.updaterAPI.updateDownloaded((event) => {
  setTimeout(() => {
    loadingProgressBar.css("width", "33%");
  }, 1000);

  setTimeout(() => {
    loadingProgressBar.css("width", "66%");
  }, 2000);

  setTimeout(() => {
    loadingProgressBar.css("width", "100%");
  }, 3000);
});

function initializeLoginScreenSettings() {
  if (window.appSettings.loginScreen.videoEnabled) {
    startLoginScreenVideo();
  } else {
    jQuery("#clientLogin_videoArea_controls_videoSettings_disableVideo").attr("checked", "checked");
  }

  if (window.appSettings.loginScreen.soundEnabled) {
    startLoginScreenMusic();
  } else {
    jQuery("#clientLogin_videoArea_controls_videoSettings_disableVideoSound").attr("checked", "checked");
  }
}

jQuery("button:not(:disabled)")
    .on("mouseover", (event) => {
      playSound(defaultButtonHoverSound);
    })
    .on("click", (event) => {
      playSound(defaultButtonClickSound);
    });

jQuery("input[type=checkbox]").on("click", (event) => {
  playSound(checkboxClickSound);
});

export { initializeLoginScreenSettings }