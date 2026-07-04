const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
let dir = __dirname;
if (fs.existsSync(path.join(__dirname, 'ilikeitdeep-EASY'))) {
  dir = path.join(__dirname, 'ilikeitdeep-EASY');
}
app.use(express.static(dir));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('ilikeitdeep live'));
