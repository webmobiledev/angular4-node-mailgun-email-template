const express = require('express');
const router = express.Router();
const api_key = 'key-583ea1856efda5099f507041824add05';
const domain = 'sandbox65984937cae740f1a8115db6d66771f2.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
const data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'dragon.blue128@yandex.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};
 
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/post', (req, res) => {
  data.to = req.body.recipient;
  data.subject = req.body.subject;
  data.text = req.body.body;

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
});

module.exports = router;