import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProjectsTaks extends BaseSchema {
  protected tableName = 'projects_taks'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('role_id').unsigned().notNullable().defaultTo(1)
      table.integer('project_id').unsigned().references('id').inTable('projects')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
