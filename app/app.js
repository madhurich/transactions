(function(){
	'use strict';
	angular.module('makeATrans', [
					'ngRoute',
					'newTrans', 
					'existingTrans'
					]);
	angular.module('makeATrans')
			.config( config);

	config.$inject = ['$routeProvider'];		

	function config($routeProvider){
		$routeProvider
			.when('/', {
				template: '<transfer></transfer><transactions></transactions>'
			})
			.otherwise({
				redirectTo: '/'
			});

	}		
})();