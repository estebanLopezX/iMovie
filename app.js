const imagenes = document.querySelectorAll('img');
const opcionesCaratulas = document.getElementsByClassName('opciones-caratulas');
const fondo = document.querySelector('body');
const logo = document.querySelector('.logo-pelicula')




let isActive = false;

if (opcionesCaratulas.length > 0) {
    
    const primerElemento = imagenes[2];
    const segundoElemento = imagenes[3];
    const tercerElemento = imagenes[4];

    const contenedor = opcionesCaratulas[0];
    
    if (primerElemento.classList[1] == 'izquierda') {
        primerElemento.addEventListener('click', ()=>{
            primerElemento.classList.remove('izquierda');
            primerElemento.classList.add('principal');

            contenedor.insertBefore(segundoElemento,primerElemento)

            segundoElemento.classList.remove('principal');
            segundoElemento.classList.add('izquierda');

            console.log(imagenes);
            
            
            if (segundoElemento.classList[1] == 'izquierda') {
                fondo.style.background = 'url("Imaganes/SLEDERMAN\ -\ WALPAPER.jpg")';
                logo.src = "Imaganes/logo - slenderman.png";
                fondo.classList.add('requisitos-imagen')
                
                if (segundoElemento.classList[1] == 'izquierda') {
                    segundoElemento.addEventListener('click', ()=>{
                        primerElemento.classList.remove('principal');
                        primerElemento.classList.add('izquierda');

                        contenedor.insertBefore(primerElemento,segundoElemento);

                        segundoElemento.classList.remove('izquierda');
                        segundoElemento.classList.add('principal');

                       
                        fondo.style.background = 'url("Imaganes/TU\ MEJOR\ AMIGO\ -\ WALPAPER.jpg")';
                        console.log(logo.src);
                        
                        logo.src = "Imaganes/TU MEJOR AMIGO - LOGO.jpg";
                        fondo.classList.add('requisitos-imagen')

                        console.log(imagenes);
                        
                    })
                }
            }
        })
    } 
}
