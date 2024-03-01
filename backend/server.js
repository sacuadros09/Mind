const express = require('express');
const { validateUser } = require('./users');
const path = require('path'); 
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '../frontend')));

/* const cors = require('cors');
app.use(cors());  */

let usuarios = []

usuarios.push({
    name: "cuadros",
    last: "alcubo",
    password: "messi123",
    email:"aspasinhas@gmail.com",
    code: "A003810787",
    preferencias: "Meditación"
})

  //----------------------------------Usuarios-----------------------------------//
  
app.get('/usuarios', (req,res) => {
    res.send({"usuarios":usuarios})
})
  
app.post('/usuarios', (req, res) => {
    const userValidationResult = validateUser(req.body);
    console.log('result', userValidationResult.error)
  
      if(userValidationResult.error){
          return res.status(400).send(
              {message:JSON.parse(userValidationResult.error.message)}
          )
      }
  
    let nuevoUsuario = {
          name: userValidationResult.data.name,
          last: userValidationResult.data.last,
          password: userValidationResult.data.password,
          email: userValidationResult.data.email,
          code: userValidationResult.data.code,
          preferencias: userValidationResult.data.preferencias,
    }
      usuarios.push(nuevoUsuario);
      res.status(201).send({"message":"Nuevo estudiante ", "user":nuevoUsuario})
})
  
app.use("", (req, res)=>{
    res.status(404).send("My milkshake brings all the boys to the yard")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})