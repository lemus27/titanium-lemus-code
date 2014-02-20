function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "webview";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId16 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "__alloyId16"
    });
    $.__views.entryView = Alloy.createController("entryView", {
        width: Ti.UI.FILL,
        height: "25%",
        top: 0,
        backgroundColor: "#fff",
        id: "entryView",
        __parentSymbol: $.__views.__alloyId16
    });
    $.__views.entryView.setParent($.__views.__alloyId16);
    $.__views.graphView = Ti.UI.createWebView({
        width: Ti.UI.FILL,
        height: "75%",
        top: "25%",
        backgroundColor: "#fff",
        url: "/graph.html",
        id: "graphView"
    });
    $.__views.__alloyId16.add($.__views.graphView);
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.__alloyId16,
        id: "tab1",
        title: "Tab 3"
    });
    $.__views.tab1 && $.addTopLevelView($.__views.tab1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;