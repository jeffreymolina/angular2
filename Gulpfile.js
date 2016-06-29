/// <binding ProjectOpened='watch' />
var gulp = require("gulp"),
plugins = require('gulp-load-plugins')(),
tsProject = plugins.typescript.createProject('./tsconfig.json');

function compileTs() {
    return gulp.src(['./app**/*.ts'])
        .pipe(plugins.plumber({
            errorHandler: plugins.notify({ message: "TS compilation failed" })
        }))
        .pipe(plugins.tslint()).pipe(plugins.tslint.report('prose'))
        .pipe(plugins.inlineNg2Template({ base: './app/', useRelativePaths: true }))
        .pipe(plugins.typescript(tsProject), { typescript: require('typescript')})
        .pipe(gulp.dest('./'));
}

gulp.task("compile-ts", function () {
    return compileTs();
});

gulp.task('watch', ['compile-ts'], function () {
    gulp.watch(['./app**/*.ts', './app**/*.html'], ['compile-ts']);
});

gulp.task('default', ['compile-ts']);

