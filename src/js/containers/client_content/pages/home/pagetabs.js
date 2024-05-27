jQuery('.clientContent_page_home_pageMenuItem.clientContent_pageMenuItem').click((e) => {
    jQuery('#clientContent_page_home_' + jQuery('.clientContent_page_home_pageMenuItem.clientContent_pageMenuItemActive').attr("data-page")).removeClass("clientContent_pageTabActive");
    jQuery('#clientContent_page_home_' + jQuery(e.target).attr("data-page")).addClass("clientContent_pageTabActive");
    jQuery('.clientContent_page_home_pageMenuItem').removeClass("clientContent_pageMenuItemActive");
    jQuery(e.target).addClass("clientContent_pageMenuItemActive");
})