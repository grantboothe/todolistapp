angular.module('app',['ui.router']).config(function ($stateProvider) {
    $stateProvider.state('todo',{
        template: '<todocomponent></todocomponent>',
        url:"/todo"
    }).state('about', {
        template: 'This is the to-do app. This is designed to make your life easier and more organized.',
        url:"/about"
    })
});
