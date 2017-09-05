"use strict";
/*

    handle data and functionality needed in list.html
    using todoFactory and userFactory to interact with the database

 */

//this is similar to the require statments, but now called INJECT...
app.controller("listCtrl", function ($scope, todoFactory, userFactory, filterFactory, $rootScope) {

    $scope.tasks = [];
    let user = userFactory.getCurrentUser();
    $rootScope.showSearch = true;
    $scope.searchText = filterFactory;

    const showAllTasks = function () {
        todoFactory.getAllTasks(user)
            .then((tasks) => {
                console.log("showAllTasks", tasks);
                $scope.tasks = tasks;
            });
    };

    $scope.deleteTask = function (id) {
        todoFactory.deleteTask(id)
            .then(() => {
                showAllTasks();
            });
    };
    //TODO fix this toggle happens to quickly
    $scope.toggleDoneTask = function (obj) {
        console.log("toggleDoneTask", obj);
        let status = obj.isCompleted ? true : false;
        let tempObj = {
            isCompleted: status
        };
        todoFactory.editTask(obj.id, tempObj)
            .then(() => {
                console.log("then is updated");
                showAllTasks();
            });
    };
    showAllTasks();

});