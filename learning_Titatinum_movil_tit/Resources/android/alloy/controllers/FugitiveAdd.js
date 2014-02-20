function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FugitiveAdd";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.fugitiveAddWindow = Ti.UI.createWindow({
        id: "fugitiveAddWindow"
    });
    $.__views.fugitiveAddWindow && $.addTopLevelView($.__views.fugitiveAddWindow);
    $.__views.name_tf = Ti.UI.createTextField({
        id: "name_tf"
    });
    $.__views.fugitiveAddWindow.add($.__views.name_tf);
    $.__views.save_button = Ti.UI.createButton({
        id: "save_button"
    });
    $.__views.fugitiveAddWindow.add($.__views.save_button);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.save_button.addEventListener("click", function() {
        $webview.open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;