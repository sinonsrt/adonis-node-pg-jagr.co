import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v5 as uuidv5 } from 'uuid'
import Env from '@ioc:Adonis/Core/Env'
import Status from 'contracts/Enums/Status'

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

  @beforeCreate()
  public static assignUuid(task: Task){
    task.id = uuidv5(DateTime.now().toString(), Env.get('UUID_NAMESPACE'))
  }
}
