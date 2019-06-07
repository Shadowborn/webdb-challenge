
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, name: 'Use axe', description: 'Axe life!', notes:'axe notes', completed: 0, project_id: 3},
        {id: 2, name: 'Use bow', description: 'Shooty shoot!', notes:'bow notes', completed: 1, project_id: 1},
        {id: 3, name: 'Use sword', description: 'Slice and dice!', notes:'sword notes', completed: 1, project_id: 2}
      ]);
    });
};
