// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function(req, res) {
  res.json({ greeting: 'hello API' });
});

new Date(1451001600000 / 1000);
new Date(1451001600000 / 1000);
// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get('/api/:date?', (req, res) => {
  if (req.params.date) {
    let rdate;
    let regexdate = /\d\d\d\d-\d\d-\d\d/
    let regexdigits = /^[0-9]*$/
    if (regexdate.test(req.params.date)) {
      rdate = new Date(req.params.date);
      res.json({ unix: rdate.getTime(), utc: rdate.toUTCString() })
    } else if (regexdigits.test(req.params.date)) {
      rdate = new Date(parseInt(req.params.date));
      res.json({ unix: rdate.getTime(), utc: rdate.toUTCString() })
    } else {
      let rdate = new Date(req.params.date);
      if(rdate){
        res.json({ error: "Invalid Date" });
      } else {
        res.json({ unix: rdate.getTime(), utc: rdate.toUTCString() })
      }
    }
  } else {
    let rdate = new Date()
    res.json({ unix: rdate.getTime(), utc: rdate.toUTCString() });
  }
})
