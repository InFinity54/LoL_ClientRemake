const loginForm_username = jQuery("#clientLogin_authArea_authForm_username");
const loginForm_password = jQuery("#clientLogin_authArea_authForm_password");
const rememberMe = jQuery("#clientLogin_authArea_authForm_rememberMe");
const loginButton = jQuery("#clientLogin_signInButton");
const forgotUsernameLink = jQuery("#clientLogin_forgotUsernameLink");
const forgotPasswordLink = jQuery("#clientLogin_forgotPasswordLink");

loginForm_username.on("input", (event) => {
  enableLoginButton();
});

loginForm_password.on("input", (event) => {
  enableLoginButton();
});

function enableLoginButton() {
  //if (loginForm_username.val().length >= 3 && loginForm_password.val().length > 0) {
  // following line to replace with previous one if password is activated
  if (loginForm_username.val().length >= 3) {
    loginButton.removeAttr("disabled");
  } else {
    loginButton.attr("disabled", "disabled");
  }
}

loginButton.on("click", (event) => {
  if (rememberMe.is(":checked")) {
    window.appSettings.user.nickname = loginForm_username.val();
    window.appSettings.user.region = jQuery("#clientLogin_authArea_authForm_region").attr("data-value");
  } else {
    window.appSettings.user.nickname = "";
    window.appSettings.user.region = "";
  }

  window.appApi.saveSettings(JSON.stringify(window.appSettings));
  //todo: login
});

forgotUsernameLink.on("click", (event) => {
  window.appApi.openLink("https://recovery.riotgames.com/fr/forgot-username");
});

forgotPasswordLink.on("click", (event) => {
  window.appApi.openLink("https://recovery.riotgames.com/fr/forgot-password");
});

