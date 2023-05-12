<template>
  <div class="music-container">
    <section class="hero-image">
      <div class="hero-text">
        <h2>Music is my religion.</h2>
        <div class="hero-quote-credit">
        <p>Jimi Hendrix</p>
      </div>
      </div>
      <!-- <div class="hero-quote-credit">
        <p>Jimi Hendrix</p>
      </div> -->
    </section>
    <div class="container">
      <div class="table-responsive">
        <!-- New Music Table -->
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th class="table-title" colspan="100%">Download Music</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th v-for="label in tableHeaderLabels" :key="label">{{ label }}</th>
            </tr>
          </thead>
          <tbody id="music-table-body">
            <song-row v-for="song in music" :key="song._id" :song="song" :delete-song="deleteSong" :edit-song="editSong"
              :handleCheckbox="handleCheckbox"></song-row>
            <tr>
              <td id="btn-row" colspan="100%" class="text-center">
                <button id="add-music-btn" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Add a song
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Adding a song modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="music-form" @submit="handleSubmit">
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
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Editing song modal -->
      <div class="modal fade" id="editSongModal" tabindex="-1" aria-labelledby="editSongModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editSongModalLabel">Modal title</h5>
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
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/sass/music.scss";
</style>

<script>
import axios from "axios";
import SongRow from "@/components/SongRow.vue";

export default {
  name: "MusicView",
  components: {
    SongRow,
  },
  data() {
    return {
      music: {},
      tableHeaderLabels: ['✔️', 'name', 'artist', 'song link', 'playlists', 'edit', 'discard'],
      showModal: false,
      newSong: {}, // might be unnecessary
      songToEdit: {}, // might be unnecessary
      editedSong: {}, // might be unnecessary
      // tableKey: 0
    };
  },
  methods: {
    // Gets the music from the MongoDB database using an Axios request.
    // Then stores the music data inside the music state (or variable or whatever it's called in Vue)
    async getMusic() {
      await axios
        .get(`${process.env.VUE_APP_SERVER}/music`)
        .then((response) => (this.music = response.data))
        .catch((error) => console.error(error));
      console.log(this.music); // delete later
      // this.renderMusic();
    },

    async deleteSong(song) {
      await axios
        .delete(`${process.env.VUE_APP_SERVER}/music/${song._id}`)
        .then(() => {
          console.log("delete successful");
          // location.reload();
          // this.tableKey += 1;
        })
        .catch((error) => console.error(error));
      // this.renderMusic();
    },

    editSong(song) {
      this.songToEdit = song;
    },

    /**
     * Gets the form data from the add song form and sends it to the
     * MongoDB using an Axios POST request.
     * @param {Event} e - The submit event from submitting an added song
     */
    handleSubmit(e) {
      e.preventDefault(); // prevents instant refresh
      let form = e.target;
      let formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      formJson.isChecked = false;

      axios
        .post(`${process.env.VUE_APP_SERVER}/music`, formJson)
        .then((response) => {
          this.newSong = response.data; // not sure that I need
          // location.reload();
          // this.tableKey += 1;
        })
        .catch((error) => console.error(error));
    },

    /**
     *
     * @param {Event} e - The submit event from submitting an edited song
     * @param {Object} song
     */
    handleEditSubmit(e, song) {
      e.preventDefault(); // prevents instant refresh
      let form = e.target;
      let formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      formJson.isChecked = false;
      console.log(formJson); // delete later

      axios
        .patch(`${process.env.VUE_APP_SERVER}/music/${song._id}`, formJson)
        .then((response) => {
          this.editedSong = response.data; // not sure that I need
          location.reload();
        })
        .catch((error) => console.error(error));
    },

    /**
     *
     * @param {Event} e
     * @param {Object} song - The song object that goes to the database
     */
    handleCheckbox(e, song) {
      e.preventDefault();
      song.isChecked = !song.isChecked;
      axios
        .patch(`${process.env.VUE_APP_SERVER}/music/${song._id}`, song)
        .then((response) => {
          this.editedSong = response.data; // not sure that I need
          // location.reload();
        })
        .catch((error) => console.error(error));
    },
  },
  mounted() {
    this.getMusic();
  },
};
</script>
