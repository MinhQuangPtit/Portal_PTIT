const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const sliderImages = $$('.this-img')
const sliderInputs = $$('.this-input')
const leftContol = $('.control-left')
const rightContol = $('.control-right')

sliderInputs.forEach(function(input,index) {
    const sliderImg = sliderImages[index]
    
    input.onclick = function() {
        $('.active').classList.remove('active');
        sliderImg.classList.add('active');
    }
})

leftContol.onclick = function() {
    for(var i = 0 ; i < sliderImages.length; i++){
        if( $('.active') == sliderImages[i] ) {
            if(i == 0) i = sliderImages.length-1;
            else i = i-1;
            $('.active').classList.remove('active');
            sliderImages[i].classList.add('active');
            sliderInputs[i].checked = true;
            break;
        }
    }
}

rightContol.onclick = function() {
    for(var i = 0 ; i < sliderImages.length; i++){
        if( $('.active') == sliderImages[i] ) {
            if(i ==  sliderImages.length-1) i = 0;
            else i = i+1;
            $('.active').classList.remove('active');
            sliderImages[i].classList.add('active');
            sliderInputs[i].checked = true;
            break;
        }
    }
}