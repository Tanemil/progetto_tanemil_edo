alert('Ciao Ema') 

let dati = [];  // array che conterrà i dati del server/memoria locale

class Post {   // prototipo oggetto post
    constructor(autore,imgAutore,descrAutore,titoloPost,imgPost,contenuto){
        this.autore = autore;
        this.imgAutore = imgAutore;
        this.descrAutore = descrAutore;
        this.titoloPost = titoloPost;
        this.imgPost = imgPost;
        this.contenuto = contenuto;
    }
}
function prendiDati(){          //prende i dati, You don't say?
    let autore = document.getElementsByClassName('form-control')[0].value;
    let imgAutore = document.getElementsByClassName('form-control')[1].value;
    let descrAutore = document.getElementsByClassName('form-control')[2].value;
    let titoloPost = document.getElementsByClassName('form-control')[3].value;
    let imgPost = document.getElementsByClassName('form-control')[4].value;
    let contenuto = document.getElementsByClassName('form-control')[5].value;

    // controllo che non ci siano input vuoti

    if(autore.trim() !== '' && imgAutore.trim() !== '' && descrAutore.trim() !== '' && titoloPost.trim() !== '' && imgPost.trim() !== '' && contenuto.trim() !== ''){
        
        //creazione obj

        let post = new Post(autore,imgAutore,descrAutore,titoloPost,imgPost,contenuto);
        dati.push(post)
        console.log(dati.length)
        reset()
    }else{
        alert('Check input!')
    }


    
}
function reset(){            //reset dei campi
    document.getElementsByClassName('form-control')[0].value = '';
    document.getElementsByClassName('form-control')[1].value = '';
    document.getElementsByClassName('form-control')[2].value = '';
    document.getElementsByClassName('form-control')[3].value = '';
    document.getElementsByClassName('form-control')[4].value = '';
    document.getElementsByClassName('form-control')[5].value = '';
}











let btn_creaPost =document.querySelector('.input-group button')     //bottone associato alla funzione
btn_creaPost.addEventListener('click',prendiDati)