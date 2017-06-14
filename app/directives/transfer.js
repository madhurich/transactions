(function(){
	//'use strict';
	angular.module('newTrans', [])
			.directive('transfer', transfer);

	function transfer(){
		var directive = {
			template: '<div id="transfer" class="trans">' + 
						'<header><span>Make a Transfer</span></header>' +
						'<form>' +
							'<div class="form-group">' + 
								'<label for="from">from account</label><br/>' + 
								'<input type="text" ng-model="vm.from"/><br/>' + 
							'</div>' +
							'<div class="form-group">' + 
								'<label for="to">to account</label><br/>' +
								'<input type="text" ng-model="vm.to"/><br/>' +
							'</div>' +
							'<div class="form-group">' +	
								'<label for="amount">amount</label><br/>' +
								'<input type="text" ng-model="vm.amount"/><br/>' +
							'</div>' +
							'<div class="form-group submit">' + 
								'<button ng-click="vm.onSubmit(vm.from, vm.to, vm.amount)">Submit</button>' + 
							'</div>' +	
							
						'</form>' +
					  '</div>',
			controller:transferCtrl,
			controllerAs: 'vm'
		};
		return directive;
	}

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