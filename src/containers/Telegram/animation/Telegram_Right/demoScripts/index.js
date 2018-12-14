var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'Telegram_Right.json'
})

animation.goToAndPlay(0, true);

//animation.goToAndStop( 236 , true );
//animation.playSegments([236, 345] , false );
//animation.stop();