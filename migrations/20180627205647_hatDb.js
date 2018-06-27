
exports.up = function(knex, Promise) {
    return    knex.schema.createTable('hatDb', function(table){
        table.increments('id')
        table.string('type')
        table.string('material')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hatDb')
};
