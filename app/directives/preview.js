(function(){
	angular.module('previewTrans', [])
			.directive('preview', preview);

	function preview(){
		var directive = {
			template: '<div>' +
							'<header><span>Preview</span></header>' + 
							'<p><strong>From Account - </strong>{{vm.frm}}</p>' +
							'<p><strong>To Account - </strong>{{vm.to}}</p>' +
							'<p><strong>Amount - </strong>{{vm.amt | currency}}</p>' +
							'<button ng-click="vm.onTransfer()">Transfer</button>' + 
							'<button ng-click="vm.onCancel()">Cancel</button>' +
					  '</div>',	
							
						
			controller: 'previewCtrl',
			controllerAs: 'vm'
		};

		return directive;
	}		

})();