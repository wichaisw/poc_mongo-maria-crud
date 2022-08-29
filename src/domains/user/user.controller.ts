import { FastifyReply, FastifyRequest } from "fastify";
import { ObjectID, ObjectLiteral } from "typeorm";
import { User } from "./user.entity";
import * as userService from './user.service';

const getAllUserController = async(request: FastifyRequest, reply: FastifyReply): Promise<User[]> => {
  const users: User[] = await userService.getAllUser();
  return reply.status(200).send(users);
}

const getUserByIdController = async(request: FastifyRequest, reply: FastifyReply): Promise<User | null> => {
  const userId: number = Number((<User>request.params).id);
  const user: User | null = await userService.getUserById(userId)
  return reply.status(200).send(user);
} 

const createUserController = async(request: FastifyRequest, reply: FastifyReply): Promise<User> => {
  const { firstName, lastName } = request.body as User;
  const newUser = new User();
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  
  const user: User = await userService.createUser(newUser);

  return reply.status(201).send(user);
  // const userDto = new UserDto(user.firstName, user.lastName);
  // return reply.status(201).send(userDto);
}

const updateUserController = async(request: FastifyRequest, reply: FastifyReply): Promise<User> => {
  const { firstName, lastName } = request.body as User;
  const userId: number = Number((<User>request.params).id);
  const updatedUser = new User();
  updatedUser.firstName = firstName;
  updatedUser.lastName = lastName;

  const user: any = await userService.updateUserById(userId, updatedUser);
  
  return reply.status(200).send(user);
}

const deleteUserController = async(request: FastifyRequest, reply: FastifyReply): Promise<void> => {
  const userId: number = Number((<User>request.params).id);

  await userService.deleteUserById(userId);

  return reply.status(204).send();
}

export {
  getAllUserController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController
}