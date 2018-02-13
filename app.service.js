var myApp = angular.module('myapp');
myApp.service('AppService',['$http','$q',
    function($http,$q){        
        this.getStudents = function(){ 
            var defer = $q.defer();                   
            $http.get('/students.json')
                    .then(function(res){ 
                        var stu = res.data.map(function(item){
                            item.sen = item.age<10?"senr":"junr"; 
                            console.log(item.sen);              
                            return item;   
                        }) ;       
                        defer.resolve(stu);
               
            });
            return defer.promise;
        }

        this.getData = function(){
            var defer = $q.defer();
            setTimeout(function(){
                defer.resolve('hello');
            },2000);
            return defer.promise;
        }
    }
]);