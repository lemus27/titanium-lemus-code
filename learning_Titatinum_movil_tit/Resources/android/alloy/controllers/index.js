function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId1 = [];
    $.__views.__alloyId2 = Alloy.createController("tab1", {
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId3 = Alloy.createController("tab2", {
        id: "__alloyId3"
    });
    __alloyId1.push($.__views.__alloyId3.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId4 = Alloy.createController("webview", {
        id: "__alloyId4"
    });
    __alloyId1.push($.__views.__alloyId4.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId6 = Alloy.createController("MapDetail", {
        id: "__alloyId6"
    });
    __alloyId1.push($.__views.__alloyId6.getViewEx({
        recurse: true
    }));
    $.__views.tabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId1,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.API.info("seeded: " + Ti.App.Properties.hasProperty("seeded"));
    if (Ti.App.Properties.hasProperty("seeded")) $.tabGroup.open(); else {
        var xhr = Titanium.Network.createHTTPClient();
        xhr.onload = function() {
            Ti.API.info("got data from the network: " + this.responseText);
            var names = JSON.parse(this.responseText);
            for (var i = 0, j = names.length; j > i; i++) {
                var criminal = Alloy.createModel("users", {
                    name: names[i].name
                });
                criminal.save();
            }
            Ti.App.Properties.setString("seeded", "yuppers");
            Alloy.Collections.Fugitives.fetch();
        };
        xhr.open("GET", "http://bountyhunterapp.appspot.com/bounties");
        xhr.send();
        $.tabGroup.open();
    }
    Alloy.Collections.users.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;