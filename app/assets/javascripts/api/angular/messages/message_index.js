(function(){
	'user strict';

	angular
		.module('app')
		.controller('MessageIndex', MessageIndex);

		MessageIndex.$inject = ['messageAPI'];

		function MessageIndex(messageAPI){
			var vm = this;

			var params = {chat_id: 1}

			messageAPI.index(params, function(data){
				vm.messages = data;
				console.log('MENSAGENS -> ', vm.messages);
			}, function(error){
				console.log('FERROU TUDO! VAI JOGAR LOL!');
			});
		}

})();