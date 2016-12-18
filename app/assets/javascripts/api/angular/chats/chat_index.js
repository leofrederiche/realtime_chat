(function(){
	'user strict';

	angular
		.module('app')
		.controller('ChatIndex', ChatIndex);

	ChatIndex.$inject = ['chatAPI'];

	function ChatIndex(chatAPI){
		var vm = this;

		chatAPI.index(function(data){
			vm.chats = data;
			console.log('CHATS -> ', vm.chats);
			
		}, function(error){
			console.log('ERRO -> ', error);
		});

	}
})();