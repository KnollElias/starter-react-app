
const express = require('express')
const path = require("path");
const app = express()
const cors = require('cors');

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use(cors({origin:['http://16.16.168.18:8080']}))
app.use(express.static('build', options))
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`)
})
