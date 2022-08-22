import { DoneFuncWithErrOrRes, FastifyInstance, FastifyRegisterOptions } from "fastify";
import * as userController from './user.controller';

function userRouter(fastify: FastifyInstance, opts: FastifyRegisterOptions<unknown>, done: any) {
  fastify.get('/', userController.getAllUserController);
  fastify.get('/:id', userController.getUserById);
  fastify.post('/', userController.createUserController);

  done();
}

export default userRouter;