(function() {
	'use strict';

	function Game(){}

	Game.prototype = {
		preload: function(){

		},
		create: function(){

		}
		update: function(){

		}
		render: function(){

		}
	};
	var game = new Phaser.Game(800, 520, Phaser.AUTO, 'pairs-game');
	game.state.add('game', Game);
	game.state.start('game');
}());