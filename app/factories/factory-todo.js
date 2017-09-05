"use strict";

/*

    provide the basic crud interactions with firebase
 
*/

//remember $q is angular's promise

app.factory("todoFactory", function ($q, $http, FBCreds) {

    const getAllTasks = function (user) {
        let tasks = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${user}"`)
                .then((itemObject) => {
                    let itemCollection = itemObject.data;
                    console.log("itemCollection", itemCollection);
                    Object.keys(itemCollection).forEach((key) => {
                        itemCollection[key].id = key;
                        tasks.push(itemCollection[key]);
                    });
                    resolve(tasks);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const addTask = function (obj) {
        let newObj = JSON.stringify(obj);
        return $http.post(`${FBCreds.databaseURL}/items.json`, newObj)
            .then((data) => {
                console.log("data", data);
                return data;
            }, (error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log("error", errorCode, errorMessage);
            });
    };

    const editTask = function (id, obj) {
        console.log("id and object", id, obj);
        return $q((resolve, reject) => {
            let newObj = JSON.stringify(obj);
            //patch only takes the individual value from FB to update it. Essentially it edits the object's item without replacing all of the content.
            $http.patch(`${FBCreds.databaseURL}/items/${id}.json`, newObj)
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const deleteTask = function (id) {
        return $q((resolve, reject) => {
            $http.delete(`${FBCreds.databaseURL}/items/${id}.json`)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const getSingleTask = function (itemId) {
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/items/${itemId}.json`)
                .then((itemObj) => {
                    resolve(itemObj.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    return {
        getAllTasks,
        getSingleTask,
        deleteTask,
        editTask,
        addTask
    };
});