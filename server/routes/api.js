const express = require('express');
const router = express.Router();
const api_key = 'your mailgun api key';
const domain = 'your domain';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
const data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: ['receiver email address here'],
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