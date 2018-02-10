var playlist = {
  Zayn: 'pillow talk'
};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist
}