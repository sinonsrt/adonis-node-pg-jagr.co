import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersService from 'App/Services/UserServices'

export default class UsersController {

    public async index({ response }: HttpContextContract){
        return response.json({ userNamespace: true })
    }

    public async show({ response, params }: HttpContextContract) {
        const test = UsersService.test();
        return response.json({ userId: test })
    }

    public async update(ctx: HttpContextContract) {

    }

    public async store(ctx: HttpContextContract) {

    }

    public async edit(ctx: HttpContextContract) {

    }

    public async destroy(ctx: HttpContextContract) {

    }
}
