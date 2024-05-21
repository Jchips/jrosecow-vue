<!-- Hero image from Marcela Laskoski on Unsplash - https://unsplash.com/photos/YrtFlrLo2DQ -->

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

        <!-- new music table -->
        <TableView :music="music" :delete-song="deleteSong" :edit-song="editSong" :handleCheckbox="handleCheckbox"
          :tableHeaderLabels="tableHeaderLabels" />
      </div>

      <!-- Adding a song modal -->
      <AddMusic :handleAddSubmit="handleAddSubmit" />

      <!-- Editing song modal -->
      <EditMusic :handleEditSubmit="handleEditSubmit" :songToEdit="songToEdit" />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/sass/music.scss";
</style>

<script>
import axios from "axios";
import TableView from "@/components/TableView.vue";
import AddMusic from "../components/modals/AddMusic.vue";
import EditMusic from "../components/modals/EditMusic.vue";

export default {
  name: "MusicView",
  components: {
    TableView,
    AddMusic,
    EditMusic,
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
      songToEdit: {},
    };
  },
  mounted() {
    this.getMusic(); // Gets all music from inside the database.
  },
  methods: {
    // Gets the music from the MongoDB database using an Axios request.
    // Then stores the music data inside the music state (or variable or whatever it's called in Vue)
    getMusic() {
      const url = `${process.env.VUE_APP_SERVER}/music`;
      axios
        .get(url)
        .then((response) => (this.music = response.data))
        .catch((error) => console.error(error));
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
    handleAddSubmit(e) {
      e.preventDefault(); // prevents instant refresh
      let form = e.target;
      let formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      formJson.isChecked = false;
      form.reset(); // empties the form for next entry

      axios
        .post(`${process.env.VUE_APP_SERVER}/music`, formJson)
        .then((response) => {
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
      axios
        .patch(`${process.env.VUE_APP_SERVER}/music/${song._id}`, formJson)
        .then((response) => {
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
};
</script>
