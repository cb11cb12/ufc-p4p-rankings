const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())


const fighters = {
    'kamaru usman': {
        'name': 'Kamaru Usman',
        'ranking': 1,
        'nickname': 'Kamaru "The Nigerian Nightmare" Usman',
        'weightClass': 'Welterweight (170) Champion'
    },
    'unknown': {
        'name': 'unknown',
        'ranking': 'Unranked',
        'nickname': 'Please enter another fighter',
        'weightClass': 'Please enter another fighter'
    },
    'alexander volkanovski': {
        'name': 'Alexander Volkanovski',
        'ranking': 2,
        'nickname': 'Alexander "The Great" Volkanovski',
        'weightClass': 'Featherweight (145) Champion'
    },
    'israel adesanya': {
        'name': 'Israel Adesanya',
        'ranking': 3,
        'nickname': '"The Last Stylebender" Israel Adesanya',
        'weightClass': 'Middleweight (185) Champion'
    },
    'charles oliveira': {
        'name': 'charles oliveira',
        'ranking': 4,
        'nickname': ' Charles "Do Bronx" Oliveira',
        'weightClass': 'Lightweight (155) Champion'
    },  
    'francis ngannou': {
        'name': 'Francis Ngannou',
        'ranking': 5,
        'nickname': 'Francis "The Predator" Ngannou',
        'weightClass': 'Heavyweight (<265) Champion'
    },
    'max holloway': {
        'name': 'Max Holloway',
        'ranking': 6,
        'nickname': 'Max "Blessed" Holloway',
        'weightClass': 'Featherweight (145) #1 Contender'
    },
    'dustin poirier': {
        'name': 'Dustin Poirier',
        'ranking': 7,
        'nickname': 'Dustin "The Diamond" Poirier',
        'weightClass': 'Lightweight (155) #2 Contender'
    },
    'glover teixeira': {
        'name': 'Glover Teixeira',
        'ranking': 8,
        'nickname': 'Glover Teixeira',
        'weightClass': 'Light Heavyweight (205) Champion'
    },
    'aljamain sterling': {
        'name': 'Aljamain Sterling',
        'ranking': 9,
        'nickname': '"Funk Master" Aljamain Sterling',
        'weightClass': 'Bantamweight (135) Champion'
    },
    'jon jones': {
        'name': 'Jon Jones',
        'ranking': 10,
        'nickname': 'Jon "Bones" Jones',
        'weightClass': 'Heavyweight (206-265) and former LHW Champion'
    },
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