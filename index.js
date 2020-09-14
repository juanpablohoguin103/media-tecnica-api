const express = require('express');
const app = express();

app.get('/json', function(req , res)
{res.json(
    {
        nombre:'Juan Pablo',
        apellido: 'Holguin Correa' ,
        edad: 17,
        intitucion:'I.E.Santa Elena'});
});



app.listen(5050, function(){
    console.log('El servidor se encuentra activo')
})
