<template>
  <div class="music-container">
    <section class="hero-image">
      <div class="hero-text">
        <h2>Music is my religion.</h2>
        <div class="hero-quote-credit">
          <p>Jimi Hendrix</p>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="table-responsive">

        <!-- My New Music Table -->
        <TableView :music="music" :delete-song="deleteSong" :edit-song="editSong" :handleCheckbox="handleCheckbox"
          :tableHeaderLabels="tableHeaderLabels"/>
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
                  <input type="text" class="form-control" id="artist-name" name="artist"
                    placeholder="Enter artist name" />
                </div>
                <div class="mb-3">
                  <label for="song-link" class="form-label">Song link</label>
                  <input type="text" class="form-control" id="song-link" name="songLink"
                    placeholder="Enter link to song" />
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
                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
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
// import SongRow from "@/components/SongRow.vue";
import TableView from "@/components/TableView.vue";

export default {
  name: "MusicView",
  components: {
    // SongRow,
    TableView,
  },
  data() {
    return {
      music: [],
      tableHeaderLabels: [
        "✔️",
        "name",
        "artist",
        "song link",
        "playlists",
        "edit",
        "discard",
      ],
      showModal: false,
      // newSong: {}, // might be unnecessary
      songToEdit: {},
      // editedSong: {}, // might be unnecessary
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
    },

    /**
     * Uses an Axios DELETE request to delete song from the MongoDB.
     * Then I remove the song from this.music manually in order to create a refresh
     * of the table component. The splice at index code/idea to refresh table was from ChatGPT.
     * @param {Object} song - Song to be delete from the MongoDB
     */
    async deleteSong(song) {
      await axios
        .delete(`${process.env.VUE_APP_SERVER}/music/${song._id}`)
        .then(() => {
          console.log("delete successful");
          // location.reload();
          const index = this.music.indexOf(song);
          if (index !== -1) {
            this.music.splice(index, 1);
          }
        })
        .catch((error) => console.error(error));
    },

    /**
     * Sets the songToEdit variable in state to whatever song the user wants to edit.
     * This way the modal knows what song to edit. It communicates the event from the edit
     * button click to the edit song modal so the song's data can be displayed in the modal.
     * @param {Object} song - The song the user wants to be edited.
     */
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
      form.reset(); // empties the form for next entry

      axios
        .post(`${process.env.VUE_APP_SERVER}/music`, formJson)
        .then((response) => {
          // this.newSong = response.data; // not sure that I need
          // location.reload();
          this.music.push(response.data);
        })
        .catch((error) => console.error(error));
    },

    /**
     * Gets the form data from the edit song form and sends it to the MongoDB using an Axios PATCH
     * request because it's editing the already saved song.
     * @param {Event} e - The submit event from submitting an edited song
     * @param {Object} song - The song the user wants to be edited.
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
          // this.editedSong = response.data; // not sure that I need
          // location.reload();
          const index = this.music.indexOf(song);
          this.music[index] = response.data;
        })
        .catch((error) => console.error(error));
    },

    /**
     * Sends a PATCH Axios request to the MongoDB so the database will store
     * if the song is checked or not.
     * It changes the isChecked value in the database to match it's front-end value.
     * @param {Event} e -  The checkbox checking event
     * @param {Object} song - The song object that goes to the database
     */
    handleCheckbox(e, song) {
      e.preventDefault();
      song.isChecked = !song.isChecked;
      axios
        .patch(`${process.env.VUE_APP_SERVER}/music/${song._id}`, song)
        .then((response) => {
          this.editedSong = response.data; // not sure that I need
        })
        .catch((error) => console.error(error));
    },
  },
  mounted() {
    this.getMusic(); // Gets all music from inside the database.
  },
};
</script>
