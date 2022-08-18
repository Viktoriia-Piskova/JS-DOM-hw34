'use strict'

class Tracks {
    constructor(number, artist, song) {
        this.number = number;
        this.artist = artist;
        this.song = song
    }
}

const tracksTable = document.getElementById('playlist')
const playList = [
    {author: "LED ZEPPELIN",song:"STAIRWAY TO HEAVEN"},
    {author: "QUEEN", song:"BOHEMIAN RHAPSODY"},
    {author: "LYNYRD SKYNYRD", song:"FREE BIRD"},
    {author: "DEEP PURPLE", song:"SMOKE ON THE WATER"},
    {author: "JIMI HENDRIX", song:"ALL ALONG THE WATCHTOWER"},
    {author: "AC/DC", song:"BACK IN BLACK"},
    {author: "QUEEN", song:"WE WILL ROCK YOU"},
    {author: "METALLICA", song:"ENTER SANDMAN"}
    ];

playList.forEach(displayPlaylist);

function displayPlaylist(track) {
    tracksTable.innerHTML += `
        <tr>
            <td class="track__date">
                <p>1977</p>
            </td>
            <td class="track__author">
                <p>${track.author}</p>
            </td>
            <td class="track__name">
                <p>${track.song}</p>
            </td>
            <td class="track__option">
                <button class="btnSmall" id="${track.author}">Open</button>
            </td>
        </tr>
    `
}


const openButtons = document.querySelectorAll('.btnSmall');
openButtons.forEach((btn) => btn.addEventListener('click', openPopup));

document.querySelector('#close').addEventListener('click', closePopup);

function openPopup(){
    console.log("open")
    const popup = document.querySelector('.close');
    popup.classList.remove('close');
    popup.classList.add('open')
}


function closePopup(){
    console.log("close");
    const popup = document.querySelector('.open');
    popup.classList.remove('open');
    popup.classList.add('close')
}


