import { FastifyReply, FastifyRequest } from "fastify";
import { User } from "./user.entity";
import * as userService from './user.service';

const createUser = async(request: FastifyRequest, reply: FastifyReply): Promise<User> => {
  const newUser = new User();
  newUser.firstName = 'Wichai';
  newUser.lastName = 'Sawang';

  const user = await userService.createUser(newUser);

  return reply.status(201).send(user);
}

export {
  createUser
}