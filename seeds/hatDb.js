
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hatDb').del()
    .then(function () {
      // Inserts seed entries
      return knex('hatDb').insert([
        {id: 1, type: 'beanie', material: 'wool'},
        {id: 2, type: 'cap', material: 'nylon'},
        {id: 3, type: 'cap', material: 'canvas'}
      ]);
    });
};
