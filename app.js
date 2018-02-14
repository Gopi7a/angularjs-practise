var myApp = angular.module('myapp',['ui.router']);
myApp.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider){
        $stateProvider.state({
            name:'home',
            url:'/home',
            template: '<div>This is the index page</div>'
        });

        $stateProvider.state({
            name:'about',
            url:'/about',
            template: '<div>This is the about page</div>'
        });

        
        $urlRouterProvider.otherwise('/home');
        
        // $routeProvider.when("/page1",{
        //     templateUrl: "page1.html"
        // });

}]);



myApp.controller('myCtrl',['$scope','AppService',
   function($scope,AppService){
    $scope.myVal = "Hello";
    $scope.onClick = function(a){         
        $scope.myVal="changed me";
    }

    $scope.students = AppService.getStudents().then(function(result){
        $scope.students = result;
    });
    AppService.getData().then(function(res){
        console.log(res);
    });
    $scope.viewDetails = function(stu){
        $scope.myVals=stu;
    }

    $scope.onBtnClick = function($event){
        console.log($event.target);
    }
    }
]);