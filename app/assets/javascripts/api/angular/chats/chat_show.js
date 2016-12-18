(function(){
	'user strict';

	angular
		.module('app')
		.controller('ChatShow', ChatShow);

	ChatShow.$inject = ['chatAPI'];

	function ChatShow(chatAPI){
		var vm = this;

		chatAPI.show(function(data){
			vm.chats = data;
			console.log('CHAT -> ', vm.chats);			
		}, function(error){
			console.log('ERRO -> ', error);
		});

	}
})();