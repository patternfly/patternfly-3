/* eslint-env node */
/* eslint no-console: 0 strict: 0 */
'use strict';

let fs = require('mz/fs'),
  jekyll = require('./jekyll');

function build () {
  fs.mkdir('dist/tests/', function (err) {
    if (err) {
      if (err.code !== 'EEXIST') {
        throw new Error(err);
      }
    }
  });

  console.log('Starting build...');
  return jekyll.readSiteConfig()
  .then(site => {
    // read and cache the pages
    console.log('Reading test pages...');
    return jekyll.readTemplateFolder('tests/pages')
    .then(pages => {
      site.pages = pages;
      return site;
    });
  })
  .then(site => {
    // read and cache the layouts
    return jekyll.readTemplateFolder('tests/pages/_layouts')
    .then(layouts => {
      site._layouts = {};
      layouts.forEach(layout => {
        site._layouts[layout.filename] = layout;
      });
      return site;
    });
  })
  .then(site => {
    // render and write the pages
    let promises = [];
    site.pages.forEach(page => {
      let context = {
        site: site,
        page: page
      };
      promises.push(
        jekyll.renderTemplate(page, context)
        .then(context => fs.writeFile(`dist/tests/${context.page.filename}`, context.content))
        .then(x => page.url)
      );
    });
    return Promise.all(promises);
  })
  .then(result => {
    console.log(`${result.length} pages created.`);
  }, err => {
    console.error(err);
    console.log(err.stack);
    throw (err);
  });
}

module.exports = {
  build: build
};
