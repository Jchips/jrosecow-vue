<template>
  <tr>
    <td><input type="checkbox" id="checkbox" v-model="checked" @change="(e) => handleCheckbox(e, song)"/></td>
    <td>{{ song.songTitle }}</td>
    <td>{{ song.artist }}</td>
    <td v-if="song.songLink.includes('http')"><a :href="song.songLink">{{ song.songLink }}}</a></td>
    <td v-else>{{ song.songLink }}</td>
    <!-- <td><a :href="song.songLink">{{ song.songLink }}}</a></td> -->
    <td>{{ song.playlists }}</td>
    <td><button @click="editSong(song)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editSongModal">Edit</button></td>
    <td>
      <button @click="deleteSong(song)" class="btn btn-danger"><img src="@/assets/music-assets/icons8-trash-24.png"/></button>
    </td>
  </tr>
</template>

<script>
  export default {
    data() {
      return {
        checked: this.song.isChecked
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