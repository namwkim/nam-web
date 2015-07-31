

var namapp = angular.module('namApp', [], function($interpolateProvider) {
		$interpolateProvider.startSymbol('<%');
		$interpolateProvider.endSymbol('%>');
	})
	.run(function($rootScope){
		//	 initialization
	})
