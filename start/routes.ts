/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/
import Route from '@ioc:Adonis/Core/Route'

Route.on('/').render('welcome')

/* Route.group(() => {
    
    Route.get('/', 'UsersController.index').as('index')//.namespace('App/Controllers/Http/Users')

    Route.get('/:id', 'UsersController.show').as('show')

    Route.get('/new', 'UserController.create').as('create')

    Route.post('/', 'UserController.store').as('store')
    
    Route.post('/:id/edit', 'UsersController.edit').as('edit')

    Route.put('/', 'UsersController.update').as('update')

    Route.delete('/', 'UsersController.destroy').as('delete')
 
}).prefix('/users').as('users.') */

Route.resource('users', 'UsersController').namespace('App/Controllers/Http/Users')

