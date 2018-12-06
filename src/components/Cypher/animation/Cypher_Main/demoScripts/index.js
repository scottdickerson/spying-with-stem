var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'Cypher_Main.json'
})

//animation.play();

animation.goToAndPlay( 0 , true );