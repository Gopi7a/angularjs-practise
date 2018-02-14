var myApp = angular.module('myapp');
myApp.component('studentDetails',{
     templateUrl: 'student.tmpl.html',
     bindings:{
        myTitle: '@',
        currentStudent: '<'
     },
     controller:[function(){
         this.myName = '1st Component';
     }]

});

// myApp.component('homePage',{
//     template: '<div>This from component home page</div>'
// });

// myApp.component('aboutPage',{
//     template: '<div>This from component about page</div>'
// });