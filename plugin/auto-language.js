videojs.registerPlugin('autoLanguage', function() {
      var myPlayer = this;
      myPlayer.on("loadedmetadata", function () {

        // +++ Get the browser language +++
        var browser_language = navigator.language ||
            navigator.userLanguage; // IE <= 10;
        browser_language = browser_language.substr(0, 2);

        // +++ Get the captions +++
        var track_language;
        var tracks = myPlayer.textTracks();

        // +++ Loop through captions +++
        for (var i = 0; i < (tracks.length); i++) {
            track_language = tracks[i].language.substr(0, 2);

      // +++ Set the default caption language +++
            // When the caption language equals the browser language, then set it as default
            if (track_language) {
                if (track_language === browser_language) {
                    tracks[i].mode = "showing";
                } else {
                    tracks[i].mode = "disabled";
                }
            }
        }
    });

});
