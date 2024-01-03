import { startLeagueLogoLoop } from "./video";
import { startLeaguePlayButtonVideo } from "../client_content/menu/playbutton";
const loginForm_username = jQuery("#clientLogin_authArea_authForm_username");
const rememberMe = jQuery("#clientLogin_authArea_authForm_rememberMe");
const loginButton = jQuery("#clientLogin_signInButton");
const createAccountButton = jQuery("#clientLogin_createAccountButton");
const forgotUsernameLink = jQuery("#clientLogin_forgotUsernameLink");
const forgotPasswordLink = jQuery("#clientLogin_forgotPasswordLink");

loginForm_username.on("input", (event) => {
  enableLoginButton();
});

function enableLoginButton() {
  if (loginForm_username.val().length >= 3) {
    loginButton.removeAttr("disabled");
  } else {
    loginButton.attr("disabled", "disabled");
  }
}

loginButton.on("click", (event) => {
  const loadingPage = jQuery("#clientLoading");
  const loadingText = jQuery("#clientLoading_progressText");
  const loadingProgress = jQuery("#clientLoading_currentProgress");

  if (rememberMe.is(":checked")) {
    window.appSettings.user.nickname = loginForm_username.val();
    window.appSettings.user.region = jQuery("#clientLogin_authArea_authForm_region").attr("data-value");
  } else {
    window.appSettings.user.nickname = "";
    window.appSettings.user.region = "";
  }

  window.appApi.saveSettings(JSON.stringify(window.appSettings));

  loadingText.html("Chargement");
  loadingProgress.css("width", "0%");
  jQuery("#clientLogin").fadeOut(500);
  loadingPage.fadeIn(500);

  // todo: load, format and display data in the client

  setTimeout(() => {
    startLeagueLogoLoop();
    startLeaguePlayButtonVideo();

    loadingProgress.css("width", "100%");
    loadingPage.fadeOut(500);
    jQuery("#clientContent").fadeIn(500);
  }, 600);
});

createAccountButton.on("click", (event) => {
  window.appApi.openLink("https://authenticate.riotgames.com");
});

forgotUsernameLink.on("click", (event) => {
  window.appApi.openLink("https://recovery.riotgames.com/fr/forgot-username");
});

forgotPasswordLink.on("click", (event) => {
  window.appApi.openLink("https://recovery.riotgames.com/fr/forgot-password");
});

export { enableLoginButton }