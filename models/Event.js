const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const f = require("util").format;

const url = "mongodb://localhost:27017";

const dbName = "turntly";

const Event = {
	createNewEvent: function(name, location, startTime, endTime, host_user_id, cb)
	{
		if(name === null || location === null || startTime === null || startTime === null || endTime == null || host_user_id === null)
		{
			cb(new Error("input null"), 0, null);
		}
		else
		{
			MongoClient.connect(url, function(err, client){
				assert.equal(null, err);
                console.log("Connected correctly to server, creating new event");

                const db = client.db(dbName);

                db.collection("Events").insertOne({ "name": name, "location": location, "starttime":startTime, "endtime":endTime, "host_user_id":host_user_id}, function(err, r) {
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

	findEventsStartingLaterThan: function(time, cb){
		if(time === null)
		{
			cb(new Error("time === null"), 0, null);
		}
		else
		{
			MongoClient.connect(url, function(err, client) {
                assert.equal(null, err);
                console.log("Connected correctly to server, getting events by startTime");

                const db = client.db(dbName);

                db.collection("Events").find({ "starttime":{$gt: time}}).limit(10).toArray(function(err, docs) {
                    if (err !== null) {
                    	client.close();
                    	cb(new Error("find failed, startTime " + startTime + " might not exist"), 1, null);
                    } else {
                        client.close();
                        cb(null, -1, docs);
                    }
                });
            });
		}
	},

	findEventsStartingLaterThan: function(time, cb){
		if(time === null)
		{
			cb(new Error("time === null"), 0, null);
		}
		else
		{
			MongoClient.connect(url, function(err, client) {
                assert.equal(null, err);
                console.log("Connected correctly to server, getting events by startTime");

                const db = client.db(dbName);

                db.collection("Events").find({ "starttime":{$lt: time}}).limit(10).toArray(function(err, docs) {
                    if (err !== null) {
                    	client.close();
                    	cb(new Error("find failed, startTime " + startTime + " might not exist"), 1, null);
                    } else {
                        client.close();
                        cb(null, -1, docs);
                    }
                });
            });
		}
	}
};

module.exports = Event;