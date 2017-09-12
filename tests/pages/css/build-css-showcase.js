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

function escapeHtml (string) {
  let entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
    return entityMap[s];
  });
}

// Register a custom helper
handlebars.registerHelper('include', (filepath)  => {
  let html = fs.readFileSync(filepath, 'utf8');
return html.trim();
} );

// Register a custom helper
handlebars.registerHelper('template', (filepath)  => {
  let html = '<pre class="prettyprint lang-html">';
html = html + escapeHtml(fs.readFileSync(filepath, 'utf8').trim());
html = html + "</pre>";
console.log(html)
return html;
} );

// Register a custom helper
handlebars.registerHelper('code', (filepath, filetype)  => {
  let langClass = typeof filetype === 'string' ? ' lang-'+filetype : '';
let html = '<pre class="prettyprint'+ langClass +'">';
html = html + fs.readFileSync(filepath, 'utf8').trim();
html = html + "</pre>";
console.log(html)
return html;
} );

const showcasePath = 'tests/pages/css';
const distPath = 'dist/tests/css';

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
