$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// filmes
const filmes = document.querySelector(".filme-destaque");

// titulo
const titulo = document.querySelector(".titulo");

// descrição
const discricao = document.querySelector('.descricao');


function primeiroFilme(){
    filmes.style["background-image"] = "url(../img/capa-house.jpg)";
    titulo.innerText = "HOUSE OF CARDS";
    discricao.innerText = "O congressista Francis Underwood e sua mulher, Claire, fazem de tudo para conquistar seus objetivos,  não importa o que aconteça. Um mundo político recheado de ganância, corrupção e luxúria na capitalWashington.";
    setTimeout(segundoFilme, 15000);
}

function segundoFilme(){
    filmes.style["background-image"] = "url(../img/breaking-bad.jpg)";
    titulo.innerText = "Breaking Bad";
    discricao.innerText = "O químico Walter White, um homem brilhante frustrado em dar aulas para adolescentes do ensino médio enquanto lida com um filho sofrendo de paralisia cerebral, uma esposa grávida e dívidas intermináveis.";
    setTimeout(terceiroFilme, 15000);
}

function terceiroFilme(){
    filmes.style["background-image"] = "url(../img/madam-cj-walker.jpg)";
    titulo.innerText = "Self Made";
    discricao.innerText = "Ativista social e primeira mulher milionária dos Estados Unidos a conquistar a própria fortuna; por meio de uma linha de produtos capilares e cosméticos para mulheres negras.";
    setTimeout(quartoFilme, 15000);
}

function quartoFilme(){
    filmes.style["background-image"] = "url(../img/warcraft.jpg)";
    titulo.innerText = "Warcraft";
    discricao.innerText = "Em busca de uma nova terra para viver, os guerreiros Orc atravessam um portal e chegam até Azeroth, uma região pacífica que vira um campo de batalha pela sobrevivência de dois povos.";
    setTimeout(quintoFilme, 15000);
}

function quintoFilme(){
    filmes.style["background-image"] = "url(../img/ozarkp.png)";
    titulo.innerText = "Ozark";
    discricao.innerText = "Marty, um consultor financeiro, leva a família a um resort em Ozarks para mantê-la segura depois que as suas negociações com um cartel de drogas mexicano dão errado.";
    setTimeout(sextoFilme, 15000);
}

function sextoFilme(){
    filmes.style["background-image"] = "url(../img/river.jpg)";
    titulo.innerText = "Riverdale";
    discricao.innerText = "Uma versão subversiva de Archie, Betty, Veronica e seus amigos, explora o surrealismo da vida em uma pequena cidade e mostra a estranheza que se esconde atrás da fachada saudável de Riverdale.";
    setTimeout(primeiroFilme, 15000);
}

primeiroFilme();


