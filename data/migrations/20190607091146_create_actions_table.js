

exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        // our table had a primary key id, that auto increments and is an integer
      tbl.increments();//Creates primary id that auto increments
  
        // and a varchar called name, 128, unique not null
      tbl
      .string('name', 128)
      .notNullable()
      .unique(); 

      tbl
      .string('description', 128)
      .notNullable()

      tbl
      .string('notes', 128)
      .notNullable()

      tbl
      .boolean('completed')
      .notNullable() 
     
      });
  };

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};