import { FastifyInstance, FastifyRegisterOptions } from "fastify";
import * as postController from './post.controller';

function userRouter(fastify: FastifyInstance, opts: FastifyRegisterOptions<unknown>, done: any) {
  fastify.get('/', postController.getAllPostController);
  fastify.get('/:id', postController.getPostByIdController);
  fastify.post('/', postController.createPostController);
  fastify.put('/:id', postController.updatePostController);
  fastify.delete('/:id', postController.deletePostController)

  done();
}

export default userRouter;