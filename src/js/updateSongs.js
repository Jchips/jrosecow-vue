// import Vue from 'vue';
// import MusicView from '../views/MusicView.vue';
// import { axios } from "axios";

// const app = new Vue({
//   el: '#app',
//   components: {
//     MusicView
//   },
//   mounted() {
//     async function deleteSong(song) {
//       await axios
//       .delete(`${process.env.VUE_APP_SERVER}/music/${song._id}`)
//       .then(() => console.log('delete successful'))
//       .catch(error => console.error(error));
//       console.log(this.music); // delete later
//       this.$refs.musicView.renderMusic();
//     }
//   }
// });

// export default app