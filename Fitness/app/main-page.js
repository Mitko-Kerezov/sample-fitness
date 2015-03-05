var vmModule = require("./view-model");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.settingsViewModel;
}
exports.pageLoaded = pageLoaded;
