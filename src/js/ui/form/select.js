jQuery(".form_select").click((event) => {
  const formSelect = jQuery(event.target);
  const formSelectOptions = jQuery(event.target.parentNode.children[2]);

  if (formSelect.hasClass("active")) {
    formSelect.removeClass("active");
    formSelectOptions.hide();
  } else {
    formSelect.addClass("active");
    formSelectOptions.slideDown(175);
  }
});

jQuery(".form_select_option").click((event) => {
  const selectedOption = jQuery(event.target);
  const selectedOptionDisplay = jQuery(event.target.parentNode.parentNode.children[1].children[0]);
  const formSelect = jQuery(event.target.parentNode.parentNode.children[1]);
  const formSelectOptions = jQuery(event.target.parentNode.parentNode.children[2]);

  selectedOptionDisplay.html(selectedOption.html());
  selectedOptionDisplay.attr("data-value", selectedOption.data("value"));
  formSelectOptions.hide();
  formSelectOptions.find('div.form_select_option').removeClass("selected");
  formSelect.removeClass("active");
  selectedOption.addClass("selected");
  selectedOptionDisplay.trigger("change");
});
