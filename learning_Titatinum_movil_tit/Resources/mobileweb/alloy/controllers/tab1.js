function Controller() {
    function __alloyId14(e) {
        if (e && e.fromAdapter) return;
        __alloyId14.opts || {};
        var models = __alloyId13.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId8 = models[i];
            __alloyId8.__transform = {};
            var __alloyId9 = Ti.UI.createTableViewRow({
                model: "undefined" != typeof __alloyId8.__transform["alloy_id"] ? __alloyId8.__transform["alloy_id"] : __alloyId8.get("alloy_id")
            });
            rows.push(__alloyId9);
            var __alloyId11 = Ti.UI.createView({});
            __alloyId9.add(__alloyId11);
            var __alloyId12 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId8.__transform["name"] ? __alloyId8.__transform["name"] : __alloyId8.get("name")
            });
            __alloyId11.add(__alloyId12);
        }
        $.__views.tableView1.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tab1";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("users");
    $.__views.win1 = Ti.UI.createWindow({
        id: "win1"
    });
    $.__views.__alloyId7 = Ti.UI.createLabel({
        text: "hola ene l tab 1",
        id: "__alloyId7"
    });
    $.__views.win1.add($.__views.__alloyId7);
    $.__views.tableView1 = Ti.UI.createTableView({
        backgroundColor: "transparent",
        id: "tableView1"
    });
    $.__views.win1.add($.__views.tableView1);
    var __alloyId13 = Alloy.Collections["users"] || users;
    __alloyId13.on("fetch destroy change add remove reset", __alloyId14);
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.win1,
        id: "tab1",
        title: "Tab 1"
    });
    $.__views.tab1 && $.addTopLevelView($.__views.tab1);
    exports.destroy = function() {
        __alloyId13.off("fetch destroy change add remove reset", __alloyId14);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;