var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'Enigma_Main.json'
})

animation.play();

//animation.goToAndStop( 236 , true );
//animation.playSegments([236, 345] , false );
//animation.stop();