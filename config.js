(function(global) {
  var ngVer = '@2.0.0-rc.3'; // lock in the angular package version; do not let it float to current!
  var routerVer = '@3.0.0-alpha.7'; // lock router version
  var formsVer = '@0.1.1'; // lock forms version
  //map tells the System loader where to look for things
  var  map = {
    'app':                        'app',
    '@angular':                   'https://npmcdn.com/@angular', 
    '@angular/router':            'https://npmcdn.com/@angular/router' + routerVer,
    '@angular/forms':             'https://npmcdn.com/@angular/forms' + formsVer,
    'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api', 
    'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',
    'ts':                         'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
    'typescript': 'https://npmcdn.com/typescript@1.9.0-dev.20160409/lib/typescript.js'
 };
  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'app',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router-deprecated',
    'upgrade',
  ];
  // Add map entries for each angular package
  // only because we're pinning the version with `ngVer`.
  ngPackageNames.forEach(function (pkgName) {
      if (pkgName == 'router-deprecated') {
          map['@angular/' + pkgName] = 'https://npmcdn.com/@angular/' + pkgName + '@2.0.0-rc.2';
      }
      else {
          map['@angular/' + pkgName] = 'https://npmcdn.com/@angular/' + pkgName + ngVer;
      }
  });
  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {    
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  });
  packages['@angular/router'] = { main: 'app.js', defaultExtension: 'js' };
  packages['@angular/forms'] = { main: 'app.js', defaultExtension: 'js' };
  var config = {          
    typescriptOptions: {
        tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    map: map,
    packages: packages
  };
  System.config(config);
})(this);