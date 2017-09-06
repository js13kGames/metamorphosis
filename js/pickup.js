AFRAME.registerComponent('water-cup', {
	init: function () {
		var water = this.el;
		water.addEventListener('click', function (evt) {
			// when water picked up
			// 'wake stage'
			if (finite_state === 'wake') {
				finite_state = 'water';
				set_event_plane();
				water.setAttribute('visible', false);
				camera_text.setAttribute('visible', false);
				help_text.setAttribute('visible', false);

				action_text.addEventListener('click', function(){
					water.setAttribute('visible', true);
					reset_event_plane();
					second_stage();
				});
			} else {
				// other stage of game
			}
			
		});
	}
});
