const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const f = require("util").format;

const url = "mongodb://localhost:27017";

const dbName = "turntly";

const User = {
    createNewUser: function(id, username, cb) {
        if (id === null || username === null) {
            cb(new Error("id or username === null"), 0, null);
        } else {
            MongoClient.connect(url, function(err, client) {
                assert.equal(null, err);
                console.log("Connected correctly to server, creating new user");

                const db = client.db(dbName);

                db.collection("Users").insertOne({ "_id": id, "username": username }, function(err, r) {
                    if (err !== null) {
                        client.close();
                        cb(new Error("insert failed, id " + id + " already exists"), 1, null);
                    } else {
                        assert.equal(1, r.insertedCount);
                        client.close();
                    }
                });
            });
        }
    },

    setUserToken: function(id, token, cb) {
        if (id === null || token === null) {
            cb(new Error("id or token === null"), 0, null);
        } else {
            MongoClient.connect(url, function(err, client) {
                assert.equal(null, err);
                console.log("Connected correctly to server, setting user token");

                const db = client.db(dbName);

                db.collection("Users").updateOne({ _id: id }, { $set: { "token": token } }, function(err, r) {
                    if (err !== null) {
                    	client.close();
                        cb(new Error("insert failed, id " + id + " might not exist"), 1, null);
                    } else {
                        assert.equal(1, r.matchedCount);
                        //assert.equal(1, r.modifiedCount);
                        client.close();
                    }
                });
            });
        }
    },

    getUserByToken: function(token, cb) {
        if (token === null) {
            cb(new Error("token === null"), 0, null);
        } else {
            MongoClient.connect(url, function(err, client) {
                assert.equal(null, err);
                console.log("Connected correctly to server, getting user by token");

                const db = client.db(dbName);

                db.collection("Users").find({ "token": token }).limit(1).toArray(function(err, docs) {
                    if (err !== null) {
                    	client.close();
                    	cb(new Error("find failed, token " + token + " might not exist"), 1, null);
                    } else {
                        assert.equal(1, docs.length);
                        client.close();
                        cb(null, -1, docs[0]);
                    }
                });
            });
        }
    }
};

module.exports = User;