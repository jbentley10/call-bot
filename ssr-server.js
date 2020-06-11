const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
  const server = express()
    
  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')

    // Do Twilio stuff
    const accountSid = 'ACd80aa495ae4744b3ad39429a1ea29a80';
    const authToken = 'ddf6504dcef3a2d1d4d752222f627c63';
    const client = require('twilio')(accountSid, authToken);

    client.calls
      .create({
        twiml: '<Response><Say>Hey, please stop killing black folks.</Say></Response>',
        to: '+17605324516',
        from: '+12055512723'
      })
      .then(call => console.log(call.sid));
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})