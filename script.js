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
const ProgressoDois = document.getElementById('progress_2');
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
        ProgressoUm.style.width = `${progressParent}%`
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
        ProgressoDois.style.width = `${progressParent}%`
    });
};

ScrollReveal().reveal('.hero');
ScrollReveal().reveal('.gp1', { delay: 300 });
ScrollReveal().reveal('.gp2', { delay: 400 });
ScrollReveal().reveal('.gp3', { delay: 500 });
ScrollReveal().reveal('.gp4', { delay: 600 });
ScrollReveal().reveal('.gp5', { delay: 700 });

// ScrollReveal para página 1
// DESISTO DESSA PRR, IMPOSSÍVEL
// ScrollReveal({
//     origin: 'top',
//     distance: '50px',
//     reset: true,
//     duration: 1000
// })
// ScrollReveal().reveal('.container-estado-propaganda', {
//     duration: 1000
// });
// ScrollReveal().reveal('.overlay', {
//     duration: 1000
// });
// ScrollReveal().reveal('.title-img-container', {
//     duration: 1000
// });
// ScrollReveal().reveal('.content-container-es-prp', {
//     duration: 1000
// });
// ScrollReveal().reveal('.pop_up', {
//     duration: 1000
// });
