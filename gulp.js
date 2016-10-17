var gulp  = require('gulp')
var shell = require('gulp-shell')

gulp.task('example', function () {
  return gulp.src('*.js', {read: false})
    .pipe(shell([
      'echo <%= f(file.path) %>',
      'ls -l <%= file.path %>'
    ], {
      templateData: {
        f: function (s) {
          return s.replace(/$/, '.bak')
        }
      }
    }))
})

gulp.task('build',shell.task([
    'jar cp ./phpldapadmin-1.2.3 ./explodedJavabridgeWar'
    'jar -cvf phpldapAdminBridge.war ./explodedJavabridgeWar'
]))

gulp.task('setup',function(){

})
