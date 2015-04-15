var observable = require("data/observable");
var localSettings = require("local-settings");
var dialogs = require("ui/dialogs");

var NAME = "settings-name";
var HEIGHT = "settings-height";
var WEIGHT = "settings-weight";
var VIBRATE = "settings-vibrate";
var SOUND = "settings-sound";
var SOUND_VOLUME = "settings-sound-value";

var settings = new observable.Observable();
Object.defineProperty(settings, "name", {
   get: function () { return localSettings.getString(NAME, "John Doe"); },
   set: function (value) { localSettings.setString(NAME, value); },
   enumerable: true,
   configurable: true
});

Object.defineProperty(settings, "height", {
   get: function () { return localSettings.getString(HEIGHT, "180"); },
   set: function (value) { localSettings.setString(HEIGHT, value); },
   enumerable: true,
   configurable: true
});

Object.defineProperty(settings, "weight", {
   get: function () { return localSettings.getString(WEIGHT, "80"); },
   set: function (value) { localSettings.setString(WEIGHT, value); },
   enumerable: true,
   configurable: true
});

Object.defineProperty(settings, "vibrateEnabled", {
   get: function () { return localSettings.getBoolean(VIBRATE, true); },
   set: function (value) { localSettings.setBoolean(VIBRATE, value); },
   enumerable: true,
   configurable: true
});

Object.defineProperty(settings, "soundEnabled", {
   get: function () { return localSettings.getBoolean(SOUND, true); },
   set: function (value) { localSettings.setBoolean(SOUND, value); },
   enumerable: true,
   configurable: true
});

Object.defineProperty(settings, "soundVolume", {
   get: function () { return localSettings.getNumber(SOUND_VOLUME, 100); },
   set: function (value) { localSettings.setNumber(SOUND_VOLUME, value); },
   enumerable: true,
   configurable: true
});

settings.promptName = function(args) {
    console.log("in promptName");
    dialogs.prompt("Enter your name:", settings.name).then(function (promptResult) {
        console.log("prompt result:" + promptResult.result);
        if (promptResult.result) {
            settings.set("name", promptResult.text);
        }
    });
}
exports.settingsViewModel = settings;
