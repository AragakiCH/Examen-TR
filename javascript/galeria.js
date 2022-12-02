const hamburguer1 = document.querySelector('.hamburguer')
const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.image-light');


imagenes.forEach(image => {
    image.addEventListener('click', () => {
        aparecerImagen(image.getAttribute('src'));
    })
});

contenedorLight.addEventListener('click', (e) => {
    if(e.target != imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showimage')
        hamburguer1.style.opacity = '1'
    }
})


const aparecerImagen = (image) => {
    imagenesLight.src = image;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showimage');
    hamburguer1.style.opacity = '0'

}