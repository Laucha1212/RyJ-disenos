// SCRIPT DEL CAROUSEL -- GLIDER //
window.addEventListener('load', function (){
    new Glider(document.querySelector('.carousel__lista1'), {
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: true,
        dots: '.carousel__indicadores1',
        arrows: {
            prev: '.carousel__anterior1',
            next: '.carousel__siguiente1'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 1024,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 540,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 0,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    });
});
window.addEventListener('load', function (){
    new Glider(document.querySelector('.carousel__lista2'), {
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: true,
        dots: '.carousel__indicadores2',
        arrows: {
            prev: '.carousel__anterior2',
            next: '.carousel__siguiente2'
        },
        responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 1024,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 540,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 0,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
          ]
    });
});
//GALERIA LIGHTBOX
document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imgLightBox, {
		inDuration: 500,
		outDuration: 500
	});
});


//DEFINIR VARIABLES//
let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector ('.list-container');
let containerMenu = document.querySelector ('.menu');
let activador = true;
//EFECTO SCROLL - GO TOP
let prevScrollpos = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () => {
    let currentscrollpos = window.pageYOffset;
    //MOSTRAR Y OCULTAR MENU

    if (prevScrollpos > currentscrollpos) {
        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";
    } else{
        containerMenu.style.top = "-60px";
        containerMenu.style.transition = "0.5s";
    }

    prevScrollpos = currentscrollpos;

    //mostrar y ocultar scroll estilos

    let arriba = window.pageYOffset;

    if(arriba <= 80) {
        //containerMenu.style.borderBottom = "none";
    
        goTop.style.right = "-100%";
    } else{
        //containerMenu.style.borderBottom = "3px solid #ff2e63"

        goTop.style.right = "0";
        goTop.style.transition = "0.5s";
    }
}

goTop.addEventListener('click', () => {
    document.body.scrollTop = 0; //para Safari
    document.documentElement.scrollTop = 0; //todos los navegadores
});

let verAbajo = document.querySelector('#abajo');
verAbajo.addEventListener('click', () => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
});