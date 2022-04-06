/* eslint-disable prettier/prettier */
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
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('register', 'AuthController.register')
Route.post('login', 'AuthController.login')

Route.get('mostraConexion', 'HistorialMongoosesController.conexcion');
Route.get('mostrarSensores', 'SensoresMongoosesController.mostar');

Route.get('token', async ({ auth,response}) => {
    await auth.use('api').authenticate()
    console.log(auth.use('api').user!)
    return response.created({
      resp:"activo",
      data:auth.user})})