
const request = require('request')

const forecast = (lat, long, callback) => {

  const url = 'http://api.weatherstack.com/current?access_key=b0ffcdae6338b4ec8d969a1db1373d61&query=' + lat + ',' + long
  
  request({url, json : true},(error,{body}) => {

    if(error){
      callback('Unable to connect to services!', undefined)
    }else if(body.error){
      callback('Unable to fing the co-ordinates!', undefined)
    }else{
      callback(undefined ,  ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.'
      )
    }
  })

}

module.exports = forecast