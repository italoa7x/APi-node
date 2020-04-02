
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', (table) =>{
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();   
    });
};


exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
};

