var myApp = angular.module('myapp');
myApp.filter('customName',[function(){
      return function(value,greetings){        
            return greetings+" "+ value.substr(0,2).toUpperCase()+value.substr(2);
      }  
}]);