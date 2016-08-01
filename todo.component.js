(function () {

    angular.module('app')
        .component('todocomponent', {
            templateUrl: "todocomponent.html",
            controller: todocomponent
        });


    function todocomponent($scope) {
        $scope.setcurrentlist = function (todolistname) {
            $scope.currentlist = todolistname;
            console.log($scope.currentlist)
        };

        $scope.todoList = [{todoText: 'First List', done: false, todos: []}];

        $scope.listAdd = function () {
            $scope.todoList.push({todoText: $scope.todoInput, done: false, todos: []});
            $scope.todoInput = "";
        };

        $scope.AddtoDo = function (list, theToDo) {
            list.todos.push({todo: theToDo, done: false});
            console.log(list.todos)
            console.log(list)
            theToDo = '';
        };

        $scope.remove = function () {
            var deleteList = [];
            angular.forEach($scope.todoList, function (x) {
                if (!x.done) deleteList.push(x);
            });
            $scope.todoList = deleteList;
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

})();
