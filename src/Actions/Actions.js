const axios = require('axios');

export default {
    logIn() {
        console.log('logging in');
        return 'hello';
    },
    getEvents(event) {
        return axios.get('https://api.foursquare.com/v2/venues/search', {
          params: {
            client_id: 'ZRQVDH3VBZTV5KZ5DWB0MYVPEIBKZSAXDAMBQ1ZKNKORVYQI',
            client_secret: 'FDWI4CDHMIKZ5DAQUVWB3AGEEPWE2LO3TM2PT2SNAWOLPW4H',
            near: '85234',
            query: event,
            v: '20180323',
            limit: 3
          }
        })
    },
};