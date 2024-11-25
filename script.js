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

        if (grupo.id == 'first') {
            BtnVoltar = document.getElementById('btn_voltar');
            BtnVoltar.classList.remove('cor_default');
            BtnVoltar.classList.add('cor_branca');
            btnVoltar.classList.add('v_style');
        } else {
            BtnVoltar = document.getElementById('btn_voltar');
            BtnVoltar.classList.remove('cor_branca');
            BtnVoltar.classList.add('cor_default');
            btnVoltar.classList.remove('v_style');
        }
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

ScrollReveal().reveal('.hero');
ScrollReveal().reveal('.gp1', { delay: 300 });
ScrollReveal().reveal('.gp2', { delay: 400 });
ScrollReveal().reveal('.gp3', { delay: 500 });
ScrollReveal().reveal('.gp4', { delay: 600 });
ScrollReveal().reveal('.gp5', { delay: 700 });