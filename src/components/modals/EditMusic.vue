<template>
  <div class="modal fade" id="editSongModal" tabindex="-1" aria-labelledby="editSongModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editSongModalLabel">Edit Song</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="edit-song-form" @submit="(e) => handleEditSubmit(e, songToEdit)">
            <div class="mb-3">
              <label for="track-name" class="form-label">Song name</label>
              <input type="text" class="form-control" id="track-name" name="songTitle" :value="songToEdit.songTitle"
                required />
            </div>
            <div class="mb-3">
              <label for="artist-name" class="form-label">Artist name</label>
              <input type="text" class="form-control" id="artist-name" name="artist" :value="songToEdit.artist" />
            </div>
            <div class="mb-3">
              <label for="song-link" class="form-label">Song link</label>
              <input type="text" class="form-control" id="song-link" name="songLink" :value="songToEdit.songLink" />
            </div>
            <div class="mb-3">
              <label for="playlists" class="form-label">Playlists</label>
              <input type="text" class="form-control" id="playlists" name="playlists" :value="songToEdit.playlists" />
            </div>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditMusic",
  props: {
    handleEditSubmit: Function,
    songToEdit: Object
  }
}
</script>