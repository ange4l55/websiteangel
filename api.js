//console.log("Archivo JS");

const URL = 'https://randomuser.me/api/'
//Primer usuario
fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.getElementById('apiImagen');
        //console.log(data);
        img.src = data.results[0].picture.large;
        // console.log(selectedimage);

        const name = document.getElementById('apinombre');
        selectedtitle = data.results[0].name.title;
        selectedfirst = data.results[0].name.first;
        selectedlast = data.results[0].name.last;
        name.innerText = "Nombre: " + selectedtitle + " " + selectedfirst + " " + " " + selectedlast;

        const mail = document.getElementById('apicorreo');
        selectedmail = data.results[0].email;
        mail.innerText = "Correo: " + selectedmail;

        const username = document.getElementById('apiusuario');
        selectedusername = data.results[0].login.username;
        username.innerText = "Usuario: " + selectedusername;
    });
//Segundo usuario
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.getElementById('apiImagen2');
        //console.log(data);
        img.src = data.results[0].picture.large;
        // console.log(selectedimage);

        const name = document.getElementById('apinombre2');
        selectedtitle = data.results[0].name.title;
        selectedfirst = data.results[0].name.first;
        selectedlast = data.results[0].name.last;
        name.innerText = "Nombre: " + selectedtitle + " " + selectedfirst + " " + " " + selectedlast;

        const mail = document.getElementById('apicorreo2');
        selectedmail = data.results[0].email;
        mail.innerText = "Correo: " + selectedmail;

        const username = document.getElementById('apiusuario2');
        selectedusername = data.results[0].login.username;
        username.innerText = "Usuario: " + selectedusername;
    });
//Tercer usuario
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.getElementById('apiImagen3');
        //console.log(data);
        img.src = data.results[0].picture.large;
        // console.log(selectedimage);

        const name = document.getElementById('apinombre3');
        selectedtitle = data.results[0].name.title;
        selectedfirst = data.results[0].name.first;
        selectedlast = data.results[0].name.last;
        name.innerText = "Nombre: " + selectedtitle + " " + selectedfirst + " " + " " + selectedlast;

        const mail = document.getElementById('apicorreo3');
        selectedmail = data.results[0].email;
        mail.innerText = "Correo: " + selectedmail;

        const username = document.getElementById('apiusuario3');
        selectedusername = data.results[0].login.username;
        username.innerText = "Usuario: " + selectedusername;
    });