function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tab2";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win1 = Ti.UI.createWindow({
        id: "win1"
    });
    $.__views.__alloyId15 = Ti.UI.createLabel({
        text: "hola en  el  tab2",
        id: "__alloyId15"
    });
    $.__views.win1.add($.__views.__alloyId15);
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.win1,
        id: "tab1",
        title: "Tab 2"
    });
    $.__views.tab1 && $.addTopLevelView($.__views.tab1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;