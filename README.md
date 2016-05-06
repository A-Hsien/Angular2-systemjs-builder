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
