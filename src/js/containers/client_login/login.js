const loginForm_username = jQuery("#clientLogin_authArea_authForm_username");
const loginForm_password = jQuery("#clientLogin_authArea_authForm_password");
const rememberMe = jQuery("#clientLogin_authArea_authForm_rememberMe");
const loginButton = jQuery("#clientLogin_signInButton");

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
  let alertText = "Bienvenue sur League of Legends, " + loginForm_username.val() + " !";

  if (rememberMe.is(":checked")) {
    alertText += "\r\nVotre nom d'utilisateur sera sauvegardé dans les paramètres de l'application. Vous serez connecté automatiquement au prochain démarrage du jeu."
  }

  alert(alertText);
});
