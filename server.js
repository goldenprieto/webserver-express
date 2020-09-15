const express = require('express');
const colors  = require('colors');
const app =  express();

const hbs = require('hbs');
require('./hbs/helpers');//importa los helpers de ese directorio

const port  = process.env.PORT || 3000;

app.use (express.static( __dirname +'/public'));

//motor de renderizado engine hbs
hbs.registerPartials(__dirname + '/views/parciales',(err)=>{
    if(!err)
        console.log('Direccion Con exito')
    else
        console.log('Error en el hbs'.red,err)
})
app.set('view engine','hbs');


///  index  de paginas
app.get('/',(req, res)=> {
     res.render('home',{
         nombre:'arles pRieto'
     });

});
app.get('/abount',(req, res)=> {
    res.render('abount',{
        nombre:'Arles'
        
    });

});
app.listen(port,() =>{
    console.log(`Escuchando en el puerto ${port}`.green);
});
