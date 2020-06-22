import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import User from '../models/User';


interface Request {
  name: string;
  email: string;
  password: string;
  category: string;
}

class CreateUserService {
  public async execute({ name, email, password, category }: Request): Promise<User> {
    const userRepository = getRepository(User);

    //verifica se nao existe outro usuario com o mesmo email

    const checkExistsUser = await userRepository.findOne({ where: { email } });

    if (checkExistsUser) {
      throw new Error('Email adress already userd');
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
      category,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
