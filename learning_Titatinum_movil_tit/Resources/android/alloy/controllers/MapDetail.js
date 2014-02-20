function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MapDetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.mapWindow = Ti.UI.createWindow({
        title: "Captured Location",
        barColor: "#6d0a0c",
        backgroundColor: "#fff",
        id: "mapWindow"
    });
    $.__views.mapView = Alloy.Globals.Map.createView({
        mapType: Alloy.Globals.Map.NORMAL_TYPE,
        animate: true,
        regionFit: true,
        userLocation: false,
        ns: "Alloy.Globals.Map",
        id: "mapView"
    });
    $.__views.mapWindow.add($.__views.mapView);
    $.__views.MapDetail = Ti.UI.createTab({
        window: $.__views.mapWindow,
        title: "map",
        id: "MapDetail"
    });
    $.__views.MapDetail && $.addTopLevelView($.__views.MapDetail);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.mapView.setRegion({
        latitude: "41 24.2028",
        longitude: "2 10.4418",
        latitudeDelta: .1,
        longitudeDelta: .1
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;