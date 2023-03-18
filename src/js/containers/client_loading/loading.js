let interval = null;
let loadingProgress = 0;

function fakeLoading() {
  if (loadingProgress > 100) {
    loadingProgress = 100;
  }

  if (loadingProgress === 100) {
    clearInterval(interval);
    setTimeout(() => {
      jQuery("#clientLoading").fadeOut(500);
    }, 1000);
  } else {
    loadingProgress += 10;
    jQuery("#clientLoading_currentProgress").css("width", loadingProgress + "%");
  }
}
