const form = document.querySelector('.dencity');

form.addEventListener('submit',(e) => {
    // mematikan refres
    e.preventDefault();

    let gram = form.gram.value
    let milli = form.milli.value


    let hasil = gram / milli;
    let dencity = hasil * 1000;


    console.log(dencity);
    // console.log(milli + ' milli');

});