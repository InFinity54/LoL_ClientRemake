jQuery("#settingsModal_closeButton").on("click", (event) => {
  jQuery("#settingsModal").fadeOut(500);
});

jQuery(".settingsModal_settingsMenuItem").on("click", (event) => {
  jQuery(".settingsModal_settingsMenuItem").removeClass("active");
  jQuery(event.target).addClass("active");
  jQuery(".settingsModal_settingsArea_elementsList").hide();
  jQuery("#" + event.target.attributes["data-tab"].value).show();
});
