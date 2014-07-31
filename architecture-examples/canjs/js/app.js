/* global $, can */
(function () {
	'use strict';

	$(function () {
		can.Feathers.connect({ host: 'http://todos.feathersjs.com' })
		// Set up a route that maps to the `filter` attribute
		can.route(':filter');

		// Render #app-template
		$('#todoapp').html(can.view('app-template', {}));

		// Start the router
		can.route.ready();
	});
})();
