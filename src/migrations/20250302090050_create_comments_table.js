export async function up(knex) {
    await knex.schema.createTable('comments', (table) => {
        table.increments('id').primary();
        table.integer('post_id').references('id').inTable('posts')
        table.text('content').notNullable();
        table.string('commenter_name').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
}

export async function down(knex) {
    await knex.schema.dropTable('comments')
}