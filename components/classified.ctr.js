(function(){
	'use strict';
	angular.module('ngClassifieds')
	.controller('ClassifiedsCtrl', ['$scope', '$http', 'classifiedsFactory', '$mdSidenav', '$mdToast', function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast){
		classifiedsFactory.getClassifieds().then(function(classifieds){
			$scope.classifieds = classifieds.data;
		});	

		var contact = {
			name: "Ryan Chenkie",
			phone: "(555)333-9999",
			email: "lcuiano101@mgn.com"
		}

		$scope.openSidebar = function(){
			$mdSidenav('left').open();
		};
				$scope.closeSidebar = function(){
			$mdSidenav('left').close();
		};
		$scope.saveClassified = function(classified){
			if(classified) {
				classified.contact = contact;
				$scope.classifieds.push(classified);
				$scope.classified = {};
				$scope.closeSidebar();
				$mdToast.show(
					$mdToast.simple()
						.content("Classified Saved!")
						.position('top, right')
						.hideDelay(3000)
				)
			}		
		}
		// $scope.message = "Ola Capao Redondo!";
	}]);
})();