jQuery("#windowButton_help").on("click", (event) => {
  window.appAPI.openLink("https://support.riotgames.com/hc/fr");
});

jQuery("#windowButton_reduce").on("click", (event) => {
  window.windowAPI.windowReduce();
});

jQuery("#windowButton_settings").on("click", (event) => {
  jQuery("#settingsModal").fadeIn(250);
});

jQuery("#windowButton_exit").on("click", (event) => {
  window.windowAPI.appExit();
});
