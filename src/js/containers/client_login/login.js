import { startLeagueLogoLoop, stopLoginScreenVideo } from "./video";
import { stopLoginScreenMusic } from "./music";
import { startLeaguePlayButtonVideo } from "../client_content/menu/playbutton";
import { generateFullRiotApiRequestURL, handleRiotApiError } from "../../global/riotapi";
const loginForm_username = jQuery("#clientLogin_authArea_authForm_username");
const rememberMe = jQuery("#clientLogin_authArea_authForm_rememberMe");
const loginButton = jQuery("#clientLogin_signInButton");
const createAccountButton = jQuery("#clientLogin_createAccountButton");
const forgotUsernameLink = jQuery("#clientLogin_forgotUsernameLink");
const forgotPasswordLink = jQuery("#clientLogin_forgotPasswordLink");
const loadingPage = jQuery("#clientLoading");
const loadingText = jQuery("#clientLoading_progressText");
const loadingProgress = jQuery("#clientLoading_currentProgress");
let currentLoginProgress = 0;
let loginProgressChecker;

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
  loginProgressChecker = setInterval(() => {
    loadingProgress.css("width", `${currentLoginProgress}%`);

    if (currentLoginProgress >= 100) {
      clearInterval(loginProgressChecker);
      openClientAfterSuccessfulLogin();
    }
  }, 250);

  if (rememberMe.is(":checked")) {
    window.appSettings.user.nickname = loginForm_username.val();
    window.appSettings.user.region = jQuery("#clientLogin_authArea_authForm_region").attr("data-value");
  } else {
    window.appSettings.user.nickname = "";
    window.appSettings.user.region = "";
  }

  window.appAPI.saveSettings(JSON.stringify(window.appSettings));
  loadingText.html("Chargement");
  loadingProgress.css("width", "0%");
  loadingPage.fadeIn(500);
  window.appData.user.gameName = window.appSettings.user.nickname.substring(0, window.appSettings.user.nickname.indexOf("#"));
  window.appData.user.tagLine = window.appSettings.user.nickname.substring(window.appSettings.user.nickname.indexOf("#") + 1);

  checkIfUserExistsOnRiotServers();
});

function checkIfUserExistsOnRiotServers() {
  window.appAPI.onlineRequest({
    url: generateFullRiotApiRequestURL(window.appSettings.user.region, true, `/riot/account/v1/accounts/by-riot-id/${window.appData.user.gameName}/${window.appData.user.tagLine}`)
  }).then((result) => {
    let resultJson = JSON.parse(result);

    if (resultJson.response._responseHead.statusCode === 200) {
      window.appData.user = JSON.parse(resultJson.content);
      currentLoginProgress = 25;
      getUserBaseData();
    } else {
      clearInterval(loginProgressChecker);
      handleRiotApiError(resultJson.response._responseHead.statusCode);
      loadingPage.fadeOut(500);
    }
  });
}

function getUserBaseData() {
  window.appAPI.onlineRequest({
    url: generateFullRiotApiRequestURL(window.appSettings.user.region, false, `/lol/summoner/v4/summoners/by-puuid/${window.appData.user.puuid}`)
  }).then((result) => {
    let resultJson = JSON.parse(result);

    if (resultJson.response._responseHead.statusCode === 200) {
      resultJson.content = JSON.parse(resultJson.content);
      window.appData.user.accountId = resultJson.content.accountId;
      window.appData.user.id = resultJson.content.id;
      window.appData.user.profileIconId = resultJson.content.profileIconId;
      window.appData.user.revisionDate = resultJson.content.revisionDate;
      window.appData.user.summonerLevel = resultJson.content.summonerLevel;
      jQuery("#clientContent_socialArea_user_level").html(window.appData.user.summonerLevel);
      jQuery("#clientContent_socialArea_user_name").html(window.appData.user.gameName);
      currentLoginProgress = 50;
      displayUserProfileIcon();
    } else {
      clearInterval(loginProgressChecker);
      handleRiotApiError(resultJson.response._responseHead.statusCode);
      loadingPage.fadeOut(500);
    }
  });
}

function displayUserProfileIcon() {
  window.appAPI.onlineImage({
    url: `https://ddragon.infinity54.fr/lol/latest/img/profileicon/${window.appData.user.profileIconId}.png`,
    encoding: null
  }).then((result) => {
    jQuery("#clientContent_socialArea_user_profileIcon").css("background-image", "url(" + result + ")");
    currentLoginProgress = 100;
  });
}

function openClientAfterSuccessfulLogin() {
  jQuery("#clientLogin").hide();
  loadingPage.fadeOut(500);
  jQuery("#clientContent").fadeIn(500);
  stopLoginScreenVideo();
  stopLoginScreenMusic();
  startLeagueLogoLoop();
  startLeaguePlayButtonVideo();
}

createAccountButton.on("click", (event) => {
  window.appAPI.openLink("https://authenticate.riotgames.com");
});

forgotUsernameLink.on("click", (event) => {
  window.appAPI.openLink("https://recovery.riotgames.com/fr/forgot-username");
});

forgotPasswordLink.on("click", (event) => {
  window.appAPI.openLink("https://recovery.riotgames.com/fr/forgot-password");
});

export { enableLoginButton }