exports.definition = {
    config: {
        columns: {
            name: "text",
            captured: "integer",
            url: "text",
            capturedLat: "real",
            capturedLong: "real"
        },
        defaults: {
            name: "",
            captured: 0,
            url: "",
            capturedLat: "",
            capturedLong: ""
        },
        adapter: {
            type: "sql",
            collection_name: "users_Coll"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("users", exports.definition, []);

collection = Alloy.C("users", exports.definition, model);

exports.Model = model;

exports.Collection = collection;