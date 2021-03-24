import { DateTime } from 'luxon'
import Env from '@ioc:Adonis/Core/Env'
import { BaseModel, beforeCreate, beforeSave, column, hasMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { v5 as uuidv5 } from 'uuid'
import Hash from '@ioc:Adonis/Core/Hash'
import { HasMany, ManyToMany } from '@ioc:Adonis/Lucid/Relations'
import Task from './Task'
import Project from './Project'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Task, {
    foreignKey: 'createdBy'
  })
  public tasks: HasMany<typeof Task>
  
  @hasMany(() => Task, {
    foreignKey: 'assignedTo'
  })
  public assigneeTasks: HasMany<typeof Task>

  @manyToMany(() => Project,{
    pivotColumns: ['role_id']
  })
  public projects: ManyToMany<typeof Project>
  
  @beforeCreate()
  public static assignUuid(user: User){
    user.id = uuidv5(DateTime.now().toString(), Env.get('UUID_NAMESPACE'))
  }

  @beforeSave()
  public static async hashPassoword(user: User){
    if (user.$dirty.password) { 
    user.password = await Hash.make(user.password)
    } 
  }
}
