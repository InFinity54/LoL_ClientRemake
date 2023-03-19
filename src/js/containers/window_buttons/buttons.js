jQuery("#windowButton_help").on("click", (event) => {
  window.appApi.openLink("https://support.riotgames.com/hc/fr");
});

jQuery("#windowButton_reduce").on("click", (event) => {
  window.windowAPI.windowReduce();
});

jQuery("#windowButton_settings").on("click", (event) => {
  // todo: settings window
});

jQuery("#windowButton_exit").on("click", (event) => {
  window.windowAPI.appExit();
});
