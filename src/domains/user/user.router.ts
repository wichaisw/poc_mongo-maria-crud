import { FastifyInstance, FastifyRegisterOptions } from "fastify";
import * as userController from './user.controller';

function userRouter(fastify: FastifyInstance, opts: FastifyRegisterOptions<unknown>, done: any) {
  fastify.get('/', userController.getAllUserController);
  fastify.get('/:id', userController.getUserByIdController);
  fastify.post('/', userController.createUserController);
  fastify.put('/:id', userController.updateUserController);
  fastify.delete('/:id', userController.deleteUserController)

  done();
}

export default userRouter;