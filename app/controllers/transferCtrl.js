(function(){
	angular.module('newTrans')
			.controller('transferCtrl', transferCtrl);

	transferCtrl.$inject = ['$scope', 'transactionData'];
	
	function transferCtrl($scope, transactionData){
		var vm = this;
		// vm.from = 5000;
		vm.to = 'some company';
		vm.amount = 0;

		vm.onSubmit = function(frm, to, amount){
			console.log(frm, to, amount);
			alert('');
			//transactionData.push();
		};
	}		
})();