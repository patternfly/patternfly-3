#!/usr/bin/env node
'use strict';

var Rx = require('rxjs/Rx'),
    fs = require('fs'),
    path = require('path'),
    handlebars = require('handlebars'),
    helpers = require('handlebars-helpers')(),
    readdir = Rx.Observable.bindNodeCallback(fs.readdir),
    readFile = Rx.Observable.bindNodeCallback(fs.readFile),
    writeFile = Rx.Observable.bindNodeCallback(fs.writeFile),
    mkdir = Rx.Observable.bindNodeCallback(fs.mkdir),
    exists = Rx.Observable.bindCallback(fs.exists);

// Register a custom helper
handlebars.registerHelper('code', (filepath, filetype)  => {
  let langClass = typeof filetype === 'string' ? ' lang-'+filetype : '';
  let out = '<pre class="prettyprint'+ langClass +'">';
  out = out + fs.readFileSync(filepath);
  out = out + "</pre>";
  return out;
} );

const showcasePath = 'tests/pages/jquery';
const distPath = 'dist/tests/jquery';

mkdir(distPath)
.catch(error => error.code === 'EEXIST' ? Rx.Observable.of(true) : Rx.Observable.throw(error))
mkdir(distPath + '/src')
.catch(error => error.code === 'EEXIST' ? Rx.Observable.of(true) : Rx.Observable.throw(error))
.switchMap(() => readdir(showcasePath))
.mergeMap(array => array)
.filter(filename => path.extname(filename) === '.hbs')
.mergeMap(filename => {
  return readFile(showcasePath + '/' + filename, 'utf8')
  .map(function(template) {
    var hbs = handlebars.compile(template);
    var data = {
      message : 'Hello World!'
    }
    var html = hbs(data);
    return html;
  })
  .map(html => ({
    html: html,
    path: distPath,
    filename: filename.replace(/\.hbs$/, '.html')
  }))
})
.flatMap(result => writeFile(`${result.path}/${result.filename}`, result.html)
  .map(() => `${result.path}/${result.filename}`)
)
.subscribe(result => {
  console.log(result);
}, error => {
  console.error(error);
  throw error
});
