const fs = require('fs');

const userName ='betsabe'

fs.writeFile('user-data.txt','Nombre: ' + userName, (err)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log('Archivo creado');
});