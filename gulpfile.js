var gulp = require('gulp'),
  sass = require('gulp-sass'),
  styleModules = require('gulp-style-modules'),
  path = require('path');

var config = {
  'componentsFolder': 'polymer_components'
};

/**
 * compile sass to css → *-styles.html.
 */
gulp.task('compile-sass', function() {

  return gulp.src(path.join(config.componentsFolder + '/**/*.scss'))
    .pipe(
      sass()
      .on('error', sass.logError)
    )
    .pipe(styleModules())
    .pipe(gulp.dest(path.join(config.componentsFolder)));
});


/**
 * watch for changes in scss files and call 'compile-sass' if one is detected
 */
gulp.task('watch', function() {
  gulp.watch(
    [ path.join(config.componentsFolder + '/**/*.scss') ], [ 'compile-sass' ]
  )
  .on('change', function(e) {
    console.log('Resource file ' + e.path + ' has been changed. Updating.');
    if (e.type === 'deleted') {
     console.log('Resource file ' + e.path + ' has been deleted.');
  	}
  });
});

/**
 * initiates compiling of scss to css and initiates the watch task to check for file-changes in *.scss
 */
gulp.task('sass-compile-and-watch', [ 'compile-sass', 'watch' ]);