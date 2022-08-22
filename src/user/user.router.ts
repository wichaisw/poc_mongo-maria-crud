import { DoneFuncWithErrOrRes, FastifyInstance, FastifyRegisterOptions, FastifyReply, FastifyRequest } from "fastify";
import * as userController from './user.controller';

// function userRouter(fastify: FastifyInstance, opts: FastifyRegisterOptions<unknown>, done: DoneFuncWithErrOrRes) {
function userRouter(fastify: FastifyInstance, opts: FastifyRegisterOptions<unknown>, done: any) {
  // fastify.get('/', (request: FastifyRequest, reply: FastifyReply) => {
  //   return userService.getAllUser();
  // })

  fastify.post('/', userController.createUser)

  done();
}

export default userRouter;