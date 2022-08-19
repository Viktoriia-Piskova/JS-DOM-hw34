'use strict'

class Track {
    constructor(trackId, year, artist, song) {
        this.trackId = trackId;
        this.year = year;
        this.artist = artist;
        this.song = song
    }
}

const id01 = new Track('id01', 1977, "LED ZEPPELIN", "STAIRWAY TO HEAVEN");
const id02 = new Track('id02', 1975, "QUEEN", "BOHEMIAN RHAPSODY");
const id03 = new Track('id03', 1964, "the animals", "house of the rising sun");
const id04 = new Track('id04', 1972, "DEEP PURPLE", "SMOKE ON THE WATER");
const id05 = new Track('id05', 1968, "JIMI HENDRIX", "ALL ALONG THE WATCHTOWER");
const id06 = new Track('id06', 1980, "AC/DC", "BACK IN BLACK");
const id07 = new Track('id07', 1977, "METALLICA", "ENTER SANDMAN");

const playList = [id01, id02, id03, id04, id05, id06, id07];
const tracksTable = document.getElementById('playlist');
playList.forEach(displayPlaylist);
const openButtons = document.querySelectorAll('.btnSmall');

openButtons.forEach((btn) => btn.addEventListener('click', openPopup));
document.querySelector('#close').addEventListener('click', closePopup);



function displayPlaylist(track) {
    tracksTable.innerHTML += `
    <tr data-id=${track.id}>
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
            <button class="btnSmall" id="${track.id}">Open</button>
        </td>
    </tr>`
}




function openPopup(){
    console.log("open")
    const popup = document.querySelector('.close');
    popup.classList.remove('close');
    popup.classList.add('open');

    const bodyScroll = document.querySelector('.enabled-scroll');
    bodyScroll.classList.remove('enabled-scroll');
    bodyScroll.classList.add('disabled-scroll');

}


function closePopup(){
    console.log("close");
    const popup = document.querySelector('.open');
    popup.classList.remove('open');
    popup.classList.add('close');

    const bodyScroll = document.querySelector('.disabled-scroll');
    bodyScroll.classList.remove('disabled-scroll');
    bodyScroll.classList.add('enabled-scroll');
}


function buildPopup(){


    document.querySelector('').innerHTML =`
        <div class="player">
        <div class="track__date">
            <p>1977</p>
        </div>
        <div class="track__author">
            <p></p>
        </div>
        <div class="track__name">
            <p>we will rock you</p>
        </div>
    </div>`
}


