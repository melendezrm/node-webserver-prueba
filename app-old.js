

const http = require('http');

http.createServer( (req, res) => {
    
   res.writeHead(201);

   
   res.write('404 | page not found');
   
   
   
   
   res.end();

})

.listen(8080);

console.log('Escuchando el puerto');