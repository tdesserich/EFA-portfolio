# Eleven Fifty Starter Portfolio
This is a starter repo to help students get started on building a Bootstrap template. 

## Branches
This repo is broken into branches so that students can see a front end starter project get built over time. 
 
 * [master](https://github.com/ElevenfiftyAcademy/JavaScript-151-PortfolioStarter) - The most up to date version of the code.
 * [module-1-setup](https://github.com/ElevenfiftyAcademy/JavaScript-151-PortfolioStarter/tree/module-1-setup) - Just getting some things started in the project.
 * [module-2-gulp](https://github.com/ElevenfiftyAcademy/JavaScript-151-PortfolioStarter/tree/module-2-gulpsetup) - Set up Gulp for easy reload of html.

## npm commands
If you build this from scratch without using the package.json file to load everything, you'll need to run these commands.
- `npm init` This will create a package.json file that manages all your dependencies.
- `npm install browser-sync --save-dev` Installs browsersync for easy reloading of the browswer when things change.
- `npm install gulp gulp-clean-css gulp-filter gulp-header gulp-rename gulp-sass gulp-uglify gulp-watch --save-dev`  - Install gulp needs. See the notes on Gulp.
- `npm install bootstrap --save` Install Bootstrap into your Node Modules folder.
- `npm install jquery --save` Install jQuery into node modules.
- `npm install font-awesome --save` Install jQuery into node modules.

## Current Gulp Tasks
- `gulp serve` uses browserSync & opens a project in the browser. Reloads when you save.

 * [BrowserSyncDocs](https://www.browsersync.io/docs/gulp) - Check out the Browser Sync docs here. 
 * [Good beginner info on Gulp:](https://css-tricks.com/gulp-for-beginners/) - Gulp is a great tool that takes a little time to learn, but saves a lot of time in the end. 
