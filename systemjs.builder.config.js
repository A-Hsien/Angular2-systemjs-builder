var Builder = require('systemjs-builder');

var packages = {};
var packageNames = [
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/http',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router-deprecated',
  '@angular/upgrade',
];

packageNames.forEach(function(pkgName) {
  packages[pkgName] = { main: 'index.js' };
});

var builder = new Builder({
  baseURL: '/node_modules',
  defaultJSExtensions: true,
  packages: packages
});

packageNames.forEach(function(pkgName) {
  builder.bundle(pkgName, 'assets/'+ pkgName+'.js')
    .then(function() {
      console.log(pkgName+'Build complete');
    })
    .catch(function(err) {
      console.log(pkgName+'Build error');
      console.log(err);
    });
});
