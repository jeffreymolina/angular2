/// <binding ProjectOpened='watch' />
var gulp = require("gulp"),
plugins = require('gulp-load-plugins')(),
scriptsDir = './',
scriptsSrcDir = scriptsDir + 'src/',
allTypeScript = scriptsSrcDir + '**/*.ts',
tsProject = plugins.typescript.createProject(scriptsDir + "tsconfig.json");

function compileTs() {
    return gulp.src([
        allTypeScript])
        .pipe(plugins.plumber({
            errorHandler: plugins.notify({ message: "TS compilation failed" })
        }))
        .pipe(plugins.tslint()).pipe(plugins.tslint.report('prose'))
        .pipe(plugins.inlineNg2Template({ base: scriptsSrcDir + '/app', useRelativePaths: true }))
        .pipe(plugins.typescript(tsProject), { typescript: require('typescript') })
        .pipe(gulp.dest(scriptsSrcDir));
}

gulp.task("compile-ts", function () {
    return compileTs();
});

gulp.task('watch', ['compile-ts'], function () {
    gulp.watch([allTypeScript, scriptsSrcDir + '**/*.html'], ['compile-ts']);
});

gulp.task('watch', ['compile-ts'], function () {
    gulp.watch([allTypeScript, scriptsSrcDir + '**/*.html'], ['compile-ts']);
});


gulp.task('default', ['compile-ts']);

