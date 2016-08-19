(function () {

    angular.module('app')
        .component('todocomponent', {
            templateUrl: "todocomponent.html",
            controller: todocomponent
        })
        .filter('capitalize', capitalize);


    function todocomponent($scope, $localStorage, toaster) {
        $scope.pop = function(){
            toaster.pop('success',"Success!");
        };
        $scope.setcurrentlist = function (todolistname) {
            $scope.currentlist = todolistname;
        };

        $scope.todoList = [{todoText: 'First List', done: false, todos: []}];

        if($localStorage.lists){
            $scope.todoList = $localStorage.lists;
        }
        else {
            $localStorage.lists = $scope.todoList;
        }


        $scope.listAdd = function () {
            console.log($scope.todoInput);
            if($scope.todoInput !== '' && $scope.todoInput !== undefined){
                $scope.todoList.push({todoText: $scope.todoInput, done: false, todos: []});
                $localStorage.lists = $scope.todoList;
            }
            $scope.pop()
        };

        $scope.AddtoDo = function (list, theToDo) {
            if (theToDo !== undefined){
                list.todos.push({todo: theToDo, done: false});
            }

        };

        $scope.remove = function () {
            var deleteList = [];
            angular.forEach($scope.todoList, function (x) {
                if (!x.done) deleteList.push(x);
            });
            $scope.todoList = deleteList;
            $localStorage.lists = $scope.todoList;
        };

        $scope.removetask = function () {
            // loop through each list
            angular.forEach($scope.todoList, function (list) {
                // copy undone tasks to new array deleteTask
                var deleteTask = [];
                angular.forEach(list.todos, function (task) {
                    if (!task.done) {
                        deleteTask.push(task);
                    }

                });
                list.todos = deleteTask;
            });
        };
    }

    function capitalize() {
        return filter;
        function filter(input) {
            if (input !== null) {
                return input.replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
            }
        }
    }

 })();

