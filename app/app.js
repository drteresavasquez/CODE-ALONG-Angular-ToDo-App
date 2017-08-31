"use strict";
console.log("App, yo!");

const app = angular.module("TodoApp", ["ngRoute"]);

app.config(($routeProvider) =>{
    $routeProvider
    .when('/', {
        templateUrl: 'partials/list.html',
        controller: 'listCtrl'
    })
    //: tells it that what's coming is dynamic
    .when('/task/:itemId', {
        templateUrl: 'partials/details.html',
        controller: 'detailTaskCtrl'
    })
    .otherwise('/');
});
//forces something to run whenthe app initially starts up
app.run(($location, FBCreds)=>{
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };
    firebase.initializeApp(authConfig);
});