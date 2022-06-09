/* alert('Ciao Ema')  */

let dati = [];  // array che conterrà i dati del server/memoria locale

class Post {   // prototipo oggetto post
    constructor(autore,imgAutore,descrAutore,titoloPost,imgPost,data,contenuto){
        this.autore = autore;
        this.imgAutore = imgAutore;
        this.descrAutore = descrAutore;
        this.titoloPost = titoloPost;
        this.imgPost = imgPost;
        this.data = data
        this.contenuto = contenuto;
    }
}
function prendiDati(){          //prende i dati, You don't say?
    let id
    let autore = document.getElementsByClassName('form-control')[1].value;
    let imgAutore = document.getElementsByClassName('form-control')[2].value;
    let descrAutore = document.getElementsByClassName('form-control')[3].value;
    let titoloPost = document.getElementsByClassName('form-control')[4].value;
    let imgPost = document.getElementsByClassName('form-control')[5].value;
    let data = document.getElementsByClassName('form-control')[6].value;
    let contenuto = document.getElementsByClassName('form-control')[7].value;

    // controllo che non ci siano input vuoti

    console.log(autore)
    if(autore.trim() !== '' && descrAutore.trim() !== '' && titoloPost.trim() !== '' && contenuto.trim() !== '' && data.trim() !== ''){
        
        //creazione obj
        console.log('yes')

        let post = new Post(autore,imgAutore,descrAutore,titoloPost,imgPost,data,contenuto);
        dati.push(post)
        addUser(post)
        reset()

    }else{
       /*  alert('Check input!') */
    }
       
}
function reset(){            //reset dei campi
    document.getElementsByClassName('form-control')[0].value = '';
    document.getElementsByClassName('form-control')[1].value = '';
    document.getElementsByClassName('form-control')[2].value = '';
    document.getElementsByClassName('form-control')[3].value = '';
    document.getElementsByClassName('form-control')[4].value = '';
    document.getElementsByClassName('form-control')[5].value = '';
    document.getElementsByClassName('form-control')[6].value = '';
}


function trascrizionePost(){      //funzione che trascriverà i post coi dati del server

}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.input-group button').addEventListener('click', ()=> prendiDati()) //bottone associato alla funzione
})


/* let api = fetch('http://localhost:3000/').then(response => response.json());
api.then(data => {
    let lista = document.querySelector('#userlist');
        data.forEach(ele => {
            // <li class="list-group-item">An item</li>
            let li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = ele.name.firstname + ' ' + ele.name.lastname + ' (' + ele.email + ') ';
            lista.appendChild(li);
        })
})

function detailUser(user) {
    fetch('https://fakestoreapi.com/users/2').then(response => response.json()).then(json => console.log(json))
} */

async function addUser(user) {
    console.log(JSON.stringify(user))
    await fetch('http://localhost:3000/api/users', {
        method:"POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
          },
    }).then(response => response.json()).then(json => console.log(json))
}

/* function updateUser(user) {
    fetch('https://fakestoreapi.com/users/3', { 
                method:"PUT",
                body: JSON.stringify(user)
            }).then(response => response.json()).then(json => console.log(json))
}

function removeUser(user) {
    fetch('https://fakestoreapi.com/users/3', { 
                method:"DELETE"
            }).then(response => response.json()).then(json => console.log(json))
} */