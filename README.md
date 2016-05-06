# Angular2-systemjs-builder

This repo is fork from [angular/quickstart](https://github.com/angular/quickstart),

sometimes we don't want our application to load all @angular or other modules individually at run-time.
so this project is a demo for using [systemjs/builder](https://github.com/systemjs/builder) to build @angular libs at design-time.


## How to run it

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone https://github.com/A-hsien/Angular2-systemjs-builder my-proj
cd my-proj
```

restore npm packages.

```bash
npm install
```

run "systemjs.builder" to build @angular libs.

```bash
node systemjs.builder.config.js
```

you should see the following messages show on console.

```bash
@angular/coreBuild complete
@angular/httpBuild complete
@angular/commonBuild complete
@angular/platform-browserBuild complete
@angular/router-deprecatedBuild complete
@angular/compilerBuild complete
@angular/platform-browser-dynamicBuild complete
@angular/upgradeBuild complete
```

now everything is ready to run!

```bash
npm start
```

## detail info

the setting of systemjs-builder

```javascript
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
```
and modify the "systemjs.config.js".

```javascript
var map = {
    'app':                        'app', // 'dist',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js'},
    'angular2-in-memory-web-api': { },
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js' };
  });

  var config = {
    defaultJSExtensions: true,
    map: map,
    packages: packages
  }

  System.config(config);
```
