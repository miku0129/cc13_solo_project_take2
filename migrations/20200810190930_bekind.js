exports.up = function(knex) {
  return knex.schema.createTable("addresses", (table) => {
    table.increments().index();

    table.text("name");

    table.text("ad");

    table.text("word");

    table.text("city");

    table.text("postal_code");
  });
};

exports.down = function(knex, Promise) {};
