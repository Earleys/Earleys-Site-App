
angular.module('starter.services', [])

.factory('BlogService', ['$http', '$q', function($http, $q) {
	return {

		getBlogPosts: function() {
			console.log("test");
			var q = $q.defer();
			$http.get('http://api.earleys.be/v2/blogs').success(function(data, status, headers, config) {
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
			$http.get('http://api.earleys.be/v2/blog/' + id).success(function(data, status, headers, config) {
				q.resolve(data);		
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
			$http.get('http://api.earleys.be/v2/projects').success(function(data, status, headers, config) {
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
			$http.get('http://api.earleys.be/v2/project/' + id).success(function(data, status, headers, config) {

				q.resolve(data);

				
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
			$http.get('http://api.earleys.be/v2/users').success(function(data, status, headers, config) {

				q.resolve(data);
			})
			.error(function(data, status) {
				q.resolve(data);
			});
			return q.promise;
		},
		getSpecificProfile: function(name) {
			var q = $q.defer();
			$http.get('http://api.earleys.be/v2/user/' + name).success(function(data, status, headers, config) {
				q.resolve(data);
			})
			.error(function(data, status) {
				q.resolve(data);
			});
			return q.promise;
		}
	}

}])

.factory('TutorialService', ['$http', '$q', function($http, $q) {
	return {

		getTutorials: function() {
			console.log("tutorialtest");
			var q = $q.defer();
			$http.get('http://api.earleys.be/v2/tutorials').success(function(data, status, headers, config) {

				q.resolve(data);
			})
			.error(function(data, status) {
				q.resolve(data);
			});
			return q.promise;
		},
		getSpecificTutorial: function(id) {
			var q = $q.defer();
			$http.get('http://api.earleys.be/v2/tutorial/' + id).success(function(data, status, headers, config) {
				q.resolve(data);
			})
			.error(function(data, status) {
				q.resolve(data);
			});
			return q.promise;
		},
		getSpecificTutorialPage: function(id, pageid) {
			var q = $q.defer();
			$http.get('http://api.earleys.be/v2/tutorial/' + id).success(function(data, status, headers, config) {
				for (var i=0; i<data["tutpages"].length; i++) {
					if (data["tutpages"][i].pageid == pageid) {
						q.resolve(data["tutpages"][i]);
						break;
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



;

