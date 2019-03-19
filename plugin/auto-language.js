videojs.registerPlugin('autoLanguage', function() {
      var myPlayer = this;
      myPlayer.on("loadedmetadata", function () {
        // +++ Retrieve the menu options +++
        var menuOptions = myPlayer.controlBar.subsCapsButton.menu.children();

        // +++ Get the browser language +++
        var browser_language = navigator.language ||
                               navigator.userLanguage; // IE <= 10;
        browser_language = browser_language.substr(0,2);

        // +++ Loop through captions +++
        var track_language;
        menuOptions.forEach(function (item) {
          // +++ Set the default caption language +++
          // When the caption language equals the browser language, then set it as default

          if(typeof item.track.language !== 'undefined'){
            track_language = item.track.language.substr(0,2);
            if (track_language === browser_language) {
              item.track.mode = "showing";
            }
            else {
              item.track.mode = "disabled";
            }
          }

        });
      });

});
