import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, belongsTo, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { v5 as uuidv5 } from 'uuid'
import Env from '@ioc:Adonis/Core/Env'
import Status from 'contracts/Enums/Status'
import User from './User'
import Project from './Project'
import { BelongsTo, ManyToMany } from '@ioc:Adonis/Lucid/Relations'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public createdBy?: number

  @column()
  public assignedTo?: number

  @column()
  public name: string

  @column()
  public description?: string

  @column()
  public dueAt?: DateTime

  @column()
  public statusId: Status

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    localKey: 'createdBy'
  })
  public creator: BelongsTo<typeof User> 

  @belongsTo(() => User, {
    localKey: 'assignedTo'
  })
  public assignee: BelongsTo<typeof User> 

  @manyToMany(() => Project, {
    pivotColumns: ['sort_order']
  })
  public projects: ManyToMany<typeof Project>

  @beforeCreate()
  public static assignUuid(task: Task){
    task.id = uuidv5(DateTime.now().toString(), Env.get('UUID_NAMESPACE'))
  }
}
