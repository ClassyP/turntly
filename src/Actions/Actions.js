const axios = require('axios');

export default {
    logIn() {
        console.log('logging in');
        return 'hello';
    },
    getEvents(event, location) {

        return axios.get('https://api.foursquare.com/v2/venues/search', {
          params: {
            client_id: 'ZRQVDH3VBZTV5KZ5DWB0MYVPEIBKZSAXDAMBQ1ZKNKORVYQI',
            client_secret: 'FDWI4CDHMIKZ5DAQUVWB3AGEEPWE2LO3TM2PT2SNAWOLPW4H',
            near: location,
            query: event,
            v: '20180323',
            limit: 9
          }
        });

    },
    getImages(venueId) {
        //https://api.foursquare.com/v2/venues/43695300f964a5208c291fe3/photos?&oauth_token=CC4ERXRL3WNKECMEMQPCLINEDZ4P5EXCSIYB01NHFB45YD2E&v=20180411
        return axios.get('https://api.foursquare.com/v2/venues/' + venueId + '/photos', {
          params: {
            client_id: 'ZRQVDH3VBZTV5KZ5DWB0MYVPEIBKZSAXDAMBQ1ZKNKORVYQI',
            client_secret: 'FDWI4CDHMIKZ5DAQUVWB3AGEEPWE2LO3TM2PT2SNAWOLPW4H',
            //near: '85234',
            //query: event,
            v: '20180323',
            limit: 3
          }
        });
    }
};