const path = require('path');
const express = require('express');
const app = express();
const publicDir = path.join(__dirname, '../../dist/tests');
const assetsDir = path.join(__dirname, '../../dist');

module.exports = {
  start () {
    return new Promise((resolve, reject) => {
      try {
        app.use('/dist', express.static(assetsDir));
        app.use('/', express.static(publicDir));

        app.listen(4200, function () {
          resolve(this);
        });
      } catch (err) {
        reject(err);
      }
    })
  }
}
