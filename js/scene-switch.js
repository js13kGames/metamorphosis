function switchToMainScene() {
  finite_state = 'wake';
  document.getElementById('scene-start').setAttribute('visible', 'false')
  document.getElementById('scene-main').setAttribute('visible', 'true')
  document.querySelector('#light-point').emit('light-on');
  first_stage();
  }
