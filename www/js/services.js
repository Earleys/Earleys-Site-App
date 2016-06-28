
angular.module('starter.services', [])

.factory('BlogService', ['$http', '$q', function($http, $q) {
	return {

		getBlogPosts: function() {
			  console.log("test");
			var q = $q.defer();
			$http.get('http://earleys.be/json/blog').success(function(data, status, headers, config) {
				q.resolve(data);
			})
			.error(function(data, status) {
				q.resolve(data);
			});
			return q.promise;
		},
		getSpecificBlogPost: function(id) {
			console.log("test2");
			var q = $q.defer();
			$http.get('http://earleys.be/json/blog').success(function(data, status, headers, config) {
				for (var i=0; i<data.length; i++) {
					if (data[i].id == id) {
						q.resolve(data[i]);
					}
				}
				
			})
			.error(function(data, status) {
				q.resolve(data);
			});
			return q.promise;
		}
	}

}])


.factory('ProjectService', ['$http', '$q', function($http, $q) {
	return {

		getProjects: function() {
			  console.log("projecttest");
			var q = $q.defer();
			$http.get('http://earleys.be/json/project').success(function(data, status, headers, config) {
				q.resolve(data);
			})
			.error(function(data, status) {
				q.resolve(data);
			});
			return q.promise;
		},
		getSpecificProject: function(id) {
			console.log("test2");
			var q = $q.defer();
			$http.get('http://earleys.be/json/project').success(function(data, status, headers, config) {
				for (var i=0; i<data.length; i++) {
					if (data[i].id == id) {
						q.resolve(data[i]);
					}
				}
				
			})
			.error(function(data, status) {
				q.resolve(data);
			});
			return q.promise;
		}
	}

}])

.factory('ProfileService', ['$http', '$q', function($http, $q) {
	return {

		getProfiles: function() {
			  console.log("profiletest");
			var q = $q.defer();
			$http.get('http://earleys.be/json/user').success(function(data, status, headers, config) {

				q.resolve(data);
			})
			.error(function(data, status) {
				q.resolve(data);
			});
			return q.promise;
		},
		getSpecificProfile: function(name) {
			console.log("test2");
			var q = $q.defer();
			$http.get('http://earleys.be/json/user').success(function(data, status, headers, config) {
				for (var i=0; i<data.length; i++) {
					if (data[i].username == name) {
						q.resolve(data[i]);
					}
				}
				
			})
			.error(function(data, status) {
				q.resolve(data);
			});
			return q.promise;
		}
	}

}]);

