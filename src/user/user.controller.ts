import { FastifyReply, FastifyRequest } from "fastify";
import { ObjectID } from "typeorm";
import { User } from "./user.entity";
import * as userService from './user.service';

const getAllUserController = async(request: FastifyRequest, reply: FastifyReply): Promise<User[]> => {
  const users = await userService.getAllUser();
  return reply.status(200).send(users);
}

const getUserById = async(request: FastifyRequest, reply: FastifyReply): Promise<User | void> => {
  const userObjectId: ObjectID = (<User>request.params).id;
  const user = await userService.getUserById(userObjectId)
  return reply.status(200).send(user);
} 

const createUserController = async(request: FastifyRequest, reply: FastifyReply): Promise<User> => {
  const { firstName, lastName } = request.body as User;
  const newUser = new User();
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  
  const user = await userService.createUser(newUser);

  return reply.status(201).send(user);
}

export {
  getAllUserController,
  getUserById,
  createUserController
}