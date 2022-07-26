require('dotenv').config();

const axios = require('axios');

const key = process.env.CELLCAST_KEY;

axios.post('https://cellcast.com.au/api/v3/send-sms', {
      sms_text: 'Hi this is a test text message',
      numbers: ['+61411725474']
}, {
      headers: {
            APPKEY: key
      }
}).then(res => {
      console.log(res);
})