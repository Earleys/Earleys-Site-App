

angular.module('starter.controllers', ['ionic'])





.controller('DashCtrl', function($scope) {})



.controller('BlogController', function($scope, $rootScope, $state, $ionicLoading, BlogService) {
  startLoading($ionicLoading)
  BlogService.getBlogPosts().then(function(data) {
    $ionicLoading.hide()

    if (data != null) {
      $scope.blogPosts = data;
    }
    else {
      checkConnection($state);
    }
  });

})

.controller('BlogControllerDetail', function($scope, $stateParams, $state, $ionicLoading, BlogService) {
  startLoading($ionicLoading);
  BlogService.getSpecificBlogPost($stateParams.blogId).then(function(data) {
  //$scope.detail = data;
  $ionicLoading.hide()

  if (data != null) {
    $scope.detail = data;
  }
  else {
    checkConnection($state);
  }
  //console.log(data);
});


})


.controller('ProjectController', function($scope, $rootScope, $state, $ionicLoading, ProjectService) {
  startLoading($ionicLoading);
  ProjectService.getProjects().then(function(data) {
    $ionicLoading.hide()

    if (data != null) {
      $scope.projects = data;
    }
    else {
      checkConnection($state);
    }

  });

})


.controller('ProjectControllerDetail', function($scope, $stateParams, $state, $ionicLoading, ProjectService) {
  startLoading($ionicLoading);
  ProjectService.getSpecificProject($stateParams.projectId).then(function(data) {
    $ionicLoading.hide()

    if (data != null) {
      $scope.detail = data;
    }
    else {
      checkConnection($state);
    }

  //console.log(data);
});

})


.controller('ProfileController', function($scope, $rootScope, $state, $ionicLoading, ProfileService) {
  startLoading($ionicLoading)
  ProfileService.getProfiles().then(function(data) {
    $ionicLoading.hide();

    if (data != null) {
      $scope.profiles = data;
    }
    else {
      checkConnection($state);
    }
  });

})


.controller('ProfileControllerDetail', function($scope, $stateParams, $state, $ionicLoading, ProfileService) {
  startLoading($ionicLoading)
  ProfileService.getSpecificProfile($stateParams.username).then(function(data) {
    $ionicLoading.hide()

    if (data != null) {
      $scope.detail = data;
    }
    else {
      checkConnection($state);
    }

  //console.log(data);
});

});

function startLoading($ionicLoading) {
  $ionicLoading.show({
    //template: 'Laden, even geduld aub...'
  })
}

function checkConnection($state) {
  if(window.Connection) {
    console.log('test');
    if(navigator.connection.type == Connection.NONE) {
      alert("Er is geen internetverbinding. Hierdoor kan dit onderdeel niet worden weergegeven.");
   }
   else {
     alert("Earleys App kan momenteel geen data ophalen. Je internetverbinding lijkt te werken, dus probeer het later nogmaals. Sorry! :(");
   }
 }
 else {
   alert("Earleys App kan momenteel geen data ophalen. Probeer het later nogmaals, sorry! :(");
 }
 $state.go( "tab.dash" );
}