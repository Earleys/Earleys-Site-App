// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    if(window.Connection) {
      if(navigator.connection.type == Connection.NONE) {
       alert("Er is geen internetverbinding. Bepaalde onderdelen van de app zullen niet werken.");
     }
   }



 });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })


  .state('tab.blog', {
    url: '/blog',
    views: {
      'tab-blog': {
        templateUrl: 'templates/tab-blog.html',
        controller: 'BlogController'
      }
    }
  })
  .state('tab.blog-detail', {
    url: '/blog/:blogId',
    views: {
      'tab-blog': {
        templateUrl: 'templates/blog-detail.html',
        controller: 'BlogControllerDetail'
      }
    }
  })

  .state('tab.projects', {
    url: '/project',
    views: {
      'tab-project': {
        templateUrl: 'templates/tab-projects.html',
        controller: 'ProjectController'
      }
    }
  })
  .state('tab.project-detail', {
    url: '/project/:projectId',
    views: {
      'tab-project': {
        templateUrl: 'templates/project-detail.html',
        controller: 'ProjectControllerDetail'
      }
    }
  })


  .state('tab.profiles', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profiles.html',
        controller: 'ProfileController'
      }
    }
  })
  .state('tab.profile-detail', {
    url: '/profile/:username',
    views: {
      'tab-profile': {
        templateUrl: 'templates/profile-detail.html',
        controller: 'ProfileControllerDetail'
      }
    }
  })


  .state('tab.tutorials', {
    url: '/tutorial',
    views: {
      'tab-tutorial': {
        templateUrl: 'templates/tab-tutorials.html',
        controller: 'TutorialController'
      }
    }
  })
  // Tutorials cannot be cached because of a bug in the side menus.
  // repro (with cache enabled): open tutorial, open a tutpage, click tutorial tab in nav, 
  //(if needed, click the same tutorial again), and then try closing the side menu. It won't work.
  .state('tab.tutorial-detail', {
    cache: false,
    url: '/tutorial/:id',
    views: {
      'tab-tutorial': {
        templateUrl: 'templates/tutorial-detail.html',
        controller: 'TutorialControllerDetail'
      }
    }
  })
  .state('tab.tutpage-detail', {
    cache: false,
    url: '/tutorial/:id/:pageid',
    views: {
      'tab-tutorial': {
        templateUrl: 'templates/tutpage-detail.html',
        controller: 'TutorialPageControllerDetail'
      }
    }
  })
  // end of tutorials

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

})

.config( ['$ionicConfigProvider', function($ionicConfigProvider)
{
  $ionicConfigProvider.tabs.position('bottom');
}] );

function onOffline() {
    // Handle the offline event
    alert('you are offline');
  }