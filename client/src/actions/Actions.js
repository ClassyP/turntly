import { foursquare } from '../keys.js';
//require('dotenv').config();
const request = require('request');
//const keys = require('../keys.js');



export default {
    logIn() {
        console.log('logging in');
        return 'hello';
    },
    getEvents(event) {
        request({
          url: 'https://api.foursquare.com/v2/venues/explore',
          method: 'GET',
          qs: {
            client_id: 'ZRQVDH3VBZTV5KZ5DWB0MYVPEIBKZSAXDAMBQ1ZKNKORVYQI',
            client_secret: 'FDWI4CDHMIKZ5DAQUVWB3AGEEPWE2LO3TM2PT2SNAWOLPW4H',
            near: '40.7243,-74.0018',
            query: event,
            v: '20180323',
            limit: 1
          }
        }, function(err, res, body) {
          if (err) {
            console.error(err);
          } else {
            console.log(body);
          }
        });
    },
};