const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const yogaPoses = {
    'downward dog': {
        'mainMuscleGroups': 'deltoids, triceps, trapezius, erector spinae and back of the legs',
        'benefits': 'Strengthen muscles, improves posture and circulation of blood',
        'experienceLevel': 'beginner-intermediate'
    },
    'cat':{
      'mainMuscleGroups': 'neck, shoulders and spine',
        'benefits': 'Increases mobility, stretches the neck and spine',
        'experienceLevel': 'beginner'
    },
    'handstand':{
      'mainMuscleGroups': 'shoulders, wrist and core',
        'benefits': 'Improves balance and blood circulation and decompresses the spine',
        'experienceLevel': 'intermediate-advanced'
    },
    'cobra':{
      'mainMuscleGroups': 'spinal extensors, upper back, triceps, hamstrings and glutes',
        'benefits': 'Improves sleep, reduces inflammation, boosts digestive system and improves reproductive system',
        'experienceLevel': 'beginner'
    },
    'unknown':{
    'muscleGroups': 'try cat, cobra, hanstand or downward dog',
        'benefits': 'vinyasa yoga',
        'experienceLevel': 'all-levels'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const yogaName = request.params.name.toLowerCase()

    if( yogaPoses[yogaName] ){
        response.json(yogaPoses[yogaName])
    }else{
        response.json(yogaPoses['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})