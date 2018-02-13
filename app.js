var myApp = angular.module('myapp',[]);
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