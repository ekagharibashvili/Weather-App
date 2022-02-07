const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=b3c48095356cc82b7e76a32f84dfad0c&query=37.8267,-122.4233'

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})