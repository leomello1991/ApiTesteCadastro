import {Router} from 'express'
import CreateUserService from '../services/CreateUserService'
import {getRepository, getCustomRepository} from 'typeorm'
import UsersRepository from '../repository/UsersRepository'
import User from '../models/User'

const usersRoute = Router()

usersRoute.get('/', async (request, response) => {
  const userRepository = getRepository(User)
  const users = await userRepository.find()
  

  
  return response.json(users)
})


usersRoute.post('/', async (request, response) => {
  try {
    const { name, email, password, category } = request.body;
    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
      category
    });

    delete user.password;

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRoute