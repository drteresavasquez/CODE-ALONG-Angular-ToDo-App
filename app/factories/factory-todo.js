"use strict";

/*

    provide the basic crud interactions with firebase
 
*/

//remeber $q is angular's promise
app.factory("todoFactory", function($q, $http, FBCreds){

    const getAllTasks = function(){
        let tasks = [];
        return $q ((resolve, reject)=>{
            $http.get(`${FBCreds.databaseURL}/items.json`)
            .then((itemObject)=>{
                let itemCollection = itemObject.data;
                console.log("itemCollection", itemCollection);
                Object.keys(itemCollection).forEach((key)=>{
                    itemCollection[key].id = key;
                    tasks.push(itemCollection[key]);
                });
                resolve(tasks);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };

    const addTask = function(){

    };

    const editTask = function() {

    };

    const deleteTask = function(){

    };

    const getSingleTask = function(itemId){
        return $q((resolve, reject)=>{
            $http.get(`${FBCreds.databaseURL}/items/${itemId}.json`)
            .then((itemObj)=>{
                resolve(itemObj.data);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };

    return {getAllTasks, getSingleTask, deleteTask, editTask, addTask};
});