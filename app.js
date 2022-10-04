const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/me', (request, response) => {
    response.status(200).json({
        message: {name: 'willy',
                    age:    34,
                    country_name:   'Peru'
                },
        verb:   request.method
    })
})

app.post('/metas', (request, response) => {
    response.status(200).json({
        message: {1 : 'Escuchar musica',
                2 : 'Pasear con mi familia',
                3 : 'Ver pelicula'
        },
        verb:   request.method
    })
})

app.patch('/metas', (request, response) => {
    response.status(200).json({
        message: {1 : 'De aqui a 3 años llegar a ser Senior ',
                2 : 'especializarme en React Native'
                
        },
        verb:   request.method
    })
})

app.put('/business', (request, response) => {
    response.status(200).json({
        message: {1 : 'Globant',
                2 : 'Google',
                3 : 'facebook'
                
        },
        verb:   request.method
    })
})




app.listen(10000, () => {
    console.log('Server started at port 10000')
})