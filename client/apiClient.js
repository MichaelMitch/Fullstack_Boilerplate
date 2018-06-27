import request from 'superagent'

export function getHats () {
    return request
    .get('/home')
    .then(reply => {
        return res.body
    })
    .catch(err => {
        console.log(err)
    })

}