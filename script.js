const bodyD = document.querySelector('body');
const pop_up = document.querySelector(".pop_up");
const grupos = document.querySelectorAll(".arq_btn");
const btnVoltar = document.getElementById('voltar');

grupos.forEach(grupo => {
    grupo.onclick = () => {
        pop_up.classList.remove('voltar');
        pop_up.style.display = 'flex';

        ClassName = '.' + grupo.id;
    
        Artigo = document.querySelector(ClassName);
        Artigo.style.display = "block";
    };
});

function LogDoc () {
    Lista = document.querySelectorAll('.volt');
    Lista.forEach(DocT => {
        DocT.style.display = 'none';
    });
}

btnVoltar.onclick = () => {
    pop_up.classList.add('voltar');
    setTimeout(() => {
        pop_up.style.display = 'none';
    }, 300);
    LogDoc();
};

const LeftScroll = document.getElementById('right_slider');
const RightScroll = document.getElementById('left_slider')
const GrupoUM = document.querySelector('.gp1');
var margem = 0;

LeftScroll.onclick = () => {
    GrupoUM.classList.add('margin_left');
    LeftScroll.classList.add('voltar');
    RightScroll.style.display = 'flex';
    setTimeout(() => {
        LeftScroll.style.display = 'none';
    }, 301);
}
RightScroll.onclick = () => {
    GrupoUM.classList.remove('margin_left');
    RightScroll.classList.add('voltar');
    LeftScroll.style.display = 'flex';
    setTimeout(() => {
        RightScroll.style.display = 'none';
    }, 301);
}

const InfoRoom = document.querySelectorAll('.info_room');

InfoRoom.forEach(link => {
    link.onclick = () => {
        pop_up.classList.remove('voltar');
        pop_up.style.display = 'flex';
        InfoSala = document.querySelector('.sixth');
        InfoSala.style.display = "block";
    };
});

const PlayPauseUM = document.getElementById('play_pause1');
const PlayPauseDois = document.getElementById('play_pause2');
const AudioUm = document.getElementById('audio_1');
const AudioDois = document.getElementById('audio_2');
const ProgressoUm = document.getElementById('progress_1');
const BarraProgressoUm = document.getElementById('progress_bar_1');
const BarraProgressoDois = document.getElementById('progress_bar_2');
const ProgressoDois = document.getElementById('progress_2');
const timeAudioUm = document.getElementById('timeAudioUm');
const timeAudioDois = document.getElementById('timeAudioDois');
var LigDesAudio = true;


PlayPauseUM.onclick = () => {
    if (LigDesAudio) {
        PlayPauseUM.classList.remove('fa-play');
        PlayPauseUM.classList.add('fa-pause');
        LigDesAudio = false;
        AudioUm.play();
    } else {
        PlayPauseUM.classList.remove('fa-pause');
        PlayPauseUM.classList.add('fa-play');
        LigDesAudio = true;
        AudioUm.pause();
    }

    AudioUm.addEventListener('timeupdate', () => {
        const { duration, currentTime } = AudioUm;
        const progressParent = (currentTime / duration) * 100;
        ProgressoUm.style.width = `${progressParent}%`;
        let minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime % 60);
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        timeAudioUm.textContent = `${minutes}:${seconds}`;
    });

    BarraProgressoUm.addEventListener('mousedown', (e) => {
        const {duration} = AudioUm;
        const progressClick = (e.offsetX / BarraProgressoUm.offsetWidth) * 100;
        const currentTimeClick = (progressClick * duration) / 100;
        AudioUm.currentTime = currentTimeClick;
    });

    BarraProgressoUm.addEventListener('mousedown', (e) => {
        const {duration} = AudioUm;
        let mouseMove = (e) => {
            const progressClick = (e.offsetX / BarraProgressoUm.offsetWidth) * 100;
            const currentTimeClick = (progressClick * duration) / 100;
            AudioUm.currentTime = currentTimeClick;
        };
        BarraProgressoUm.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', () => {
            BarraProgressoUm.removeEventListener('mousemove', mouseMove);
        });
    });
    
    AudioUm.addEventListener('ended', () => {
        PlayPauseUM.classList.remove('fa-pause');
        PlayPauseUM.classList.add('fa-play');
        LigDesAudio = true;
        AudioUm.currentTime = 0;
    });
};
PlayPauseDois.onclick = () => {
    if (LigDesAudio) {
        PlayPauseDois.classList.remove('fa-play');
        PlayPauseDois.classList.add('fa-pause');
        LigDesAudio = false;
        AudioDois.play();
    } else {
        PlayPauseDois.classList.remove('fa-pause');
        PlayPauseDois.classList.add('fa-play');
        LigDesAudio = true;
        AudioDois.pause();
    }

    AudioDois.addEventListener('timeupdate', () => {
        const { duration, currentTime } = AudioDois;
        const progressParent = (currentTime / duration) * 100;
        ProgressoDois.style.width = `${progressParent}%`;
        let minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime % 60);
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        timeAudioDois.textContent = `${minutes}:${seconds}`;
    });

    BarraProgressoDois.addEventListener('mousedown', (e) => {
        const {duration} = AudioDois;
        const progressClick = (e.offsetX / BarraProgressoDois.offsetWidth) * 100;
        const currentTimeClick = (progressClick * duration) / 100;
        AudioDois.currentTime = currentTimeClick;    
    });

    BarraProgressoDois.addEventListener('mousedown', (e) => {
        const {duration} = AudioDois;
        let mouseMove = (e) => {    
            const progressClick = (e.offsetX / BarraProgressoDois.offsetWidth) * 100;
            const currentTimeClick = (progressClick * duration) / 100;
            AudioDois.currentTime = currentTimeClick;
        };
        BarraProgressoDois.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', () => {
            BarraProgressoDois.removeEventListener('mousemove', mouseMove);
        });
    });
    AudioDois.addEventListener('ended', () => {
        PlayPauseDois.classList.remove('fa-pause');
        PlayPauseDois.classList.add('fa-play');
        LigDesAudio = true;
        AudioDois.currentTime = 0;
    });
};

if (window.innerWidth <= 768) { // Check if the device width is 768px or less
    grupos.forEach(grupo => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
    });
}