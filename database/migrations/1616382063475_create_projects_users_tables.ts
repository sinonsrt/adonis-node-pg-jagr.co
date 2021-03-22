import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProjectsUsers extends BaseSchema {
  protected tableName = 'projects_users'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('project_id').references('id').inTable('projects')
      table.integer('user_id').references('id').inTable('users')
      table.integer('sort_order').notNullable().defaultTo(0)
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
