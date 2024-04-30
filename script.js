const form = document.querySelector('.dencity');
const suhu = document.querySelector(".p1");
const reqSuhu = document.querySelector(".p2");

function setTextConten (dencity){
    suhu.textContent = `densitas : ${dencity}`;
    if(dencity < 650 ){
        reqSuhu.textContent = `Suhu yang di rekomendasikan di 150`

    }else if ( dencity >= 651 && dencity < 700 ){
        reqSuhu.textContent = `Suhu yang di rekomendasikan di 160`

    }else if (dencity >= 701 && dencity < 750 ){
        reqSuhu.textContent = `Suhu yang di rekomendasikan di 170`

    }else if ( dencity > 750 ){
        reqSuhu.textContent = `Suhu yang di rekomendasikan di 190`

    }else{
        reqSuhu.textContent = `Suhu di luar batas`

    }
};





form.addEventListener('submit',(e) => {
    // mematikan refres
    e.preventDefault();

    let gram = form.gram.value
    let milli = form.milli.value


    let hasil = gram / milli;
    let dencity = hasil * 1000;

    

    setTextConten(dencity);

    

});
