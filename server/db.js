const knex = require ('knex')
const config = require('../knexfile').development
const db = knex(config)


module.exports = {
    getHats
}

function getHats () {
    return db('hatDb')
    .select()

}