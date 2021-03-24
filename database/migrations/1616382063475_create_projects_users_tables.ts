import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProjectsUsers extends BaseSchema {
  protected tableName = 'projects_users'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('project_id').unsigned().notNullable().references('id').inTable('projects')
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('role_id').unsigned().notNullable().defaultTo(1)
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
