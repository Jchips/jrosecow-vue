// Song.js
import { deleteSong } from "./updateSongs";
class Song {
  constructor(isChecked, title, artist, link, playlist) {
    this.isChecked = isChecked;
    this.title = title;
    this.artist = artist;
    this.link = link;
    this.playlist = playlist;
    this.rowArray = [this.title, this.artist, this.link, this.playlist];
    // this.tableHeaderLabels = ['✔️', 'name', 'artist', 'song link', 'playlists', 'discard'];
  }

  play() {
    console.log(`Now playing ${this.title} by ${this.artist}.`)
  }

  renderSong() {
    let tbody = document.getElementById('music-table-body');
    let row = document.createElement('tr');
    // let checkboxTd = document.createElement('td');
    // checkboxTd.innerHTML = `<input type="checkbox" id="checkbox"/>`
    // row.appendChild(checkboxTd);
    let checkboxTd = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';
    checkbox.checked = this.isChecked;
    checkbox.addEventListener('change', () => {
      this.isChecked = checkbox.checked;
    });
    checkboxTd.appendChild(checkbox);
    row.appendChild(checkboxTd);

    console.log('checked', this.isChecked); // delete later

    this.rowArray.forEach(tableValue => {
      let td = document.createElement('td');
      createElement(td, tableValue);
      row.appendChild(td);
    })

    let editTd = document.createElement('td');
    editTd.id = 'edit-song-entry';
    editTd.textContent = '🖊️';

    // configuring the delete song button in the table
    let deleteTd = document.createElement('td');
    let trashImg = document.createElement('img');
    trashImg.src = require('../assets/music-assets/trash-icon.png');
    trashImg.addEventListener('click', (e) => {
      deleteSong(e)
    })

    deleteTd.appendChild(trashImg);
    row.appendChild(editTd);
    row.appendChild(deleteTd);
    tbody.appendChild(row);
  }
}

function createElement(td, content) {
  td.textContent = content;
}

export default Song
