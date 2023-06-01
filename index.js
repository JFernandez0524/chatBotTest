import 'dotenv/config';
import axios from 'axios';

axios
  .get('https://api.chatbot.com/v2/stories', {
    headers: {
      Authorization: 'Bearer ' + process.env.ACCESS_TOKEN,
    },
  })
  .then((response) => console.log(JSON.stringify(response.data)));
