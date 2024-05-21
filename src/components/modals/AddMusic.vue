<template>
  <div class="modal fade" id="addMusicModal" tabindex="-1" aria-labelledby="addMusicModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addMusicModalLabel">Add Song</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="music-form" @submit="handleAddSubmit">
            <div class="mb-3">
              <label for="track-name" class="form-label">Song name</label>
              <input type="text" class="form-control" id="track-name" name="songTitle" placeholder="Enter song name"
                required />
            </div>
            <div class="mb-3">
              <label for="artist-name" class="form-label">Artist name</label>
              <input type="text" class="form-control" id="artist-name" name="artist" placeholder="Enter artist name" />
            </div>
            <div class="mb-3">
              <label for="song-link" class="form-label">Song link</label>
              <input type="text" class="form-control" id="song-link" name="songLink" placeholder="Enter link to song" />
            </div>
            <div class="mb-3">
              <label for="playlists" class="form-label">Playlists</label>
              <input type="text" class="form-control" id="playlists" name="playlists"
                placeholder="Enter playlists to add song to" />
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
  name: "AddMusic",
  props: {
    handleAddSubmit: Function
  }
}
</script>