const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=b3c48095356cc82b7e76a32f84dfad0c&query=37.8267,-122.4233&units=f'

request({ url: url, json: true}, (error, response) => {
    console.log(`${response.body.current.weather_descriptions[0]}. It is is currently ${response.body.current.temperature} degress out, there is ${response.body.current.precip}% chance to rain`)
})