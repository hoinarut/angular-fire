// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBdWgyk6kPjrkToqmkwhROSdTrhI7IbojI',
    authDomain: 'ng-fitness-tracker-94bec.firebaseapp.com',
    databaseURL: 'https://ng-fitness-tracker-94bec.firebaseio.com',
    projectId: 'ng-fitness-tracker-94bec',
    storageBucket: 'ng-fitness-tracker-94bec.appspot.com',
    messagingSenderId: '277941410039'
  }
};