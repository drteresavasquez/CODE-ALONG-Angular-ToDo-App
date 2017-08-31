"use strict";

/*

    handle data and functionality needed in list.html
    using todoFactory and userFactory to interact with the database

 */

 //this is similar to the require statments, but now called INJECT...
app.controller("listCtrl", function($scope, todoFactory, userFactory){

    $scope.tasks = [];

    const showAllTasks = function(){
        todoFactory.getAllTasks()
        .then((tasks)=>{
            console.log("showAllTasks", tasks);
            $scope.tasks = tasks;
        });
    };

    
    const deleteTask = function(){

    };

    
    const toggleDoneTask = function(){

    };
    showAllTasks();

});