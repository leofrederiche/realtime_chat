(function(){
	'user strict';

	angular
		.module('app')
		.factory('chatAPI', chatAPI);

	chatAPI.$inject = ['$resource'];

	function chatAPI($resource) {
		return $resource('', {id: '@id'}, {
			index: { url: '/api/chats', method: 'GET', isArray: true },
      // new: {url: '/api/users/new', method: 'GET'},
      // create: { url: '/api/chats', method: 'POST' },
      // edit: {url: '/api/users/:id/edit', method: 'GET'},
      // update: {url: '/api/users/:id', method: 'PATCH'},
      // destroy: {url: '/api/users/:id', method: 'DELETE'},
      show: { url: '/api/chats/:id/', method: 'GET', isArray: true }
		});
	}
})();