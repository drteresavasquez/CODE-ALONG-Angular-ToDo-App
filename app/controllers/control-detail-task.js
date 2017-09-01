"use strict";

/*
    
    handle data for detail view

 */

app.controller("detailTaskCtrl", function ($scope, $routeParams, todoFactory) {

    console.log("itemId", $routeParams.itemId);
    const showTask = function () {
        todoFactory.getSingleTask($routeParams.itemId)
            .then((data) => {
                $scope.task = data;
                $scope.task.id = $routeParams.itemId;
            });
    };

    showTask();
});