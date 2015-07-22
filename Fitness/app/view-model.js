var observable = require("data/observable");
var appSettings = require("application-settings");
var dialogs = require("ui/dialogs");

var NAME = "settings-name";
var HEIGHT = "settings-height";
var WEIGHT = "settings-weight";
var VIBRATE = "settings-vibrate";
var SOUND = "settings-sound";
var SOUND_VOLUME = "settings-sound-value";

var settings = new observable.Observable();
Object.defineProperty(settings, "name", {
   get: function () { return appSettings.getString(NAME, "John Doe"); },
   set: function (value) { appSettings.setString(NAME, value); },
   enumerable: true,
   configurable: true
});

Object.defineProperty(settings, "height", {
   get: function () { return appSettings.getString(HEIGHT, "180"); },
   set: function (value) { appSettings.setString(HEIGHT, value); },
   enumerable: true,
   configurable: true
});

Object.defineProperty(settings, "weight", {
   get: function () { return appSettings.getString(WEIGHT, "80"); },
   set: function (value) { appSettings.setString(WEIGHT, value); },
   enumerable: true,
   configurable: true
});

Object.defineProperty(settings, "vibrateEnabled", {
   get: function () { return appSettings.getBoolean(VIBRATE, true); },
   set: function (value) { appSettings.setBoolean(VIBRATE, value); },
   enumerable: true,
   configurable: true
});

Object.defineProperty(settings, "soundEnabled", {
   get: function () { return appSettings.getBoolean(SOUND, true); },
   set: function (value) { appSettings.setBoolean(SOUND, value); },
   enumerable: true,
   configurable: true
});

Object.defineProperty(settings, "soundVolume", {
   get: function () { return appSettings.getNumber(SOUND_VOLUME, 100); },
   set: function (value) { appSettings.setNumber(SOUND_VOLUME, value); },
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
