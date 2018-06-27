import request from 'superagent'

export function getHats () {
    return request
    .get()
}