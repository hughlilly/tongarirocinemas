// Dynamically loads a YouTube iframe in a <dialog> element
// at the end of the HTML file

// Get iframe element so we can pause it on close
const embeddedTrailer = document.getElementById("embedded-trailer");

// Get "Play trailer" buttons as NodeList
const trailerButtons = document.querySelectorAll(".trailer-button");

// Iterate over NodeList, creating an event listener for each element
trailerButtons.forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    // Get YouTube video ID from HTML `data-videoID` attribute
    const videoID = event.target.dataset.videoid;

    // Update `src` attribute, setting `enablejsapi` to 1 (true)
    // This allows us to pause the video later on; see
    // https://developers.google.com/youtube/player_parameters
    embeddedTrailer.setAttribute(
      "src",
      `https://www.youtube.com/embed/${videoID}?enablejsapi=1`
    );

    // Get the modal and use `showModal()` to display it
    const modal = document.querySelector("#modal");
    modal.showModal();

    // Set the body to "overflow: hidden" so that the document background behind the modal can't be scrolled
    document.body.classList.toggle("modal-open");

    // When close button is clicked, also pause the video so that
    // it doesn't keep playing in the background; see
    // http://michaelrispolidevelopment.com/tips%20and%20tricks/2017/08/07/pause-youtube-video-on-an-event.html
    document.getElementById("close-btn").addEventListener("click", () => {
      embeddedTrailer.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
      // Remove the "src" attribute so that when the modal is next displayed,
      // the previous trailer isn't shown (briefly)
      embeddedTrailer.removeAttribute("src");

      // Remove the previously set "overflow: hidden" on the document body
      document.body.classList.toggle("modal-open");

      // Close the modal
      modal.close();
    });
  });
});
