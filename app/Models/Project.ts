import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { v5 as uuidv5 } from 'uuid'
import Env from '@ioc:Adonis/Core/Env'
import Status from 'Contracts/Enums/Status'
import User from './User'
import { ManyToMany } from '@ioc:Adonis/Lucid/Relations'
import Task from './Task'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description?: string

  @column()
  public statusId: Status

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => User, {
    pivotColumns: ['role_id']
  }) 
  public users: ManyToMany<typeof User>

  @manyToMany(() => Task, {
    pivotColumns: ['sort_order']
  })
  public tasks: ManyToMany<typeof Task>

  @beforeCreate()
  public static assignUuid(project: Project){
    project.id = uuidv5(DateTime.now().toString(), Env.get('UUID_NAMESPACE'))
  }
}
