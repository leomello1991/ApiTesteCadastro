import {Router} from 'express'
import CreateUserService from '../services/CreateUserService'
import {getRepository} from 'typeorm'
import User from '../models/User'

const usersRoute = Router()

usersRoute.get('/', async (request, response) => {
  const userRepository = getRepository(User)
  const users = userRepository.find()

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