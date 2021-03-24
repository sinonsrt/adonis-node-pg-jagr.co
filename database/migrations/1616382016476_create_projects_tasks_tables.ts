import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProjectsTaks extends BaseSchema {
  protected tableName = 'projects_taks'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('sort_order').unsigned().notNullable().defaultTo(0)
      table.integer('project_id').unsigned().references('id').inTable('projects')
      table.integer('task_id').unsigned().references('id').inTable('tasks')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
