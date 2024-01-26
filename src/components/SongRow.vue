<template>
  <tr>
    <td data-label="✔️:" ><input type="checkbox" id="checkbox" v-model="checked" @change="(e) => handleCheckbox(e, song)"/></td>
    <td data-label="Song title:">{{ song.songTitle }}</td>
    <td data-label="Artist:">{{ song.artist }}</td>
    <td data-label="Song link:" v-if="song.songLink.includes('http')"><a :href="song.songLink" target="_blank">{{ song.songLink }}}</a></td>
    <td data-label="Song link:" v-else>{{ song.songLink }}</td>
    <td data-label="Playlists:">{{ song.playlists }}</td>
    <td data-label="Edit song:">
      <button @click="editSong(song)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editSongModal">Edit</button>
    </td>
    <td data-label="Delete:">
      <button @click="deleteSong(song)" class="btn btn-danger"><img src="@/assets/music-assets/icons8-trash-24.png"/></button>
    </td>
  </tr>
</template>

<script>
  export default {
    data() {
      return {
        checked: this.song.isChecked,
      }
    },
    props: {
      song: Object,
      deleteSong: Function,
      editSong: Function,
      handleCheckbox: Function
    },
  }
</script>