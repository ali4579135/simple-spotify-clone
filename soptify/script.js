console.log('spotify clone');
let songindex = 0;
let audioElemen = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');

let songs =[
    {songName : 'salama-ishq', filePath: '1.mp3', coverPath: '1.jpg'},
    {songName : 'salama-ishq', filePath: '2.mp3', coverPath: '2.jpg'},
    {songName : 'salama-ishq', filePath: '3.mp3', coverPath: '3.jpg'},
    {songName : 'salama-ishq', filePath: '4.mp3', coverPath: '4.jpg'},
    {songName : 'salama-ishq', filePath: '5.mp3', coverPath: '5.jpg'},
    {songName : 'salama-ishq', filePath: '6.mp3', coverPath: '6.jpg'},
    {songName : 'salama-ishq', filePath: '7.mp3', coverPath: '7.jpg'},
    {songName : 'salama-ishq', filePath: '8.mp3', coverPath: '8.jpg'},
]


masterPlay.addEventListener('click', ()=>{
    if(audioElemen.paused || audioElemen.currentTime<=0){
        audioElemen.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }else{
        audioElemen.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElemen.addEventListener('timeupdate', () =>{
    console.log('timeupdate');
    progress = parseInt((audioElemen.currentTime/audioElemen.duration)* 100);
    progressbar.value = progress;
})

progressbar.addEventListener('change', ()=>{
    audioElemen.currentTime = progressbar.value*audioElemen.duration/100; 
})