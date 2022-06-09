const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

let count = 0;
let users = [];

// GET
app.get('/api/users', (request, response) => {
    response.json(users);
})

app.get('/api/users/:id', (request, response) => {
    const id = request.params.id;
    users.forEach(ele => {
        if(ele.id === +id) {
            response.json(ele);
            return;
        }
    })
})

// POST
app.post('/api/users',(request, response) => {
    const obj = request.body;
    console.log(obj)
    obj.id = count++;
    users.push(obj);
    response.json('Utente Aggiunto nel DB');
})

// PUT
app.put('/api/users/:id', (request, response) => {
    const id = request.params.id;
    const obj_mod = request.body;

    //Soluzione 1
    /* let obj = users.find(ele => ele.id === +id);
    obj = obj_mod; */

    //Soluzione 2
    let index = users.findIndex(ele => ele.id === +id);
    users.splice(index, 1, obj_mod);

    //Soluzione 3
    /* users.forEach((ele, i) => {
        if(ele.id === +id) {
            users[i] = obj_mod;
            return;
        }
    }) */

    response.send('Utente Modificato nel DB');
})

// DELETE
app.delete('/api/users/:id', (request, response) => {
    const id = request.params.id;
    //Soluzione 1
    users = users.filter(ele => ele.id !== +id);
    
    //Soluzione 2
    /* let obj = users.find(ele => ele.id === +id);
    let index = users.indexOf(obj);
    users.splice(index, 1); */

    //Soluzione 3
    /* let index = users.findIndex(ele => ele.id === +id);
    users.splice(index, 1); */

    //Soluzione 4
    /* let obj;
    users.forEach(ele => {
        if(ele.id === +id) {
            obj = ele;
            return;
        }
    })
    let index = users.indexOf(obj);
    users.splice(index, 1); */

    //Soluzione 5
    /* let index;
    users.forEach((ele, i) => {
        if(ele.id === +id) {
            index = i;
            return;
        }
    })
    users.splice(index, 1); */
    response.send('Utente Eliminato dal DB');
})

app.listen(port, () => console.log('Server attivo sulla porta 3000'));