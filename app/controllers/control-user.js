"use strict";

app.controller("userCtrl", function ($scope, $window, userFactory, $location) {

    console.log("Yo! The userCtrl is loaded!");

    $scope.loginGoogle = () => {
        console.log("you clicked on google login");

        userFactory.authWithProvider()
        .then((result) =>{
            let user = result.user.uid;
            $location.path("/task-list");
            //$scope.apply???
            $scope.apply();
        }).catch((error)=>{
            console.log("error with google login, yo!");
            let errorCode = error.code;
            let errorMessage = error.message;
        });

    };
});