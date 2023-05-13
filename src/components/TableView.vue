<template>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th class="table-title" colspan="100%">Download Music <div class="count">{{ this.music.length }}</div></th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th v-for="label in tableHeaderLabels" :key="label">{{ label }}</th>
      </tr>
    </thead>
    <tbody id="music-table-body">
      <song-row v-for="song in music" :key="song._id" :song="song" :deleteSong="deleteSong" :editSong="editSong"
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
</template>

<script>
import SongRow from "@/components/SongRow.vue";
export default {
  name: "TableView",
  components: {
    SongRow
  },
  props: {
    music: Object,
    tableHeaderLabels: Object,
    deleteSong: Function,
    editSong: Function,
    handleCheckbox: Function
  },
  data () {
    return {

    }
  }
}
</script>