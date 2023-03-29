jQuery("input[type='range']").on("input", (event) => {
  jQuery(jQuery(jQuery(event.target.parentNode).children()[0]).children()[0]).html(event.target.value);
});
