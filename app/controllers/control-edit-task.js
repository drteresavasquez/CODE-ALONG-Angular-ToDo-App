"use strict";

/*
    
    handle data and provide functionality to edit a task

 */

app.controller("editTaskCtrl", function ($scope, todoFactory, $routeParams, $location) {

    $scope.title = "Edit Task";
    $scope.submitButtonText = "Edit Item";

    $scope.task = {
        assignedTo: "",
        dependencies: "",
        dueDate: "",
        urgency: "",
        task: "",
        inCompleted: ""
    };
    const showEditTask = function () {
        todoFactory.getSingleTask($routeParams.itemId)
            .then((data) => {
                console.log("data", data);
                $scope.task = data;
                $scope.task.id = $routeParams.itemId;
            });
    };

    $scope.submitTask = function () {
        todoFactory.editTask($routeParams.itemId, $scope.task)
        .then((data)=>{
            //$location allows to change URL path
            $location.path("/task-list");
        });

    };


    showEditTask();
});