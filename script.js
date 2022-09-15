'use strict'

class Track {
    constructor(trackId, year, artist, song, video) {
        this.trackId = trackId;
        this.year = year;
        this.artist = artist;
        this.song = song;
        this.video = video
        
    }

}

const id01 = new Track('id01', 1977, "LED ZEPPELIN", "STAIRWAY TO HEAVEN", 'QkF3oxziUI4');
const id02 = new Track('id02', 1975, "QUEEN", "BOHEMIAN RHAPSODY", 'fJ9rUzIMcZQ');
const id03 = new Track('id03', 1964, "the animals", "house of the rising sun", '4-43lLKaqBQ');
const id04 = new Track('id04', 1972, "DEEP PURPLE", "SMOKE ON THE WATER", 'zUwEIt9ez7M');
const id05 = new Track('id05', 1968, "JIMI HENDRIX", "ALL ALONG THE WATCHTOWER", 'OzlN0Guvous');
const id06 = new Track('id06', 1980, "AC/DC", "BACK IN BLACK", 'pAgnJDJN4VA');
const id07 = new Track('id07', 1977, "METALLICA", "ENTER SANDMAN", 'CD-E-LDc384');

const playList = [id01, id02, id03, id04, id05, id06, id07];
const tracksTable = document.getElementById('playlist');
playList.forEach(displayPlaylist);
const openButtons = document.querySelectorAll('.btnSmall');

openButtons.forEach((btn) => btn.addEventListener('click', (e) => openPopup(e)));
document.querySelector('#close').addEventListener('click', closePopup);



function displayPlaylist(track) {
    tracksTable.innerHTML += `
    <tr>
        <td class="track__date">
            <p>${track.year}</p>
        </td>
        <td class="track__author">
            <p>${track.artist}</p>
        </td>
        <td class="track__name">
            <p>${track.song}</p>
        </td>
        <td class="track__option">
            <button class="btnSmall" id="${track.trackId}">Open</button>
        </td>
    </tr>`
}


function openPopup(e){
    const popup = document.querySelector('.close');
    popup.classList.remove('close');
    popup.classList.add('open');

    const bodyScroll = document.querySelector('.enabled-scroll');
    bodyScroll.classList.remove('enabled-scroll');
    bodyScroll.classList.add('disabled-scroll');

    let targetedTrack = e.target.getAttribute('id');
    buildPopup(targetedTrack);
}


function closePopup(){
    const popup = document.querySelector('.open');
    popup.classList.remove('open');
    popup.classList.add('close');

    const bodyScroll = document.querySelector('.disabled-scroll');
    bodyScroll.classList.remove('disabled-scroll');
    bodyScroll.classList.add('enabled-scroll');
}


function buildPopup(targetedTrack){

    let firedTrackObj = playList.find(element => element.trackId === targetedTrack);

    document.querySelector('.popup__description').innerHTML =`
        <div class="player">
        <div class="track__date">
            <p>${firedTrackObj.year}</p>
        </div>
        <div class="track__author">
            <p>${firedTrackObj.artist}</p>
        </div>
        <div class="track__name">
            <p>${firedTrackObj.song}</p>
        </div>
        <div class="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${firedTrackObj.video}"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
    </div>`
}


