const express = require('express');
const app = express();

//rutas
app.get('/', (req, res)=>{
    res.send("Pagina principal");
});


app.listen(3000, ()=>{
    console.log(`Server corriendo en el puerto ${3000}`);
})
