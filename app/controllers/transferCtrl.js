(function(){
	angular.module('newTrans')
			.controller('transferCtrl', transferCtrl);

	transferCtrl.$inject = ['$scope', 'transactionData', 'accountData', '$state'];
	
	function transferCtrl($scope, transactionData, accountData, $state){
		var tc = this;
		var data = accountData;
		var accInfo = data['frm'];
		var accName = accInfo['accountName'];
		var accNumber = accInfo['accountNumber'];
		var available = accInfo['available'];

		tc.disabledString = 'Free Checking' + '(' +
							accNumber + ')' + ' - ' +
							'Available ' + '$' +available;

		tc.to = data['to'];
		tc.amt = data['amt'];

		tc.onSubmit = onSubmit;

		function onSubmit(frm, to, amt){
			$state.go('preview', {frm: frm, to: to, amt: amt});
		}
	}		
})();