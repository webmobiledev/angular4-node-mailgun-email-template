const express = require('express');
const router = express.Router();
const api_key = 'key-583ea1856efda5099f507041824add05';
const domain = 'sandbox65984937cae740f1a8115db6d66771f2.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
const data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: ['valter428@zoho.eu'],
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};
 
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/post', (req, res) => {
  data.from = req.body.sender;
  data.subject = req.body.subject;
  data.text = req.body.body;

  mailgun.messages().send(data, {'content-type': 'text/html'}, function (error, body) {
    res.send(body);
  });
});

module.exports = router;