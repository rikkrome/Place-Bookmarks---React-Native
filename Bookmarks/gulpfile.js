const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task(
  'ios',
  shell.task([
    'echo Running {react-native run-ios} ...',
    // 'react-native run-ios',
    'react-native run-ios --simulator="iPhone X"',
  ])
);
gulp.task(
  'clear',
  shell.task([
    'echo Running {clear} ...',
    'echo removing build from iOS...',
    'rm -r ios/build',
    'echo removed build from iOS...',
  ])
);
gulp.task('rebuild', ['clear', 'ios']);