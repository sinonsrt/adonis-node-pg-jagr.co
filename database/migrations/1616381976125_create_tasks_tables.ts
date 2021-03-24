import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'tasks'

  public async up () {
    this.schema.createTable(this.tableName, (table) =>{
      table.increments('id').primary()
      table.string('name').notNullable()
      table.text('description').nullable()
      table.timestamp('due_at').nullable()
      table.integer('status_id').unsigned().notNullable().defaultTo(1)
      table.integer('created_by').unsigned().notNullable().references('id').inTable('users')
      table.integer('assigned_to').unsigned().notNullable().references('id').inTable('users')
      table.timestamps(true, true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
