const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())


const fighters = {
    'kamaru usman': {
        'name': 'Kamaru Usman',
        'ranking': 1,
        'nickname': 'Nigerian Nightmare',
        'weightClass': 'Welterweight (170)'
    },
    'unknown': {
        'name': 'unknown',
        'ranking': 'unknown',
        'nickname': 'unknown',
        'weightClass': 'unknown'
    },
    'alexander volkanovski': {
        'name': 'Alexander Volkanovski',
        'ranking': 2,
        'nickname': 'The Great',
        'weightClass': 'Featherweight (145)'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const fighterName = request.params.name.toLowerCase()
    if (fighters[fighterName]){
        response.json(fighters[fighterName])
    }else{
        response.json(fighters['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})