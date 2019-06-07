
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Slay Dragons', description: 'Slay em!', completed: 1},
        {id: 2, name: 'Get Gold', description: 'Get em!', completed: 0},
        {id: 3, name: 'Conquer Kingdom', description: 'Conquer em!', completed: 1}
      ]);
    });
};
