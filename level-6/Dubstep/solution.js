function songDecoder(song) {
  return song.split('WUB').filter(elem => elem !== '').join(' ');
}
