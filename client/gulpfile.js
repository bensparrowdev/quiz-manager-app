const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

function buildStyles() {
	return src('./src/styles/sass/styles.scss')
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(autoprefixer())
		.pipe(rename({ suffix: '.min' }))
		.pipe(dest('./src/styles/css'));
}

function watchTask() {
	watch(['./src/styles/sass/**'], buildStyles);
}

exports.default = series(buildStyles, watchTask);

//run "gulp" in the CLI to compile Sass into minified CSS
